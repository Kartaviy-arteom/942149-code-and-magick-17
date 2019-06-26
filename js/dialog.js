'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialog = setup.querySelector('.upload');

  (function () {
    var artifactsShop = setup.querySelector('.setup-artifacts-shop');
    var inventory = setup.querySelector('.setup-artifacts');
    var INVENORY_SIZES = {
      width: 260,
      height: 260,
      cell : {
        width: 65,
        height: 65
      }
    };

    artifactsShop.addEventListener('mousedown', function (evt) {
      if (evt.target.localName === 'img') {
        var magicItem = evt.target;
        magicItem.style.position = 'absolute';
        var inventoryCoordinates = {
          x: inventory.getBoundingClientRect().left,
          y: inventory.getBoundingClientRect().top
        };

        var magicItemCoordinates = {
          x: magicItem.getBoundingClientRect().left,
          y: magicItem.getBoundingClientRect().top
        };

        var startСoordinates = {
          x: evt.clientX,
          y: evt.clientY
        };

        var onMouseMove = function (moveEvt) {
          moveEvt.preventDefault();


          var shift = {
            x: startСoordinates.x - moveEvt.clientX,
            y: startСoordinates.y - moveEvt.clientY
          };

          startСoordinates = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
          };

          magicItem.style.top = (magicItem.offsetTop - shift.y) + 'px';
          magicItem.style.left = (magicItem.offsetLeft - shift.x) + 'px';
        };

        var onMouseUp = function (upEvt) {
          upEvt.preventDefault();


          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
          // по оси х бросаем мимо инвенторя
          if (magicItem.getBoundingClientRect().left < inventoryCoordinates.x || magicItem.getBoundingClientRect().left > inventoryCoordinates.x + INVENORY_SIZES.width) {
            magicItem.style.left = (magicItem.offsetLeft - (magicItem.getBoundingClientRect().left - magicItemCoordinates.x)) + 'px';
            magicItem.style.top = (magicItem.offsetTop - (magicItem.getBoundingClientRect().top - magicItemCoordinates.y)) + 'px';
          }
          // по оси y мимо инвенторя

          if (magicItem.getBoundingClientRect().top < inventoryCoordinates.y || magicItem.getBoundingClientRect().top > inventoryCoordinates.y + INVENORY_SIZES.height) {
            magicItem.style.left = (magicItem.offsetLeft - (magicItem.getBoundingClientRect().left - magicItemCoordinates.x)) + 'px';
            magicItem.style.top = (magicItem.offsetTop - (magicItem.getBoundingClientRect().top - magicItemCoordinates.y)) + 'px';
          }

          else {
            // выравнивание по x
            var gapX = magicItem.getBoundingClientRect().left  - inventoryCoordinates.x;
            var magicItemShiftX = gapX % INVENORY_SIZES.cell.width;
            magicItem.style.left = (magicItem.offsetLeft - magicItemShiftX) + 'px';
            // выравнивание по y
            var gapY = magicItem.getBoundingClientRect().top  - inventoryCoordinates.y;
            var magicItemShiftY = gapY % INVENORY_SIZES.cell.height;
            magicItem.style.top = (magicItem.offsetTop - magicItemShiftY) + 'px';
          }
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      }
    });
  })();

  // Движение диалогового окна

  (function () {
    dialog.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startСoordinates = {
        x: evt.clientX,
        y: evt.clientY
      };
      var dragged = false;

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();

        dragged = true;
        var shift = {
          x: startСoordinates.x - moveEvt.clientX,
          y: startСoordinates.y - moveEvt.clientY
        };

        startСoordinates = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        setup.style.top = (setup.offsetTop - shift.y) + 'px';
        setup.style.left = (setup.offsetLeft - shift.x) + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPreventDefault = function (evt) {
            evt.preventDefault();
            dialog.removeEventListener('click', onClickPreventDefault);
          };
          dialog.addEventListener('click', onClickPreventDefault);
        }

      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  })();
})();
