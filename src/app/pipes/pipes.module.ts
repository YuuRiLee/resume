import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLinePipe } from './new-line.pipe';
import { InsertUrlPipe } from './insert-url.pipe';


@NgModule({
  declarations: [
    NewLinePipe,
    InsertUrlPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NewLinePipe,
    InsertUrlPipe,
  ],
})
export class PipesModule {}
