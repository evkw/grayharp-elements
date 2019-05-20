import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsPageComponent } from './page/options-page/options-page.component';
import { OptionsModule } from './options.module';

const routes: Routes = [
    {
        path: '',
        component: OptionsPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), OptionsModule],
    exports: [RouterModule]
})
export class OptionsRoutingModule { }

