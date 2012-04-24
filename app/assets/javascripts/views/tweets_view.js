var TweetsView = Backbone.View.extend({
  tagName: 'table',
  className: 'tweets',
  
  initialize: function(options) {
    _.bindAll(this, 'render');
    this.collection.on('all', this.render, this);
  },
  
  render: function() {
    var markup = "";
    this.collection.each(function(tweet) {
      markup = markup + JST.tweet_row(tweet);
    });
    this.$el.html(markup);
    return this;
  }
});