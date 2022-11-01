import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
// time to see if this makes the thin

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatCommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
