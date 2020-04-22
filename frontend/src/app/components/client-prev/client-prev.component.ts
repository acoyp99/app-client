import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { ClientService } from 'src/app/services/client.service';
import {Client} from '../../interfaces/Client'

@Component({
  selector: 'app-client-prev',
  templateUrl: './client-prev.component.html',
  styleUrls: ['./client-prev.component.css']
})
export class ClientPrevComponent implements OnInit {

  id: string;
  client: Client;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private clientService:ClientService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params =>{
    this.id = params['id'];
    this.clientService.getClientByID(this.id)
      .subscribe(
        res => {
          this.client = res;
        },
        err => console.log(err)
      )
    })
  }

  deleteClient(id: string){
    this.clientService.deleteClient(id)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/clients/list'])
        },
        err => console.log(err)
      )
  }

  updateClient(name: HTMLInputElement, office: HTMLInputElement, position: HTMLInputElement, salary: HTMLInputElement){
    this.clientService.updateClient(this.id, name.value, office.value, position.value, salary.value)
      .subscribe(
        res =>{
          this.router.navigate(['/clients/list'])
        },
        err => console.log(err)
      )
  }

}
