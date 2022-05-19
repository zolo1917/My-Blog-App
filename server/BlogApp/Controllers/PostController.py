# Create the crud operations for the Posts that are going to be posted
from datetime import date
from typing import Optional

from fastapi import APIRouter, Depends
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session
from BlogApp.Controllers.AuthController import get_current_user, get_user_exception
from BlogApp.ModelObjects.PostModel import PostModel
from BlogApp.Models.Post import Posts
from BlogApp.Models.Users import Users
from BlogApp.database import get_db

router = APIRouter(prefix="/posts")


def transform_to_post_model(post_model: PostModel):
    post = Posts()
    post.title = post_model.title
    post.content = post_model.content
    post.channel_id = post_model.channel_id
    if post_model.id:
        post.id = post_model.id

    if post_model.created_date:
        post.created_date = post_model.created_date

    return post


@router.get("/getAllPosts")
async def get_all_posts(db: Session = Depends(get_db)):
    return db.query(Posts).all()


@router.get("/getPostsFromChannel/{id}")
async def get_posts_for_channel(id: int, db: Session = Depends(get_db)):
    return db.query(Posts).filter(id == Posts.channel_id).all()


@router.get("/getPostsByUserId")
async def get_post_for_user(user: dict = Depends(get_current_user), db: Session = Depends(get_db)):
    if user is None:
        raise get_user_exception()
    return db.query(Posts).filter(Posts.created_by == user.get("id"))


@router.post("/createPost")
async def create_posts(postModel: PostModel, db: Session = Depends(get_db)):
    post = transform_to_post_model(postModel)
    db.add(post)
    db.commit()
    return


@router.put("/updatePosts/{id}")
async def update_posts(id: int, db: Session = Depends(get_db)):
    pass


@router.delete("/deletePost/{id}")
async def delete_post(id: int, db: Session = Depends(get_db)):
    pass
