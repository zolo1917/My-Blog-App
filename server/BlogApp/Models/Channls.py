from datetime import date

from sqlalchemy import BigInteger, Column, String, Date, ForeignKey
from sqlalchemy.orm import relationship

from BlogApp.database import Base


class Channels(Base):
    __tablename__ = "channels"

    id = Column(BigInteger, primary_key=True, index=True, autoincrement=True)
    title = Column(String(100), unique=True)
    descriptions = Column(String(10000))
    created_date = Column(Date, default=date.today())
    moderator = Column(BigInteger, ForeignKey("users.id"))

    posts_rel = relationship("Posts")
    user_rel = relationship("Users")
