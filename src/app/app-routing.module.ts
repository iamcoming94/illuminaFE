import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
// import { ContactComponent } from './contact/contact.component';
// import { SalesOrderComponent } from './sales-order/sales-order.component';
// import { EditSalesOrderComponent } from './edit-sales-order/edit-sales-order.component';
// import { LoginComponent } from './login/login.component';
// import { AuthGuardService as AuthGuard } from './service/auth-guard.service';
// import { DoSalesOrderComponent } from './do-sales-order/do-sales-order.component';

const routes: Routes = [
  // { path: '', component: HomeComponent},
  // { path: 'about', component: AboutComponent},
  // { path: 'contact', component: ContactComponent},
  
  { path: '', component: HomeComponent},
  { path: 'form', component: FormComponent},
  { path: 'list', component: ListComponent},
//   { path: 'salesOrder', component: SalesOrderComponent, canActivate: [AuthGuard]},
//   { path: 'DOSalesOrder', component: DoSalesOrderComponent, canActivate: [AuthGuard]},
//   { path: 'editSalesOrder/:id', component: EditSalesOrderComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }