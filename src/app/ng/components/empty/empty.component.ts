import {Component, Input} from '@angular/core';
import {NgEmptyIcon} from "@ng/models";
import {ConfigService} from "@ng/services";

@Component({
  selector: 'ng-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent {
  @Input() imageType: NgEmptyIcon = 'box2';
  @Input() icon: string;
  @Input() imageSrc: string;
  @Input() text: string;
  @Input() rtl: boolean = this.configService.getConfig().rtl;
  @Input() disableConfigChangeEffect: boolean = this.configService.getConfig().disableConfigChangeEffect;

  constructor(private configService: ConfigService) {
  }
}
