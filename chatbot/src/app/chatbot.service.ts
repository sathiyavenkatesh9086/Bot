import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Pizza } from './Pizza';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private baseurl = 'http://3.139.118.80:3000/event';
  private userurl = 'http://3.139.118.80:3000/user';
  private pizzaurl = 'http://3.139.118.80:3000/pizza';

  constructor(private http: HttpClient) {}

  getStatus(id) {
    return this.http.get<User>(`${this.userurl}/${id}`);
  }

  getMessage(): Observable<any> {
    return this.http.get(`${this.baseurl}`);
  }

  addUser(user: User) {
    return this.http.post<User>(`${this.userurl}`, user);
  }

  addPizzaInData(pizza: Pizza) {
    return this.http.post<Pizza>(`${this.pizzaurl}`, pizza);
  }
}
