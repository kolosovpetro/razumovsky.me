import { Injectable } from '@angular/core';
import IConfig from '../models/interfaces/IConfig';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: IConfig | undefined;

  public getConfig() {
    return this.config;
  }

  public setConfig(config: IConfig) {
    this.config = config;
  }
}
