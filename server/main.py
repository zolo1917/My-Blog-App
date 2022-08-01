'''
    This is the main file for the blog application

    - there now a time where we are going to setup the database first
'''
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from BlogApp.Controllers import PostController, UserController, ChannelController, AuthController
import BlogApp.database as db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_methods=["*"],
    allow_headers=["*"]

)
db.Base.metadata.create_all(bind=db.engine)


app.include_router(PostController.router, tags=["Posts"])
app.include_router(UserController.router, tags=["Users"])
app.include_router(ChannelController.router, tags=["Channels"])
app.include_router(AuthController.router, tags=["Auth"])


@app.get("/")
async def mainPage():
    return {"message": "this Application is up"}

if __name__ == '__main__':
    print("this is a test console log")
    print("starting the Blog App")
