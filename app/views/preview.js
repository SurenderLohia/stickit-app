var Backbone = require("backbone");
var Stickit = require("backbone.stickit");
var _ = require("underscore");
var viewTemplate = require('templates/preview.html');
 
 var Preview = Backbone.View.extend({
   bindings: {
     '.name': 'name',
     '.email': 'email',
     '.street': 'street',
     '.zip': 'zip',
     '.city': 'city',
     '.country': 'country',
     '.phone': 'phone',
     '.web': 'web'
   },

   template: _.template(viewTemplate),

   render: function() {
     this.$el.html(this.template(this.model));
     this.stickit();
     return this;
   }
 });
 module.exports = Preview;