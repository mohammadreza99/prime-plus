import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {NgAddon, NgLabelPosition} from '@ng/models/forms';
import {NgPosition, NgSize} from '@ng/models/offset';

@Component({
  selector: 'ng-multi-select-page',
  templateUrl: './multi-select.page.html',
  styleUrls: ['./multi-select.page.scss'],
})
export class MultiSelectPage {
  form = new UntypedFormGroup({
    c1: new UntypedFormControl(null, [Validators.required]),
  });
  binding;

  label: string = 'label';
  filled: boolean = false;
  labelWidth: number = 100;
  hint: string = '';
  rtl: boolean = true;
  icon: string = 'pi pi-home';
  labelPos: NgLabelPosition = 'fix-side';
  iconPos: NgPosition = 'left';
  inputSize: NgSize = 'md';
  addon: NgAddon = {
    before: {
      type: 'icon',
      icon: 'pi pi-home',
    },
    after: {
      type: 'button',
      label: 'home',
    },
  };
  // native properties
  autofocusFilter: boolean = false;
  defaultLabel: string = 'Choose';
  disabled: boolean = false;
  displaySelectedLabel: boolean = true;
  emptyFilterMessage: string = 'No results found';
  filter: boolean = true;
  filterPlaceHolder: string = '';
  maxSelectedLabels: number = 3;
  overlayVisible: boolean = false;
  placeholder: string = '';
  readonly: boolean = false;
  emptyMessage: string = 'No records found.';
  resetFilterOnHide: boolean = false;
  scrollHeight: string = '200px';
  selectedItemsLabel: string | 'ellipsis' = 'ellipsis';
  selectionLimit: number = 100;
  showHeader: boolean = true;
  showToggleAll: boolean = true;
  showClear: boolean = false;
  display: string = 'comma';

  options: any[];
}
