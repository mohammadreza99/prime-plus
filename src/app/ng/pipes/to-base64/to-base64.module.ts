import {NgModule} from '@angular/core';
import {ToBase64Pipe} from "@ng/pipes/to-base64";

@NgModule({
  declarations: [ToBase64Pipe],
  exports: [ToBase64Pipe]
})
export class ToBase64Module {
}
