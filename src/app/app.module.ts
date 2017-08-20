import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

//AngularFire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'

//component imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//service imports
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'add-client', component:AddClientComponent, canActivate:[AuthGuard]},
  {path:'client/:id', component:ClientDetailsComponent, canActivate:[AuthGuard]},
  {path:'edit-client/:id', component:EditClientComponent, canActivate:[AuthGuard]}
  // {path:'register', component:RegisterComponent},
  // {path:'register', component:RegisterComponent},
  // {path:'register', component:RegisterComponent},
]

export const firebaseConfig = {
  apiKey: "AIzaSyC60aVrcl3Qq4N0kF0R1Mh0EQkQW5ILFZI",
  authDomain: "clientpanel-1cccf.firebaseapp.com",
  databaseURL: "https://clientpanel-1cccf.firebaseio.com",
  storageBucket: "clientpanel-1cccf.appspot.com",
  messagingSenderId: "655825684533"
}


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule
  ],
  providers: [AngularFireAuth, AngularFireDatabase, ClientService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
