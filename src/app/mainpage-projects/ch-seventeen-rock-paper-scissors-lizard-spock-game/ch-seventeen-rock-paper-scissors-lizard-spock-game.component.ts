import { Component, OnInit } from '@angular/core';
import { GameProgressionModel, GameProgressionService } from './game-progression.service';
import { individualRuleModel, RulesService } from './rules.service';

@Component({
  selector: 'app-ch-seventeen-rock-paper-scissors-lizard-spock-game',
  templateUrl: './ch-seventeen-rock-paper-scissors-lizard-spock-game.component.html',
  styleUrls: ['./ch-seventeen-rock-paper-scissors-lizard-spock-game.component.scss']
})
export class ChSeventeenRockPaperScissorsLizardSpockGameComponent implements OnInit {

  score: number = 0;
  step: number = 1;
  youPicked: string = "";
  youPickedSVG: String = "";
  theHousePicked: string = "";
  theHousePickedSVG: String = "";
  currentRule: individualRuleModel;
  currentStep = this.gameProgression.gameProgression.find(el => el.step === this.step);

  allSigns = ["scissors", "paper", "rock", "lizard", "spock"];


  constructor(private ruleBook: RulesService,
              public gameProgression: GameProgressionService) { }

  ngOnInit(): void {
  }

  onYourPick(sign: string){
    console.log(sign);
    this.step = 2;
    this.currentStep = this.gameProgression.gameProgression.find(el => el.step === this.step)
    this.youPicked = sign;
    this.youPickedSVG = this.gameProgression.signs.find(el => el.class === this.youPicked).svg;
    this.currentRule = this.ruleBook.rules.find(el => el.sign === this.youPicked);
    
    console.log(this.theHousePickedSVG);
    console.log(this.currentRule);
    console.log(this.currentStep);
    console.log(this.theHousePicked + " the house picked")
    if(this.currentRule.rules[this.theHousePicked] === "WIN"){
      this.score = this.score + 1;
    }
    // this.moveToStepThree();

    setTimeout( () => {
      this.step = 3;
      this.currentStep = this.gameProgression.gameProgression.find(el => el.step === this.step)
      this.theHousePicked = this.allSigns[Math.floor(Math.random() * 5)];
      this.theHousePickedSVG = this.gameProgression.signs.find(el => el.class === this.theHousePicked).svg;
    }, 2000);

    setTimeout( () => {
      console.log("my hero")
      this.step = 4;
      this.currentStep = this.gameProgression.gameProgression.find(el => el.step === this.step);
      if(this.currentRule.rules[this.theHousePicked] === "WIN"){
        this.score = this.score + 1;
      }
    }, 4000);

  }

  onPlayAgain(){
    this.step = 1;
    this.youPicked = "";
    this.youPickedSVG = "";
    this.theHousePicked = "";
    this.theHousePickedSVG = "";
    this.currentStep = this.gameProgression.gameProgression.find(el => el.step === this.step);
  }

  // moveToStepThree() = new Promise((resolve, reject) => {
  //   setTimeout( () => {
  //     resolve(console.log("my hero"))
  //   }, 2000);
  // })
}
