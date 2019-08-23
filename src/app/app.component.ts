import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes of day';
 quotes: Quote = [
  {id:1,name:'very next level of your life will demand a different you'},
  {id:2,name:'change your thought and you change your world. Norman vincent peale'},
 ];
}

  
