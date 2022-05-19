from datetime import date
from typing import Optional

from pydantic import BaseModel, Field


class PostModel(BaseModel):
    id: Optional[int]
    title: str
    content: str
    created_date: Optional[date] = Field(default=date.today())
    updated_date: Optional[date] = Field(default=date.today())
    created_by: Optional[int]
    channel_id: int