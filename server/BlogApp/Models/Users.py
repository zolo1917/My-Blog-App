from datetime import datetime, date

from sqlalchemy import BigInteger, Column, String, Boolean, Date
from sqlalchemy.orm import relationship

from BlogApp.Models.Channls import Channels
from BlogApp.Models.Post import Posts
from BlogApp.database import Base


class Users(Base):
    __tablename__ = "users"

    id = Column(BigInteger, primary_key=True, index=True)
    usename = Column(String(50), unique=True)
    encrypted_password = Column(String(100))
    first_name = Column(String(20))
    last_name = Column(String(20))
    is_active = Column(Boolean, default=False)
    created_date = Column(Date, default=date.today())
    last_logged_in = Column(Date, default=date.today())

    channel_rel = relationship(Channels)
    post_rel = relationship(Posts)
