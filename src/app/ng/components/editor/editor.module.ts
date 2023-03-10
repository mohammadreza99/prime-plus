import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ConfigHandlerModule} from "@ng/directives/config-handler";
import {EditorBaseComponent, EditorComponent} from "@ng/components/editor";
import {LabelStarModule} from "@ng/pipes/label-star";

@NgModule({
  declarations: [EditorComponent, EditorBaseComponent],
  imports: [
    ConfigHandlerModule,
    LabelStarModule,
    CommonModule
  ],
  exports: [EditorComponent]
})
export class EditorModule {
}
