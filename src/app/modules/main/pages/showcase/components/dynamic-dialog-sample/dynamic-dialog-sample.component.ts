import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from '@ng/components/dynamic-dialog';

@Component({
  selector: 'ng-dynamic-dialog-sample',
  templateUrl: './dynamic-dialog-sample.component.html',
  styleUrls: ['./dynamic-dialog-sample.component.scss']
})
export class DynamicDialogSampleComponent implements OnInit {
  constructor(public config: DynamicDialogConfig, public dialog: DynamicDialogRef) {
  }

  onClose() {
    this.dialog.close('some value');
  }

  ngOnInit(): void {
  }

}
