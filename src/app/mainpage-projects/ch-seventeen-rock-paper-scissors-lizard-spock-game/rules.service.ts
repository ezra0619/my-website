import { Injectable } from '@angular/core';

export interface individualRuleModel {
    sign: String,
    picture: String,
    color: String,
    rules: {
      paper: String,
      rock: String,
      spock: String,
      lizard: String,
      scissors: String
    }
}

@Injectable({
  providedIn: 'root'
})

export class RulesService {

  constructor() { }

  rules: individualRuleModel[] =  [
    {
      sign: "paper",
      picture: "",
      color: "",
      rules: {
        paper: "DRAW",
        rock: "WIN",
        spock: "WIN",
        lizard: "LOSE",
        scissors: "LOSE"
      }
    },
    {
      sign: "rock",
      picture: "",
      color: "",
      rules: {
        paper: "LOSE",
        rock: "DRAW",
        spock: "LOSE",
        lizard: "WIN",
        scissors: "WIN"
      }
    },
    {
      sign: "spock",
      picture: "",
      color: "",
      rules: {
        paper: "LOSE",
        rock: "WIN",
        spock: "DRAW",
        lizard: "LOSE",
        scissors: "WIN"
      }
    },
    {
      sign: "lizard",
      picture: "",
      color: "",
      rules: {
        paper: "WIN",
        rock: "LOSE",
        spock: "WIN",
        lizard: "DRAW",
        scissors: "LOSE"
      }
    },
    {
      sign: "scissors",
      picture: "",
      color: "",
      rules: {
        paper: "WIN",
        rock: "LOSE",
        spock: "LOSE",
        lizard: "WIN",
        scissors: "DRAW"
      }
    }

  ]
    
    
}
  
  


