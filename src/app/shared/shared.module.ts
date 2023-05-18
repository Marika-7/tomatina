import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import {LayoutModule} from '@angular/cdk/layout';

const MODULES = [
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
];

@NgModule({
    declarations: [],
    imports: [
        ...MODULES
    ],
    exports: [
        ...MODULES
    ]
})
export class SharedModule { }
