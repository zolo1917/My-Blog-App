from datetime import datetime, timedelta
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from BlogApp.Models.Users import Users
from BlogApp.database import get_db
from jose import jwt, JWTError

router = APIRouter()

SECRET_KEY = "This-is-a-test-secret-key"
ALGORITHM = "HS256"

bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_bearer = OAuth2PasswordBearer(tokenUrl="token")


def get_hashed_password(password: str):
    return bcrypt_context.hash(password)


def verify_password(password: str, hashed_password):
    return bcrypt_context.verify(password, hashed_password)


def get_current_user(token: str = Depends(OAuth2PasswordBearer)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        user_id: int = payload.get("id")
        if username is None or user_id is None:
            raise HTTPException(status_code=404, detail="user now found")
        return {"username": username, "user_id": user_id}
    except JWTError:
        raise HTTPException(status_code=500, detail="error while decoding token")


def create_jwt_token(username: str,
                     user_id: int,
                     expires_delta: Optional[timedelta] = None):
    encode = {"sub": username, "id": user_id}
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    encode.update({"exp": expire})
    return jwt.encode(encode, SECRET_KEY, algorithm=[ALGORITHM])


@router.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user: Users() = db.query(Users).filter(Users.usename == form_data.username).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if not verify_password(form_data.password, user.encrypted_password):
        raise HTTPException(status_code=404, detail="Invalid password")

    # create the JWT token for the user
    token_expire = timedelta(minutes=20)
    token = create_jwt_token(user.usename, user.id, expires_delta=token_expire)
    return {"token": token}


@router.get("/logout")
async def logout():
    pass


# Exception definations

def get_user_exception():
    credential_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"}
    )
    return credential_exception


def token_exception():
    token_exception_response = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect username or password",
        headers={"WWW-Authenticate": "Bearer"}
    )
    return token_exception_response
