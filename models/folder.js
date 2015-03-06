app.Folder = DS.Model.extend({
  title: DS.attr(),
  emails: DS.hasMany('email', {async: true})
});