import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent,
        title : "home"
    },
    {
        path : 'child',
        component : ChildComponent,
        title : "Child"
    },
    {
        path : 'test',
        component : TestComponent,
        title : "Test"
    },
    {
        path : 'test/:id',
        component : TestComponent,
        title : "Test"
    }
];
