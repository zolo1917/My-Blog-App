from sqlalchemy import Column, BigInteger, String, Date, ForeignKey
from datetime import date

from BlogApp.database import Base


class Posts(Base):
    __tablename__ = "Posts"
    id = Column(BigInteger, primary_key=True, index=True)
    title = Column(String(100))
    content = Column(String(10000))
    created_date = Column(Date, default=date.today())
    updated_date = Column(Date, default=date.today())
    created_by = Column(BigInteger, ForeignKey("users.id"))
    channel_id = Column(BigInteger, ForeignKey("channels.id"))
