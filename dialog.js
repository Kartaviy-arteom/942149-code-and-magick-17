'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialog = setup.querySelector('.upload');
  var inventoryItems = setup.querySelectorAll('.setup-artifacts-cell img[draggable="true"]');

/*  for (var i = 0; i < inventoryItems.length; i++) {
    inventoryItems[i].addEventListener('mousedown', function(evt) {
      evt.preventDefault();

      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        inventoryItems[i].style.top = moveEvt.clientX + 'px';
        inventoryItems[i].style.left = moveEvt.clientY + 'px';
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };*/



  dialog.addEventListener('mousedown', function(evt) {
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
          dialog.removeEventListener('click', onClickPreventDefault)
        };
        dialog.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  })

})();
