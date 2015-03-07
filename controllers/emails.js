app.EmailsController = Ember.ArrayController.extend({
  actions: {
    newEmail: function() {
      $("#myModal").modal('show');
    },
    send: function() {
      var newEmail = this.store.createRecord('email', {
        title: this.get('title'),
        body: this.get('body'),
        from: this.get('from'),
        to: this.get('to')
      });
      newEmail.save();
      this.set('title', null);
      this.set('body', null);
      this.set('from', null);
      this.set('to', null);
      $("#myModal").modal('hide');
    }

  }
});