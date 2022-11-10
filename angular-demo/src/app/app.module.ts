import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { AddUsersTableComponent } from './add-users-table/add-users-table.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ViewDevicesComponent } from './view-devices/view-devices.component';
import { UpdateDeviceComponent } from './add-device/update-device/update-device.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { ClientPageComponent } from './client-page/client-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddUsersTableComponent,
    HomePageComponent,
    ViewUsersComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    AddDeviceComponent,
    ViewDevicesComponent,
    UpdateDeviceComponent,
    DeleteDeviceComponent,
    ClientPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
