import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import IConfig from 'src/app/models/interfaces/IConfig';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public config: IConfig | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<IConfig>('../../../assets/config/config.json')
      .subscribe({
        next: (data) => {
          this.config = data;
        },
      });
  }
}
