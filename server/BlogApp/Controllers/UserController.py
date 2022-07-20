'''
    This file is for the login functionality
    first things first i need to create the crud operations

    before that I need to first do the authentication logic and do the routing login  for
'''
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from BlogApp.Controllers.AuthController import get_hashed_password
from BlogApp.ModelObjects.UserModel import UserModel
from BlogApp.Models.Users import Users
from BlogApp.database import get_db

router = APIRouter(prefix="/users")


@router.get("/getallusers")
async def get_users(db: Session = Depends(get_db)):
    return db.query(Users).all()


@router.get("/getusersByUsername/{username}")
async def get_user_by_id(usename: str, db: Session = Depends(get_db)):
    return db.query(Users).filter(usename == Users.username).first()


@router.post("/createuser")
async def create_user(user: UserModel, db: Session = Depends(get_db)):
    '''
        create a new user:
            1. the first step is to understand how to handle the transformation
            2. Post the object to the Db
            3. commit and close
    :param user:
    :param db:
    :return:
    '''
    # Validate Object to see is the user object is valid
    user: Users = transform_user_model_to_user(user)
    db.add(user)
    db.commit()
    return user


@router.put("/updateUser/{id}")
async def update_user():
    pass


@router.delete("/deleteUser/{id}")
async def delete_user():
    pass


def transform_user_model_to_user(userModel: UserModel):
    validate_user_model(userModel)
    user = Users()
    user.last_name = userModel.last_name
    user.first_name = userModel.first_name
    user.is_active = userModel.is_active
    user.username = userModel.username
    if userModel.id:
        user.id = userModel.id
    if userModel.created_date:
        user.created_date = userModel.created_date
    user.encrypted_password = get_hashed_password(userModel.password)
    user.last_logged_in = userModel.last_logged_in
    return user


def validate_user_model(user_model: UserModel):
    if (user_model.username is None or user_model.username is "") \
            or (user_model.password is None or user_model.password is ""):
        raise HTTPException(
            status_code=500, detail="Invalid Username or Password")
