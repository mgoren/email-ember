app.NewFolderController = Ember.Controller.extend({
  actions: {
    newFolder: function() {
      var newFolder = this.store.createRecord('folder', {
        title: this.get('folderName')
      });
      newFolder.save();
      this.set('folderName', null);
    }
  }
});