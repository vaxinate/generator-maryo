define([
    'backbone',
    'marionette'
],

function (Backbone, Marionette) {

    return Backbone.Marionette.CollectionView.extend({

        itemView: <%= itemViewName %>,

        events: {},

        initialize: function () {}

    });
});
