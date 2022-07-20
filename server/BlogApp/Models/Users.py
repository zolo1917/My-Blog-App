from datetime import datetime, date
from itertools import cycle

from sqlalchemy import BigInteger, Column, String, Boolean, Date
from sqlalchemy.orm import relationship

from BlogApp.Models.Channls import Channels
from BlogApp.Models.Post import Posts
from BlogApp.database import Base


class Users(Base):
    __tablename__ = "users"

    id = Column(BigInteger, autoincrement=True,
                primary_key=True, index=True)
    username = Column(String(50), unique=True)
    encrypted_password = Column(String(100))
    first_name = Column(String(20))
    last_name = Column(String(20))
    is_active = Column(Boolean, default=False)
    created_date = Column(Date, default=date.today())
    last_logged_in = Column(Date, default=date.today())

    channel_rel = relationship(Channels)
    post_rel = relationship(Posts)
