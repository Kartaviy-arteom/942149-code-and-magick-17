'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialog = setup.querySelector('.upload');
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
        x: inventory.offsetTop,
        y: inventory.offsetLeft
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

          /*if (moveEvt.clientY > inventory.clientY && moveEvt.clientY < inventory.clientY + INVENORY_SIZES.height) {*/
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();


        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        if (magicItem.offsetLeft > inventoryCoordinates.x && magicItem.offsetLeft < inventoryCoordinates.x + INVENORY_SIZES.width) {
          magicItem.style.top = 0 + 'px';
          console.log(magicItem.style.top);
          magicItem.style.left = 0 + 'px';
        };
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

    }
  });

  // Движение диалогового окна

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
