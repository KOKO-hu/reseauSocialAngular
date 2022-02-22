import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  
  constructor(private service : UserService) { }
post$ : Observable<Post[]> | null=null
  ngOnInit(): void {
    this.post$ = this.service.getAll()
    console.log(this.post$.subscribe((data)=> console.log(data)))
  }

}
