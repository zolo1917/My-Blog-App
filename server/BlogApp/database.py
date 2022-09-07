from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from os import environ as env
from dotenv import load_dotenv
# user = 'root'
# password = 'root'
# host = 'localhost'
# port = 3306
# database = 'blog_local'
load_dotenv()
user = env.get("db_local_user")
password = env.get("db_local_password")
host = env.get("db_local_host")
port = env.get("db_local_port")
database = env.get("db_local_database")

SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{user}:{password}@{host}:{port}/{database}"

print(SQLALCHEMY_DATABASE_URL)

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
