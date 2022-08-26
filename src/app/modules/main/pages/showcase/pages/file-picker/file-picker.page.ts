import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {NgInputFileMode, NgLabelPosition} from '@ng/models/forms';

@Component({
  selector: 'ng-file-picker-page',
  templateUrl: './file-picker.page.html',
  styleUrls: ['./file-picker.page.scss'],
})
export class FilePickerPage {
  form = new UntypedFormGroup({
    c1: new UntypedFormControl(null, [Validators.required]),
  });
  binding;

  label: string = 'label';
  labelWidth: number = 100;
  hint: string = '';
  rtl: boolean = true;
  labelPos: NgLabelPosition = 'fix-side';
  // native properties
  multiple: boolean = true;
  accept: string = 'image/*';
  disabled: boolean = false;
  auto: boolean = false;
  maxFileSize: number = 5000;
  fileLimit: number = 100;
  previewWidth: number = 50;
  chooseLabel: string = 'انتخاب';
  uploadLabel: string = 'آپلود';
  cancelLabel: string = 'انصراف';
  chooseIcon: string = 'pi pi-plus';
  uploadIcon: string = 'pi pi-upload';
  cancelIcon: string = 'pi pi-times';
  mode: NgInputFileMode = 'advanced';
  showUploadButton: boolean = true;
  showCancelButton: boolean = true;
}