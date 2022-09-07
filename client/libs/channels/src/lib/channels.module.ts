import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@blog-app/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditChannelComponent } from './create-edit-channel/create-edit-channel.component';
import { ShowChannelDetailsComponent } from './show-channel-details/show-channel-details.component';

@NgModule({
  imports: [CommonModule,CoreModule, FlexLayoutModule, MatCardModule],
  declarations: [CreateEditChannelComponent, ShowChannelDetailsComponent],
})
export class ChannelsModule {}
