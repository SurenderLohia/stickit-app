var Backbone = require("backbone");
var Stickit = require("backbone.stickit");
var viewTemplate = require('templates/new-address.html');
var _ = require('underscore');

var NewAddress = Backbone.View.extend({
  bindings: {
      '#name': 'name',
      '#email': 'email',
      '#street': 'street',
      '#zip': 'zip',
      '#city': 'city',
      '#country': 'country',
      '#phone': 'phone',
      '#web': 'web'
   },

   template: _.template(viewTemplate),

   render: function() {
     this.$el.html(this.template(this.model));
     this.stickit();
     return this;
   }
});
module.exports = NewAddress;