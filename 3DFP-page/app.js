(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getToBuy();

  toBuyList.addItem = function (idx) {
    ShoppingListCheckOffService.addItem(ShoppingListCheckOffService.removeItem(idx));
  }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBought();

}


function ShoppingListCheckOffService() {

  var service = this;

  var toBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Water",
      quantity: "7"
    }
  ];

  var bought = [];


  service.getToBuy = function () {
    return toBuy;
  };

  service.removeItem = function (idx) {
      var temp = {
        name: toBuy[idx].name,
        quantity: toBuy[idx].quantity
      };
      toBuy.splice(idx, 1);
    return temp;
  };

  service.getBought = function () {
    return bought;
  };

  service.addItem = function (item) {
    bought.push(item);
  }
}

})();
