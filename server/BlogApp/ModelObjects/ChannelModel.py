from datetime import date
from typing import Optional

from pydantic import BaseModel, Field


class ChannelModel(BaseModel):
    id: Optional[int]
    title: str
    descriptions: str
    created_date: date = Field(default=date.today())
    moderator: int