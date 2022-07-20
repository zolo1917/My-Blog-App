from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

user = 'root'
password = 'root'
host = 'localhost'
port = 3306
database = 'blog_local'

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{user}:{password}@{host}:{port}/{database}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, echo=True
)

SessionLocal = sessionmaker(autoflush=False, autocommit=False, bind=engine)

Base = declarative_base()


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
