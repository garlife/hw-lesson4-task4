// import { HttpService} from './http.service';
// import { Component, OnInit } from '@angular/core';
// import {Observable} from 'rxjs';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [HttpService]
// })
// export class AppComponent implements OnInit {

//   users: Observable<Object>;
//     constructor(private httpService: HttpService){}

//   // contacts: Observable<object>;

// // constructor(private getContactsService: ContactService){}
// ngOnInit() {
//   // this.contacts = this.getContactsService.getContacts();
//   this.users = this.httpService.getUsers();
// }
// }

import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {Observable} from 'rxjs';
    
@Component({
    selector: 'app-root',
    template: './app.component.html',
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
    
    users: Observable<Object>;
    constructor(private httpService: HttpService){}
    ngOnInit(){
           
         this.users = this.httpService.getUsers();
    }
}
