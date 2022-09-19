import {Component} from '@angular/core';
import {NgConfirmPopupOptions} from "@ng/models/overlay";
import {OverlayService} from "@ng/services";

@Component({
  selector: 'ng-confirm-popup-page',
  templateUrl: './confirm-popup.page.html',
  styleUrls: ['./confirm-popup.page.scss']
})
export class ConfirmPopupPage {
  constructor(private overlayService: OverlayService) {
  }

  confirmPopup: NgConfirmPopupOptions = {
    message: 'Are you sure?',
    icon: '',
    acceptLabel: 'Yes',
    rejectLabel: 'No',
    acceptIcon: '',
    rejectIcon: '',
    acceptVisible: true,
    rejectVisible: true,
    acceptColor: 'primary',
    acceptAppearance: 'basic',
    buttonSize: 'md',
    rejectColor: 'primary',
    rejectAppearance: 'outlined',
    defaultFocus: 'accept'
  }

  showConfirmPopup(event) {
    this.overlayService.showConfirmPopup({...this.confirmPopup, target: event.target})
  }
}