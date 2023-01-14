import {Component} from '@angular/core';
import {AnimateOnScrollService} from "@ng/services/animate-on-scroll.service";

@Component({
  selector: 'ng-animate-on-scroll',
  templateUrl: './animate-on-scroll.page.html',
  styleUrls: ['./animate-on-scroll.page.scss']
})
export class AnimateOnScrollPage {
  constructor(private scrollService: AnimateOnScrollService) {
  }

  ngAfterViewInit() {
    this.scrollService.init({easing: 'ease-in-out-sine'})
  }
}