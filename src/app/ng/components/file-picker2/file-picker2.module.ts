import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ConfigHandlerModule} from "@ng/directives/config-handler";
import {FilePicker2Component} from "@ng/components/file-picker2";
import {LabelStarModule} from "@ng/pipes/label-star";
import {ButtonModule} from "@ng/components/button";

@NgModule({
  declarations: [FilePicker2Component],
  imports: [
    ConfigHandlerModule,
    ButtonModule,
    LabelStarModule,
    CommonModule,
  ],
  exports: [FilePicker2Component]
})
export class FilePicker2Module {
}
