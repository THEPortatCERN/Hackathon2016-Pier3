(function (angular) {
  'use strict';

  var app = angular.module('hermitCrabs');

  app.factory('categoryService', function () {
    
    // TODO: HTTP Request.
    var categories = [
      {id: 'food-water', name: 'Food / Water', icon: 'food-water.png'},
      {id: 'shelter', name: 'Shelter', icon: 'shelter.png'},
      {id: 'first-aid', name: 'First Aid', icon: 'first-aid.png'},
      {id: 'sanitation', name: 'Sanitation', icon: 'sanitation.png'}
    ];

    var subcategories = {
      'food-water': [
        {id: 'baby-food', name: 'Baby Food', icon: 'food-water.png', unit: 'kg', amount: 0},
        {id: 'food', name: 'Regular Food', icon: 'food-water.png', unit: 'kg', amount: 0},
        {id: 'special-food', name: 'Special Food', icon: 'food-water.png', unit: 'kg', amount: 0},
        {id: 'water', name: 'Water', icon: 'needs-water.png', unit: 'liters', amount: 0}
      ],
      'shelter': [],
      'first-aid': [],
      'sanitation': []
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
