import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'


@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatToolbarModule, MatCardModule, MatButtonModule, MatDividerModule, MatInputModule,MatIconModule, FormsModule,ReactiveFormsModule, MatDialogModule, HttpClientModule],
  exports: [FlexLayoutModule, MatToolbarModule, MatCardModule, MatButtonModule, MatDividerModule, MatInputModule,MatIconModule, FormsModule,ReactiveFormsModule, MatDialogModule, HttpClientModule],
})
export class CoreModule {}
