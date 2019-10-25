import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { ShowMaxLengthComponent } from './show-max-length/show-max-length.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { ChronoComponent } from './chrono/chrono.component';



@NgModule({
  declarations: [AutofocusDirective, ShowMaxLengthComponent, RadioButtonComponent, ChronoComponent],
  imports: [
    CommonModule
  ],
  exports: [AutofocusDirective, ShowMaxLengthComponent, RadioButtonComponent, ChronoComponent]
})
export class WidgetModule { }
