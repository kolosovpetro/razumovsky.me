import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import IConfig from 'src/app/models/interfaces/IConfig';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  public config: IConfig | undefined;

  constructor(private configService: ConfigService) {
    this.config = configService.getConfig();
  }
}
