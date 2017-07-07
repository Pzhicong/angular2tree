import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private date: Date = new Date();
  private sex: string = 'male';

  public alertType: string = 'success';
  constructor(private logger: LoggerService) {	}
   
  ngOnInit() {
    this.logger.debug('app-component初始化');
  }

  public receive(object){
    console.log(object);
  }
}
