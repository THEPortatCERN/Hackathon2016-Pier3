(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('categoryService', function () {
    // TODO: HTTP Request.
    var categories = [
      {id: 'food_water', name: 'Food / Water', icon: 'food_water.png', folder: 'food_water'},
      {id: 'shelter', name: 'Shelter', icon: 'shelter.png', folder: 'shelter'},
      {id: 'first_aid', name: 'First Aid', icon: 'health.png', folder: 'first_aid'},
      {id: 'sanitation', name: 'Sanitation', icon: 'sanitation.png', folder: 'sanitation'}
    ];

    var subcategories = {
      'food_water': [
        {id: 'baby_food', name: 'Baby Food', icon: 'baby_food.png', unit: 'kg', amount: 0, folder: 'food_water'},
        {id: 'canned_food', name: 'Canned Food', icon: 'canned_food.png', unit: 'kg', amount: 0, folder: 'food_water'},
        {id: 'hot_meal', name: 'Hot Meal', icon: 'hot_meal.png', unit: 'kg', amount: 0, folder: 'food_water'},
        {id: 'water', name: 'Water', icon: 'water.png', unit: 'liters', amount: 0, folder: 'food_water'}
      ],
      'shelter': [
        {id: 'accomodation', name: 'Accomodations', icon: 'accomodation.png', unit: 'kg', amount: 0, folder: 'shelter'},
        {id: 'blankets', name: 'Blankets', icon: 'blankets.png', unit: 'kg', amount: 0, folder: 'shelter'},
        {id: 'cloth', name: 'Clothes', icon: 'cloth.png', unit: 'kg', amount: 0, folder: 'shelter'},
        {id: 'maintenance', name: 'Maintenance', icon: 'maintenance.png', unit: 'liters', amount: 0, folder: 'shelter'}
      ],
      'first_aid': [
        {id: 'doctor', name: 'Doctor', icon: 'doctor.png', unit: 'kg', amount: 0, folder: 'first_aid'},
        {id: 'first_aid_kit', name: 'First Aid Kit', icon: 'first_aid_kit.png', unit: 'kg', amount: 0, folder: 'first_aid'},
        {id: 'maternal_health', name: 'Maternal Health', icon: 'maternal_health.png', unit: 'kg', amount: 0, folder: 'first_aid'},
        {id: 'medication', name: 'Medication', icon: 'medication.png', unit: 'liters', amount: 0, folder: 'first_aid'}
      ],
      'sanitation': [
        {id: 'diaper', name: 'Diapers', icon: 'diaper.png', unit: 'kg', amount: 0, folder: 'sanitation'},
        {id: 'pad', name: 'Feminine Hygiene', icon: 'pad.png', unit: 'kg', amount: 0, folder: 'sanitation'},
        {id: 'shower', name: 'Shower', icon: 'shower.png', unit: 'kg', amount: 0, folder: 'sanitation'},
        {id: 'wash', name: 'Wash', icon: 'wash.png', unit: 'liters', amount: 0, folder: 'sanitation'}
      ]
    };

    function getSubcategories(category) {
      return angular.copy(subcategories[category]);
    }

    function getCategories() {
      return angular.copy(categories);
    }

    return {
      getCategories: getCategories,
      getSubcategories: getSubcategories
    };
  });

})(window.angular);
