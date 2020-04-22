import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service'
import { of } from 'rxjs';
import {Router} from '@angular/router'

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-client-in',
  templateUrl: './client-in.component.html',
  styleUrls: ['./client-in.component.css']
})
export class ClientInComponent implements OnInit {

  file: File;
  imageSelected: string | ArrayBuffer;

  constructor(private clientService: ClientService, private router:Router) { }

  ngOnInit(): void {
  }

  onimageSelected(event: HTMLInputEvent): void{
    if (event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      // Imamge preview
      const reader = new FileReader();
      reader.onload = e => this.imageSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
  submitClient(name: HTMLInputElement, office: HTMLInputElement, position: HTMLInputElement, salary: HTMLInputElement): boolean{
    this.clientService.createClient(name.value, office.value, position.value, salary.value)
    .subscribe(res => {
      this.router.navigate(['/clients/list']);
      console.log(res)},
      err => console.log(err))
    return false;
    
  }

}
