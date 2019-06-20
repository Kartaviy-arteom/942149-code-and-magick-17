'use strict';

(function () {

  var chooseRandomElement = function (arr) {
    var randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement;
  };

  var getWizardNames = function (names, surnames) {
    var wizardFullNames = [];

    for (var i = 0; i < names.length; i++) {
      wizardFullNames[i] = chooseRandomElement(names) + ' ' + chooseRandomElement(surnames);
    }
    return wizardFullNames;
  };

  var createWizards = function () {
    var wizards = [];
    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

    var wizardFullNames = getWizardNames(WIZARD_NAMES, WIZARD_SURNAMES);

    for (var i = 0; i < 4; i++) {
      wizards[i] = {
        name: wizardFullNames[i],
        coatColor: chooseRandomElement(coatColors),
        eyesColor: chooseRandomElement(eyesColors)
      };
    }
    return wizards;
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizards = createWizards();
  var fragment = document.createDocumentFragment();

  var renderWizard = function (i) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    fragment.appendChild(wizardElement);
  };

  for (var i = 0; i < 4; i++) {
    renderWizard(i);
  }

  similarListElement.appendChild(fragment);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');

  //module4-task1
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var hiddenCoat = setup.querySelector('input[name="coat-color"]');
  var hiddenEyes = setup.querySelector('input[name="eyes-color"]');
  var hiddenFireball = setup.querySelector('input[name="fireball-color"]');

  var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
    }
  };

  var openPopup = function() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', onCoatPress);
    wizardEyes.addEventListener('click', onEyesPress);
    fireball.addEventListener('click', onFireballPress);
  };

  var closePopup = function() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', onCoatPress);
    wizardEyes.removeEventListener('click', onEyesPress);
    fireball.removeEventListener('click', onFireballPress);
  };

  var onCoatPress = function() {
    wizardCoat.style.fill = coatColors[Math.floor(Math.random()*coatColors.length)];
    hiddenCoat.value = wizardCoat.style.fill;
  };

  var onEyesPress = function() {
    wizardEyes.style.fill = eyesColors[Math.floor(Math.random()*eyesColors.length)];
    hiddenEyes.value  = wizardEyes.style.fill;
  };

  var onFireballPress = function() {
    hiddenFireball.value = fireballs[Math.floor(Math.random()*fireballs.length)];
    fireball.style.backgroundColor  = hiddenFireball.value;
    // Если fireball.style.backgroundColor = fireballs[Math.floor(Math.random()*fireballs.length)]
    //Получаем цвет в rgb ???
  };

  setupOpen.addEventListener('click', function() {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function() {
    closePopup();
  });

  setupClose.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
