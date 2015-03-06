app.NewEmailController = Ember.Controller.extend({
  actions: {
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
      this.transitionToRoute('emails');
    }
  }
});