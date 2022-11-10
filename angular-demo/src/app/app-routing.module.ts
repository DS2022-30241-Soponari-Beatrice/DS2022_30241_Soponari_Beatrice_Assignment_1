import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AddUsersTableComponent} from "./add-users-table/add-users-table.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ViewUsersComponent} from "./view-users/view-users.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {AuthGuard} from "./auth/auth.guard";
import {AddDeviceComponent} from "./add-device/add-device.component";
import {ViewDevicesComponent} from "./view-devices/view-devices.component";
import {UpdateDeviceComponent} from "./add-device/update-device/update-device.component";
import {ClientPageComponent} from "./client-page/client-page.component";

const routes: Routes = [
  {
    path:'', canActivate: [AuthGuard], children:

  [{
    path:'',
    redirectTo: 'register',
    pathMatch:'full',

  },
  {
    path: 'home-page',
    canActivate:[AuthGuard],
    component: HomePageComponent
  },

  {
    path: 'add-users',
    component: AddUsersTableComponent
  },
  {
    path: 'view-users',
    component: ViewUsersComponent
  },
  {
    path: 'edit-user/:id',
    component: UpdateUserComponent
  },
  {
    path: 'delete-user',
    component: DeleteUserComponent
  },
  {
    path: 'view-devices',
    component: ViewDevicesComponent
  },
  {
    path: 'edit-device/:id',
    component: UpdateDeviceComponent
  },
  {
    path:'add-device',
    component: AddDeviceComponent
  }
  ]
},
  {
    path:"client-page", component: ClientPageComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path:"login", component:LoginComponent
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
