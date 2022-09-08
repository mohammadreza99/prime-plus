import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {NgAddon, NgFixLabelPosition} from '@ng/models/forms';

@Component({
  selector: 'ng-listbox-page',
  templateUrl: './listbox.page.html',
  styleUrls: ['./listbox.page.scss'],
})
export class ListboxPage {
  form = new UntypedFormGroup({
    c1: new UntypedFormControl(null, [Validators.required]),
  });
  binding;

  label: string = 'label';
  labelWidth: number = 100;
  hint: string = '';
  rtl: boolean = true;
  labelPos: NgFixLabelPosition = 'fix-side';
  addon: NgAddon;
  // native properties
  checkbox: boolean = false;
  disabled: boolean = false;
  filter: boolean = false;
  filterPlaceHolder: string = '';
  emptyFilterMessage: string = 'No results found';
  multiple: boolean = false;
  readonly: boolean = false;
  emptyMessage: string = 'No records found';
  showToggleAll: boolean = true;

  options: any[] = [
    {label: 'Australia', value: 'AU'},
    {label: 'Brazil', value: 'BR'},
    {label: 'China', value: 'CN'},
    {label: 'Egypt', value: 'EG'},
    {label: 'France', value: 'FR'},
    {label: 'Germany', value: 'DE'},
    {label: 'India', value: 'IN'},
    {label: 'Japan', value: 'JP'},
    {label: 'Spain', value: 'ES'},
    {label: 'United States', value: 'US'}
  ];
}