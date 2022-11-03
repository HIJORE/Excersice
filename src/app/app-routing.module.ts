import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SalesdetailsComponent } from './salesdetails/salesdetails.component';
import { SigninComponent } from './signin/signin.component';
import { StockdetailsComponent } from './stockdetails/stockdetails.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UiComponent } from './ui/ui.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'stockdetails',component:StockdetailsComponent},
  {path:'salesdetails',component:SalesdetailsComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'signin',component:SigninComponent},
  {path:'ui',component:UiComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  
