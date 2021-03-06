app.AssignToFolderController = Ember.ObjectController.extend({
  needs: ['email'],
  selectedFolder: null,

  actions: {
    assignToFolder: function() {
      var selectedFolderID = this.get('selectedFolder');
      var selectedFolder = this.get('model').findBy('id', selectedFolderID);
      
      var email = this.get('controllers.email.model'); // does this magically get the right email because was inside outlet?

      debugger;

      // first remove previous folder assignment
      if(email.get('folder').get('content') !== null) {
        email.get('folder').get('emails').removeObject(email);
        email.save();
      }

      selectedFolder.get('emails').pushObject(email);
      selectedFolder.save();
      this.transitionToRoute('folder', selectedFolderID)
    }
  }
});