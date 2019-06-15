'use strict';

(function () {
  var CLOUD = {
    x: 100,
    y: 10
  };
  var GAP_FIRST_LINE = {
    x: 30,
    y: 20
  };
  var GAP_SECOND_LINE = {
    x: 130,
    y: 40
  };


  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 20, y + 50);
    ctx.lineTo(x, y + 100);
    ctx.lineTo(x + 20, y + 140);
    ctx.lineTo(x, y + 180);
    ctx.lineTo(x + 20, y + 220);
    ctx.lineTo(x, y + 260);
    ctx.lineTo(x + 40, y + 270);
    ctx.lineTo(x + 80, y + 260);
    ctx.lineTo(x + 120, y + 270);
    ctx.lineTo(x + 160, y + 260);
    ctx.lineTo(x + 200, y + 270);
    ctx.lineTo(x + 240, y + 260);
    ctx.lineTo(x + 280, y + 270);
    ctx.lineTo(x + 320, y + 260);
    ctx.lineTo(x + 360, y + 270);
    ctx.lineTo(x + 400, y + 260);
    ctx.lineTo(x + 420, y + 260);
    ctx.lineTo(x + 400, y + 220);
    ctx.lineTo(x + 420, y + 180);
    ctx.lineTo(x + 400, y + 140);
    ctx.lineTo(x + 420, y + 100);
    ctx.lineTo(x + 400, y + 50);
    ctx.lineTo(x + 420, y);
    ctx.lineTo(x + 210, y - 10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  var getMaxElement = function (array) {
    var maxElement = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxElement) {
        maxElement = array[i];
      }
    }
    return maxElement;
  };

  var renderColumns = function (ctx, names, times) {
    var maxTime = getMaxElement(times);

    var GAP_PLAYER_TIME_Y = 60;
    var GAP_HISTOGRAM_Y = 70;
    var GAP_PLAYER = {
      x: 30,
      y: 245
    };
    var COLUMN_WIDTH = 40;
    var SPACE_BETWEEN_COLUMNS = 50;
    var COLUMN_MAX_HEIGHT = 150;

    for (var i = 0; i < names.length; i++) {
      var playerTimeX = CLOUD.x + GAP_PLAYER.x + (COLUMN_WIDTH + SPACE_BETWEEN_COLUMNS) * i;
      var playerTimeY = CLOUD.y + GAP_PLAYER_TIME_Y;
      var playerNameX = CLOUD.x + GAP_PLAYER.x + (COLUMN_WIDTH + SPACE_BETWEEN_COLUMNS) * i;
      var playerNameY = CLOUD.y + GAP_PLAYER.y;
      var rectX = CLOUD.x + GAP_PLAYER.x + (COLUMN_WIDTH + SPACE_BETWEEN_COLUMNS) * i;
      var rectY = CLOUD.y + GAP_FIRST_LINE.y + GAP_HISTOGRAM_Y + COLUMN_MAX_HEIGHT;
      var columnHeight = -COLUMN_MAX_HEIGHT * times[i] / maxTime;

      ctx.fillStyle = '#3f3f3f';
      ctx.fillText(Math.round(times[i]), playerTimeX, playerTimeY);
      ctx.fillText(names[i], playerNameX, playerNameY);
      var saturation = Math.round(Math.random(1) * 100);
      ctx.fillStyle = 'hsl(240, ' + saturation + '%, 70%)';
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      }
      ctx.fillRect(rectX, rectY, COLUMN_WIDTH, columnHeight);
    }
  };

  window.renderStatistics = function (ctx, names, times) {
    var shadowOffset = {
      x: 10,
      y: 10
    };

    renderCloud(ctx, CLOUD.x + shadowOffset.x, CLOUD.y + shadowOffset.y, 'rgba(213, 213, 213, 0.7)');
    renderCloud(ctx, CLOUD.x, CLOUD.y, '#ffffff');

    ctx.fillStyle = '#3f3f3f';
    ctx.font = '16px Pt Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', CLOUD.x + GAP_FIRST_LINE.x, CLOUD.y + GAP_FIRST_LINE.y);
    ctx.fillText('Список результатов:', CLOUD.x + GAP_SECOND_LINE.x, CLOUD.y + GAP_SECOND_LINE.y);

    renderColumns(ctx, names, times);
  };

})();
