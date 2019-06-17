'use strict';

(function () {

  var chooseRandomElement = function (arr) {
    var randomElement = arr[Math.round(Math.random(1) * (arr.length - 1))];
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
        coatColors: chooseRandomElement(coatColors),
        eyesColors: chooseRandomElement(eyesColors)
      };
    }
    return wizards;
  };

  var renderWizards = function () {
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

    var wizards = createWizards();

    for (var i = 0; i < 4; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColors;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColors;
      similarListElement.appendChild(wizardElement);
    }
  };

  renderWizards();

  var setup = document.querySelector('.setup');
  setup.classList.remove('hidden');

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
})();
