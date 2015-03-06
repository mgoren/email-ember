app.Email = DS.Model.extend({
  from: DS.attr(),
  to: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  folder: DS.belongsTo('folder', {async: true})
});