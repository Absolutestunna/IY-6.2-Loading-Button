var Backbone = require('backbone');
var $ = require('jquery');


$.ajaxSetup({
headers: { 'X-Auth-Token': '78b09e9005224111ada83b285f5acb3c' },
// url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
});

var Player = Backbone.Model.extend({
  getStats: function(){
    // return this.get('name') + this.get('football')
  }
})

var PlayerCollection = Backbone.Collection.extend({
  model: Player,
  url: "http://api.football-data.org/v1/teams/450/players",
  // parse: function(team){
  //   return team.players;
  // }
});

//
// var choicePlayer = new PlayerCollection();
// // choicePlayer.create({
// //   name: "Christiano Ronaldo",
// //   Position: "Striker"
// // },{},{},{},{},{});
// // console.log(choicePlayer)


module.exports = {
  player: Player,
  playerCollection: PlayerCollection
};
