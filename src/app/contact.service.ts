import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: "root"
})

export class ContactService {
    constructor(private contactServ: HttpClient) {}

    getContacts() {
        return this.contactServ.get('../assets/contact.json');
    }


}