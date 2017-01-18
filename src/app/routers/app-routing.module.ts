import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { InnerPageComponent } from '../inner-page/inner-page.component';
import { ContactComponent } from '../contact/contact.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { InnerOneComponent } from '../inner-page/inner-one.component';
import { InnerTwoComponent } from '../inner-page/inner-two.component';
import { InnerThreeComponent } from '../inner-page/inner-three.component';
import { InnerFourComponent } from '../inner-page/inner-four.component';
import { InnerFiveComponent } from '../inner-page/inner-five.component';

import { UserDetailsComponent } from '../inner-page/user-details/user-details.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'inner', component: InnerPageComponent, 
    children: [
      { path: '', redirectTo: 'one', pathMatch: 'full'},
      { path: 'one', component: InnerOneComponent, 
        children: [
          { path: ':id', component: UserDetailsComponent}
        ]
      },
      { path: 'two', component: InnerTwoComponent},
      { path: 'three', component: InnerThreeComponent},
      { path: 'four', component: InnerFourComponent},
      { path: 'five', component: InnerFiveComponent}
    ]
  },
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}