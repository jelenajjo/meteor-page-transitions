Package.describe({
  summary: "A simple responsive layout with some fancy page transitions.",
  version: "1.0.0",
  name: "jelena:meteor-page-transitions",
  git: "https://github.com/jelenajjo/meteor-page-transitions.git"
});


Package.onUse(function (api) {
  api.use("jquery", "client");
    
  api.addFiles('component.css', 'client');
  api.addFiles('modernizr.custom.js', 'client');
  api.addFiles('boxlayout.js', 'client');
});

