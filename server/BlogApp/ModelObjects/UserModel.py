from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class UserModel(BaseModel):
    id: Optional[int]
    username: str
    password: str
    first_name: str
    last_name: Optional[str]
    is_active: Optional[bool] = Field(default=True)
    created_date: Optional[datetime] = Field(default=datetime.now())
    last_logged_in: Optional[datetime] = Field(default=datetime.now())
