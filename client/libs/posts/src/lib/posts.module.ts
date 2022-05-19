import { CoreModule } from '@blog-app/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditPostsComponent } from './create-edit-posts/create-edit-posts.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [CreateEditPostsComponent],
  exports: [CreateEditPostsComponent]
})
export class PostsModule {}
