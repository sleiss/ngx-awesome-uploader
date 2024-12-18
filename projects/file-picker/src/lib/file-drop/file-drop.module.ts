import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FileComponent} from './file-drop.component';
import { CloudIconComponent } from '../icons/cloud-icon/cloud-icon.component';

@NgModule({
  exports: [FileComponent],
  imports: [CommonModule, FileComponent, CloudIconComponent],
})
export class FileDropModule {}
