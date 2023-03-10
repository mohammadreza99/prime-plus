import {DOCUMENT} from "@angular/common";
import {PrimeNGConfig} from "primeng/api";
import {NgConfig} from "@ng/models";
import {ThemeService} from "@ng/services/theme.service";
import {ConfigService} from "@ng/services/config.service";

export function setNgConfigProvider(ngConfig?: NgConfig) {
  return {
    provide: ConfigService,
    useFactory: (primengConfig: PrimeNGConfig, themeService: ThemeService, document: Document) => {
      const configService = new ConfigService(primengConfig, themeService, document);
      configService.setConfig(ngConfig);
      return configService;
    },
    deps: [PrimeNGConfig, ThemeService, DOCUMENT]
  }
}
