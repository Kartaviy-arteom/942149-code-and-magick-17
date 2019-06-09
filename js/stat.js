'use strict';

var shadowOffsetX = 10;
var shadowOffsetY = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x,y)
  ctx.lineTo(x+20,y+50);
  ctx.lineTo(x,y+100);
  ctx.lineTo(x+20,y+140);
  ctx.lineTo(x,y+180);
  ctx.lineTo(x+20,y+220);
  ctx.lineTo(x,y+260);
  ctx.lineTo(x+40,y+270);
  ctx.lineTo(x+80,y+260);
  ctx.lineTo(x+120,y+270);
  ctx.lineTo(x+160,y+260);
  ctx.lineTo(x+200,y+270);
  ctx.lineTo(x+240,y+260);
  ctx.lineTo(x+280,y+270);
  ctx.lineTo(x+320,y+260);
  ctx.lineTo(x+360,y+270);
  ctx.lineTo(x+400,y+260);
  ctx.lineTo(x+420,y+260);
  ctx.lineTo(x+400,y+220);
  ctx.lineTo(x+420,y+180);
  ctx.lineTo(x+400,y+140);
  ctx.lineTo(x+420,y+100);
  ctx.lineTo(x+400,y+50);
  ctx.lineTo(x+420,y);
  ctx.lineTo(x+210,y-10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

window.renderStatistics  = function(ctx) {
  renderCloud(ctx, CLOUD_X+shadowOffsetX, CLOUD_Y+shadowOffsetY, 'rgba(213, 213, 213, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#3f3f3f';
  ctx.font = '16px Pt Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X+30, CLOUD_Y+20);
  ctx.fillText('Список результатов:', CLOUD_X+130, CLOUD_Y+50);

  //histogram
  ctx.fillText('Вы', 130, 250);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(130, 90, 40, 150);
  //player1
  ctx.fillStyle = '#3f3f3f';
  ctx.fillText('Player1', 220, 250);
  var saturation = Math.round(Math.random(1)*100);
  ctx.fillStyle = 'hsl(240, ' + saturation + '%, 70%)';
  ctx.fillRect(220, 90, 40, 150);
  //Player2
  ctx.fillStyle = '#3f3f3f';
  ctx.fillText('Player2', 310, 250);
  var saturation = Math.round(Math.random(1)*100);
  ctx.fillStyle = 'hsl(240, ' + saturation + '%, 70%)';
  ctx.fillRect(310, 90, 40, 150);
  //Player3
  ctx.fillStyle = '#3f3f3f';
  ctx.fillText('Player3', 400, 250);
  var saturation = Math.round(Math.random(1)*100);
  ctx.fillStyle = 'hsl(240, ' + saturation + '%, 70%)';
  ctx.fillRect(400, 90, 40, 150);
};
