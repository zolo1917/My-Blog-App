import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-app-create-edit-channel',
  templateUrl: './create-edit-channel.component.html',
  styleUrls: ['./create-edit-channel.component.scss'],
})
export class CreateEditChannelComponent implements OnInit {
  constructor() {
    // testing initial code
  }

  ngOnInit(): void {
    console.log("Create Edit channel component INit")
  }
}
