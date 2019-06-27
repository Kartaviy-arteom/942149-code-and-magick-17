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

          var returnItem = function (item, itemStartCoords) {
            item.style.left = (item.offsetLeft - (item.getBoundingClientRect().left - itemStartCoords.x)) + 'px';
            item.style.top = (item.offsetTop - (item.getBoundingClientRect().top - itemStartCoords.y)) + 'px';
          };

          var alignItem = function (item, dropLocationSizes, dropLocationCoords) {
            var gapX = item.getBoundingClientRect().left  - dropLocationCoords.x;
            var itemShiftX = gapX % dropLocationSizes.cell.width;
            item.style.left = (item.offsetLeft - itemShiftX) + 'px';
            var gapY = item.getBoundingClientRect().top  - dropLocationCoords.y;
            var itemShiftY = gapY % dropLocationSizes.cell.height;
            item.style.top = (item.offsetTop - itemShiftY) + 'px';
          };

          var checkHit = function (item, targetCoords, targetSizes) {
            if (item.getBoundingClientRect().left < targetCoords.x || item.getBoundingClientRect().left > targetCoords.x + targetSizes.width) {
              return false;
            }
            if (item.getBoundingClientRect().top < targetCoords.y || item.getBoundingClientRect().top > targetCoords.y + targetSizes.height) {
              return false;
            } else {return true};
          };

          if (checkHit(magicItem, inventoryCoordinates, INVENORY_SIZES)) {
            alignItem(magicItem, INVENORY_SIZES, inventoryCoordinates);
          }

          else {
            returnItem(magicItem, magicItemCoordinates);
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
          var onClickPreventDefault = function (clickEvt) {
            clickEvt.preventDefault();
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
