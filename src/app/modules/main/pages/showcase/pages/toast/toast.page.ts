import {Component} from '@angular/core';
import {NgToastOptions} from "@ng/models/overlay";
import {OverlayService} from "@ng/services";
import {GlobalConfig} from "@core/global.config";

@Component({
  selector: 'ng-toast-page',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss']
})
export class ToastPage {
  toast: NgToastOptions = {
    life: 3000,
    sticky: false,
    rtl: GlobalConfig.rtl,
    summary: 'Some Summary',
    closable: false,
    severity: 'info',
    icon: 'pi pi-info',
    detail: 'Some Detail',
    preventDuplicates: false,
    position: 'top-right'
  }

  constructor(private overlayService: OverlayService) {
  }

  showToast() {
    this.overlayService.showToast(this.toast)
  }
}
