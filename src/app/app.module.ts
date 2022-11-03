import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { StockdetailsComponent } from './stockdetails/stockdetails.component';
import { SalesdetailsComponent } from './salesdetails/salesdetails.component';
import { TransactionComponent } from './transaction/transaction.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FeedbackComponent } from './feedback/feedback.component';
import { TComponent } from './t/t.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SigninComponent } from './signin/signin.component';
import { UiComponent } from './ui/ui.component';
import { SignupComponent } from './signup/signup.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockdetailsComponent,
    SalesdetailsComponent,
    TransactionComponent,
    FeedbackComponent,
    TComponent,
    SigninComponent,
    UiComponent,SignupComponent,
    SignupComponent
   
  ],
  imports: [
    BrowserModule,MatSidenavModule,MatInputModule,
    AppRoutingModule,MatSelectModule,
    BrowserAnimationsModule,MatListModule,MatDialogModule,
    MatButtonModule,RouterModule,MatOptionModule,
    MatCardModule,MatFormFieldModule,MatGridListModule,MatRadioModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    MatTableModule
   ,FormsModule,HttpClientModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
