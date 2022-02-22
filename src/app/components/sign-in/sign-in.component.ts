import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  /* ********FORMULAIRE********** */
  /*
  1) Ajout de formbuilder dans le constructeur 
  2) Importation de reactive form module dans route module
  3) declaartion d'une variable pour recuperer les donner du formuilaire
  4) creaction d'un groupe de controle

  */
  signFormGroup!: FormGroup
  err!: number;
  constructor(private fb:FormBuilder,private userSercice:UserService) { }

  ngOnInit(): void {
    this.signFormGroup = this.fb.group({
      nom: ["", Validators.required],
      email: ["", Validators.required],
      mdp: ["", Validators.required]
 })

  }
  signIn() {
    console.log(this.signFormGroup.value)
    this.userSercice.signIn(this.signFormGroup.value).subscribe((data) => {
      console.log(data)
      
    })
  }
  

}
