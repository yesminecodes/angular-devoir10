import { Component } from '@angular/core';
import { Type } from '../model/type.model';
import { GameService } from '../services/game.service';
import { CommonModule } from '@angular/common';
import { UpdateType } from "../update-type/update-type";

@Component({
  selector: 'app-liste-type',
  imports: [CommonModule, UpdateType],
  templateUrl: './liste-type.html',
  styles: ``
})
export class ListeType {
  types?: Type[];
  ajout:boolean=true;
  constructor(private gameService: GameService) { }
  ngOnInit(): void {
    const result = this.gameService.listeTypes();
    this.types = result;
    console.log(result);
  }
  updatedType: Type = { "idType": 0, "nomType": "" };
  typeUpdated(t: Type) {
    console.log("Type mis à jour :", t);
    this.gameService.updateType(t);
    this.chargerTypes();  }
  chargerTypes() {
    const result = this.gameService.listeTypes();
    this.types = result;
    console.log(result);
  }
  updateCat(cat: Type) {
  this.updatedType = cat;
  this.ajout=false;
}
}
