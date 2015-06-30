var context = require.context('./assets/js', true, /-test.js$/);

context.keys().forEach(context);
