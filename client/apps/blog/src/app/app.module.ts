import { PostsModule } from './../../../../libs/posts/src/lib/posts.module';
import { LoginModule } from './../../../../libs/login/src/lib/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@blog-app/core';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CoreModule, LoginModule, PostsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
