const roomsRouter = require('./rooms.route');
const pluginRouter = require('./plugin.router');

// Import Swagger for documentation
const swagger = require('swagger-ui-express');
const docs = require('../../docs');

module.exports = router => {
  router.use('/', pluginRouter);
  router.use('/rooms', roomsRouter);
  router.use('/docs', swagger.serve, swagger.setup(docs))

  return router;
}