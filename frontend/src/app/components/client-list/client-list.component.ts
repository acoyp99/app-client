import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients = [];

  constructor(private clientService: ClientService, private router:Router) { }

  ngOnInit(): void {
    this.clientService.getClient()
      .subscribe(
        res => {
          this.clients = res;
          console.log(this.clients)
        }, 
        err => console.log(err))   
  }

  selectedClient(id){
    this.router.navigate(['/clients', id]);
      
  }

}
