app.Router.map(function() {
  this.resource('emails', {path: '/'});
  this.resource('email', {path: '/emails/:email_id'}, function() {
    this.resource('assign-to-folder');
  });
  this.resource('new-email');
  this.resource('new-folder');
  this.resource('folders');
  this.resource('folder', {path: '/folders/:folder_id'});
});