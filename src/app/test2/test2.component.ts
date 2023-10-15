import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {

}

export function DynamicComponent(DynamicComponent: any) {
  throw new Error('Function not implemented.');
}
