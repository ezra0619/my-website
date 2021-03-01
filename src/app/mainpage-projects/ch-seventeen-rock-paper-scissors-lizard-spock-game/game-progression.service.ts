import { Injectable } from '@angular/core';

export interface GameProgressionModel{
  step: Number,
  showAllSigns: Boolean,
  youPicked: String,
  showYourPick: Boolean,
  theHousePicked: String,
  showHousePick: Boolean,
  gameResult: String,
  showGameResult: Boolean
}

export interface SignsModel{
  class: String,
  firstStepClass: String,
  svg: String
}

@Injectable({
  providedIn: 'root'
})
export class GameProgressionService {

  constructor() { }

  gameProgression: GameProgressionModel[] = [
    {
      step: 1,
      showAllSigns: true,
      youPicked: "",
      showYourPick: false,
      theHousePicked: "",
      showHousePick: false,
      gameResult: "",
      showGameResult: false
    },
    {
      step: 2,
      showAllSigns: false,
      youPicked: "",
      showYourPick: true,
      theHousePicked: "",
      showHousePick: false,
      gameResult: "",
      showGameResult: false
    },
    {
      step: 3,
      showAllSigns: false,
      youPicked: "",
      showYourPick: true,
      theHousePicked: "",
      showHousePick: true,
      gameResult: "",
      showGameResult: false
    },
    {
      step: 4,
      showAllSigns: false,
      youPicked: "",
      showYourPick: true,
      theHousePicked: "",
      showHousePick: true,
      gameResult: "",
      showGameResult: true
    }
  ]

  signs: SignsModel[] = [
    {
      class: "scissors",
      firstStepClass: "scissors-1st-step-position",
      svg: "assets/chSeventeen-rock-paper-scissors-lizard-spock-game/icon-scissors.svg"
    },
    {
      class: "paper",
      firstStepClass: "paper-1st-step-position",
      svg: "assets/chSeventeen-rock-paper-scissors-lizard-spock-game/icon-paper.svg"
    },
    {
      class: "rock",
      firstStepClass: "rock-1st-step-position",
      svg: "assets/chSeventeen-rock-paper-scissors-lizard-spock-game/icon-rock.svg"
    },
    {
      class: "lizard",
      firstStepClass: "lizard-1st-step-position",
      svg: "assets/chSeventeen-rock-paper-scissors-lizard-spock-game/icon-lizard.svg"
    },
    {
      class: "spock",
      firstStepClass: "spock-1st-step-position",
      svg: "assets/chSeventeen-rock-paper-scissors-lizard-spock-game/icon-spock.svg"
    }
  ]
}
