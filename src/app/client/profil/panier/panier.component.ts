import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../../projet.service'
import { Metauser } from 'src/app/metauser';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  metauser:Metauser[]
  metauserlike:Metauser[]
  metauserrating:Metauser[]
  Metauserpanier:Metauser[]
  UserId:number = JSON.parse(localStorage.getItem('user')).userId
  constructor(private projetService: ProjetService) { }

  
  ngOnInit(): void {
    this.getMetauser(this.UserId)
  }
  getMetauser (UserId): void {
    this.projetService.getMetauser(UserId).subscribe(metauser => (this.metauser = metauser))
  }
}
