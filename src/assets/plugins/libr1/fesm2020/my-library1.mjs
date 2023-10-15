import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyLibrary1Service {
    constructor() { }
}
MyLibrary1Service.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLibrary1Service.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Service, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLibrary1Component {
}
MyLibrary1Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLibrary1Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MyLibrary1Component, selector: "lib-my-library1", ngImport: i0, template: `
    <p>
      my-library1 works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-library1', template: `
    <p>
      my-library1 works!
    </p>
  ` }]
        }] });

class MyLibrary1Module {
}
MyLibrary1Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibrary1Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Module, declarations: [MyLibrary1Component], exports: [MyLibrary1Component] });
MyLibrary1Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Module });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibrary1Module, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLibrary1Component
                    ],
                    imports: [],
                    exports: [
                        MyLibrary1Component
                    ]
                }]
        }] });

/*
 * Public API Surface of my-library1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibrary1Component, MyLibrary1Module, MyLibrary1Service };
//# sourceMappingURL=my-library1.mjs.map
