# Create the crud operations for Channels of posts
from datetime import date
from typing import Optional

from fastapi import APIRouter, Depends
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from BlogApp.ModelObjects.ChannelModel import ChannelModel
from BlogApp.Models.Channls import Channels
from BlogApp.database import get_db

router = APIRouter(prefix="/channels")


@router.get("/getAllChannels")
async def get_all_channel(db: Session = Depends(get_db)):
    return db.query(Channels).all()


@router.get("/getChannelByName/{name}")
async def get_channel_by_id(id: int):
    pass


@router.post("/createChannel")
async def create_channel(channel_model: ChannelModel, db:Session = Depends(get_db)):
    channel = Channels()
    if channel_model.id:
        channel.id = channel_model.id
    channel.title = channel_model.title
    channel.descriptions = channel_model.descriptions
    channel.moderator = channel_model.moderator
    if channel_model.created_date:
        channel.created_date = channel_model.created_date
    db.add(channel)
    db.commit()
    return channel_model


@router.put("/updateChannel/{id}")
async def update_channel(id: int):
    pass


@router.delete("/deleteChannel/{id}")
async def delete_channel(id: int):
    pass
