import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeapYearComponent } from './leapYear.component';

const LEAP_YEAR_ROUTES: Routes = [
{
  path: '', component: LeapYearComponent
}
];

export const LEAP_YEAR_ROUTING: ModuleWithProviders = RouterModule.forChild(LEAP_YEAR_ROUTES);
