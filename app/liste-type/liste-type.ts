import { Component } from '@angular/core';
import { Type } from '../model/type.model';
import { GameService } from '../services/game.service';
import { CommonModule } from '@angular/common';
import { UpdateType } from "../update-type/update-type";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-type',
  imports: [CommonModule, UpdateType,FormsModule],
  templateUrl: './liste-type.html',
  styles: ``
})
export class ListeType {
  types?: Type[];
  ajout: boolean = true;
  updatedType: Type = { idType: 0, nomType: "" };
  newType: Type = { idType: 0, nomType: "" };

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.chargerTypes();
  }

  chargerTypes() {
    this.types = this.gameService.listeTypes();
  }

  typeUpdated(t: Type) {
    this.gameService.updateType(t);
    this.chargerTypes();
  }

  updateCat(cat: Type) {
    this.updatedType = { ...cat };
    this.ajout = false;
  }

  ajouterType() {
    if (this.newType.nomType.trim() === "") return;
    this.gameService.ajouterType(this.newType);
    this.newType = { idType: 0, nomType: "" };
    this.chargerTypes();
  }

  trackById(index: number, type: Type) {
    return type.idType;
  }
}
