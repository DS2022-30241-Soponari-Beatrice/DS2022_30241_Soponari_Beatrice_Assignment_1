import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {url} from "../utils";
import {User} from "../models/user";
import {Device} from "../models/device";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  insertDevice(device: Device){
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('token')|| "");
    const headers = { headers: header };
    return this.http.post(`${url}/device`,device,headers);
  }

  delete(id: String) {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('token')|| "");
    const headers = { headers: header };
    return this.http.delete(`${url}/device/${id}`,headers);
  }

  getDevices(): Observable<Device[]> {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('token')|| "");
    const headers = { headers: header };
    return this.http.get<Device[]>(`${url}/device`, headers);
  }

  updateDevice(device:Device): Observable<Device> {
    const header = new HttpHeaders().set('Authorization', localStorage.getItem('token')|| "");
    const headers = { headers: header };
    const id = device.id;
    return this.http.put<Device>(`${url}/device/${id}`, device, headers);
  }
}
