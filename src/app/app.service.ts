import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getVersion(): string {
    return "0.0.1";
  }

  public getDBHealthCheck(){
    
  }
}
