import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeName } from './age-name';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 style="color:blue">
      Welcome {{fname}} {{moreInfo.lname}}
    </h1>
    <h3>
      Age : {{moreInfo.age}}
    </h3>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Input()

fname:string = "Hamad"

moreInfo:AgeName = {
  lname:"Fattah",
  age:25
}

}
