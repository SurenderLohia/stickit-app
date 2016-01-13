// setup deps
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Address = require('models/address');
var NewAddress = require('views/new-address');
var Preview = require('views/preview');
Backbone.$ = $;


var address;
$(document).ready(function() {
  address = new Address();
  var formView = new NewAddress({ model: address, el: $("#newForm")});
  formView.render();

  var preview = new Preview({model: address, el: $("#preview") });
  preview.render();
});


module.exports = {
  address: function() { return address }
}

