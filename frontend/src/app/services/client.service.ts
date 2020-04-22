import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Client} from '../interfaces/Client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URI = 'http://169.48.255.194:32646/api/clients'

  constructor(private http: HttpClient) { }

  createClient(name: string, office: string, position: string, salary: string){
    const fd = new FormData();
    fd.append('name', name);
    fd.append('office', office);
    fd.append('position', position);
    fd.append('salary', salary);
    return this.http.post(this.URI, fd)

  }

  getClient(){
    return this.http.get<Client[]>(this.URI);
  }

  getClientByID(id: string){
    return this.http.get<Client>(`${this.URI}/${id}`);
  }

  deleteClient(id: string){
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateClient(id: string, name: string, office: string, position: string, salary: string){
    return this.http.put(`${this.URI}/${id}`, {name, office, position, salary});
  }
}
