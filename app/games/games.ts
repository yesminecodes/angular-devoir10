import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-games',
  imports: [CommonModule, RouterLink],
  templateUrl: './games.html',
})
export class Games {
  games: Game[]; //un tableau de Games
  constructor(private gameService: GameService, public authService: AuthService) {
    this.games = gameService.listeGames();
  }
  ngOnInit(): void {
    this.games = this.gameService.listeGames();
  }
  supprimerGame(g: Game) {
    //console.log(g);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.gameService.supprimerGame(g);
  }
}
