import { Compiler, ComponentFactory, Injectable, Injector } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DynamicComponentLoaderService  {

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    
  ) {}
  load(modulePath: string): Promise<any> {
    return import(modulePath).then((module) => {
      return this.compiler.compileModuleAndAllComponentsAsync(module[modulePath]);
    });
  }
  loadComponentFromLibrary(modulePath: string, componentName: string): Promise<ComponentFactory<any>> {
    return this.load(modulePath).then((moduleFactory:any) => {
      debugger
      const ngModuleRef = moduleFactory.create(this.injector);
      const componentFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(componentName);
      return componentFactory;
    });
  }
}
