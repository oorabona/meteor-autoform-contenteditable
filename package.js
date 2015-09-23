Package.describe({
  name: 'oorabona:autoform-contenteditable',
  version: '0.1.0',
  summary: 'Alternate contenteditable handler for Meteor AutoForm',
  git: 'https://github.com/oorabona/meteor-autoform-contenteditable.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('coffeescript@1.0.0');
  api.use('aldeed:autoform@5.0.0');
  api.use('templating@1.0.0');
  api.addFiles('autoform-contenteditable.coffee', 'client');
});
