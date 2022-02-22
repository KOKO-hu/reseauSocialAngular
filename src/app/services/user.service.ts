import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.module';
import { User } from '../models/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token!: string;
  /* 1 import HttpClientModule dans le route module*/
  /* 2 injection dans le contructor du service */
  constructor(private http: HttpClient, private route: Router) { }
  getAllUser():Observable<User[]> {
    /* 1 declaration de host dans env pour racourcir le lien */
    /* 2 racourcir le lien en important host qui se trouve dans env */
    let host=environment.host
    return this.http.get<User[]>(host+"/liste")
  }
  /* Ajout de d'utilsateur dans la base de donnée */
  signIn(user:User): Observable<User>{
    let host = environment.host
    return this.http.post<User>(host + "/register", user)

  }
  /* ajout de publication sur vootre page actualité */
  getAll(): Observable<Post[]>{
    let hostPost = environment.hostPost
    return this.http.get<Post[]>(hostPost)
  }
  /* authentification */
  login(user: User): Observable<User> {
    let host = environment.host
    return this.http.post<User>(host + "/login", user)

  }
  saveToken(token : any):void{
    localStorage.setItem('token', token)
    this.route.navigate(['profil'])
  }
  auth(): boolean {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      return true
    } else {
      return false
    }
   }
}
