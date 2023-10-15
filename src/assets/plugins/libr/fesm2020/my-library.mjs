import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyLibraryService {
    constructor() { }
}
MyLibraryService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLibraryService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLibraryComponent {
}
MyLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MyLibraryComponent, selector: "lib-my-library", ngImport: i0, template: `
    <p>
      my-library works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-library', template: `
    <p>
      my-library works!
    </p>
  ` }]
        }] });

class MyLibraryModule {
}
MyLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryModule, declarations: [MyLibraryComponent], exports: [MyLibraryComponent] });
MyLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyLibraryModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLibraryComponent
                    ],
                    imports: [],
                    exports: [
                        MyLibraryComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibraryComponent, MyLibraryModule, MyLibraryService };
//# sourceMappingURL=my-library.mjs.map
