import { Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentLoaderService } from './dynamic-component-loader-service.service';
import { MyLibrary1Component, MyLibraryComponent } from '../assets/plugins/shared';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  private componentTypes: { [key: string]: Type<any> } = {
    MyLibrary1Component: MyLibrary1Component,
    MyLibraryComponent: MyLibraryComponent,
    // Add more mappings as needed
  };
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  
  myForm = new FormGroup({
    c: new FormControl(),
  });


  loadDynamicComponent() {
   
    // Import and dynamically create the component you want to load
    import('../assets/plugins/shared').then((module) => {
     
let m=module 

const myArray = Object.keys(m).map(key =>key);
if(myArray.find(element => element == this.myForm.get('c')?.value)) {
  

  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentTypes[this.myForm.get('c')?.value]);
  const componentRef = componentFactory.create(this.dynamicComponentContainer.injector);
  
  this.dynamicComponentContainer.insert(componentRef.hostView);
  
}

  
    });
  }


      
        

}


