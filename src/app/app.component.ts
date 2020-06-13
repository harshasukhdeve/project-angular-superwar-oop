import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  PLAYERS = [
    {   name : "Spiderman"},
    {  name : "Captain America"},
    {  name : "Wonderwoman"},
    {  name : "Popcorn"},
    {  name : "Gemwoman"},
    {  name : "Bolt"},
    {  name : "Antwoman"},
    {  name : "Mask"},
    {  name : "Tiger"},
    {  name : "Captain"},
    {  name : "Catwoman"},
    {  name : "Fish"},
    {  name : "Hulk"},
    {  name : "Ninja"},
    {  name : "Black Cat"},
    {  name : "Volverine"},
    { name :  "Thor"},
    {  name : "Slayer"},
    {  name : "Vader"},
    {  name : "Slingo"}
  ];

  ngOnInit() {
    
    this.viewPlayers(this.initPlayers(this.PLAYERS));
  }

  i: number = 0;

  // initialize players with image and strength
  initPlayers = (players) => {
    let detailedPlayers = '';
    detailedPlayers = players.map((value, index) => ({
    name: players[index].name,
    strength: Math.ceil(Math.random() * 100+1),
    image: '../../assets/super-' + (index + 1) + '.png',
    type: "hero|villian"}));
    return detailedPlayers;
  }
  
  buildPlayers(players:any ,type:string):any{
    let fragment :string = '';
    let indexList :number[]=[];
    if (type == "hero") { 
        players.map((item, index) => {
            if (index % 2 == 0) 
                indexList.push(index);
        });
    } else {
        players.map((item, index) => {
            if (index % 2 != 0)
                indexList.push(index);
        });
    }
    console.log(indexList);
    
    fragment += indexList.map((index)=> `<div class="player">
    <img src="${players[index].image}" alt="superwars">
    <div class="name">${players[index].name}</div>
    <div class="strength">${players[index].strength}</div></div>`
    )
    .join('');
  return fragment;
};
   
  viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = this.buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = this.buildPlayers(players, 'villain');
  }
}