import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {DynamicDialogService, OverlayService, MomentService} from "@ng/services";
import {UserService} from "@core/http";
import {
  DynamicDialogSampleComponent
} from "@modules/main/pages/showcase/components/dynamic-dialog-sample/dynamic-dialog-sample.component";

@Component({
  selector: 'ng-utils-page',
  templateUrl: './utils.page.html',
  styleUrls: ['./utils.page.scss']
})
export class UtilsPage {
  constructor(
    private overlayService: OverlayService,
    private vcRef: ViewContainerRef,
    private userService: UserService,
    private dialog: DynamicDialogService,
  ) {
  }

  customDynamicDialogResult: any;

  showConfirm() {
    this.overlayService.showConfirm({header: 'header', message: 'salam'}).then((result) => {
      if (result) {
      } else {
      }
    });
  }

  showToast() {
    this.overlayService.showToast(
      {
        summary: 'summary',
        detail: 'details',
        closable: true,
        life: 3000,
        severity: 'error',
        sticky: false,
        position: 'top-right',
        preventDuplicates: true,
        preventOpenDuplicates: true
      }
    );
  }

  showMessage() {
    this.overlayService.showMessage(
      {
        severity: 'info',
        summary: 'Info Message',
        detail: 'PrimeNG rocks'
      }
    );
  }

  showDialogForm() {
    this.overlayService.showDialogForm(
      'test',
      [
        {
          component: 'dropdown',
          formControlName: 'test',
          options: [
            {label: 'l1', value: 'v1'},
            {label: 'l2', value: 'v2'},
            {label: 'l3', value: 'v3'},
            {label: 'l4', value: 'v4'},
            {label: 'l5', value: 'v5'},
            {label: 'l6', value: 'v6'},
            {label: 'l7', value: 'v7'}
          ],
          label: 'label',
          className: 'col-6',
          rules: [
            {
              tobe: ['v1', 'v2', 'v3'],
              control: 't0',
              action: 'visible'
            }
          ]
        },
        {
          component: 'text',
          formControlName: 't0',
          label: 't0',
          className: 'col-12',
          visible: false
        },
        {
          component: 'text',
          formControlName: 't1',
          label: 't1',
          className: 'col-12',
          visible: false
        },
        {
          component: 'text',
          formControlName: 't2',
          label: 't2',
          className: 'col-6'
        }
      ],
    ).onClose.subscribe();
  }

  showConfirmPopup(event) {
    this.overlayService.showConfirmPopup(
      {
        message: 'salam',
        target: event.target
      }
    ).then((result) => {
      if (result) {
      } else {
      }
    });
  }

  showCustomDynamicDialog() {
    const ref = this.dialog.open(DynamicDialogSampleComponent, {data: {message: 'I am a dynamic component inside of a dialog!'}});
    ref.afterClosed.subscribe(result => {
      this.customDynamicDialogResult = result;
    });
  }

  request() {
    this.userService.get().subscribe();
  }

  showDialog() {
    this.overlayService.showDialog({
      message: 'some text',
    }).then(() => {
    });
  }
}
