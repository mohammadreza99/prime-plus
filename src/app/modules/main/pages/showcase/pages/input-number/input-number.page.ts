import {Component, Inject} from '@angular/core';
import {FormGroup, UntypedFormControl, Validators} from '@angular/forms';
import {
  NgAddon,
  NgCurrency,
  NgCurrencyDisplay,
  NgLabelPosition,
  NgNumberButtonLayout,
  NgNumberMode
} from '@ng/models/forms';
import {NgIconPosition, NgSize} from '@ng/models/offset';
import {NgConfig} from "@ng/models/config";

@Component({
  selector: 'ng-input-number-page',
  templateUrl: './input-number.page.html',
  styleUrls: ['./input-number.page.scss'],
})
export class InputNumberPage {
  constructor(@Inject('NG_CONFIG') private ngConfig: NgConfig) {
  }

  form = new FormGroup({
    c1: new UntypedFormControl(null, [Validators.required]),
  });
  binding;

  label: string = 'label';
  filled: boolean = false;
  labelWidth: number = 100;
  hint: string = '';
  rtl: boolean = this.ngConfig.rtl;
  icon: string = '';
  labelPos: NgLabelPosition = 'fix-side';
  iconPos: NgIconPosition = 'left';
  inputSize: NgSize = 'md';
  addon: NgAddon;
  // native properties
  format: boolean = true;
  showButtons: boolean = true;
  buttonLayout: NgNumberButtonLayout = 'stacked';
  mode: NgNumberMode = 'decimal';
  prefix: string = '';
  suffix: string = '';
  currency: NgCurrency;
  currencyDisplay: NgCurrencyDisplay = 'symbol';
  useGrouping: boolean = true;
  min: number = 0;
  max: number = 100;
  step: number = 1;
  allowEmpty: boolean = true;
  placeholder: string = '';
  size: number = 100;
  maxlength: number;
  disabled: boolean = false;
  readonly: boolean = false;
  showClear: boolean = true;
}
