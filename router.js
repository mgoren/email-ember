app.Router.map(function() {
  this.resource('emails', {path: '/'});
  this.resource('email', {path: '/emails/:email_id'});
  this.resource('new-email');
});