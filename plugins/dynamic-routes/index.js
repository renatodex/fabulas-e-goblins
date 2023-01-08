module.exports = function (context, options) {
  return {
      name: 'dynamic-routes',

      async contentLoaded({ content, actions }) {
          const { routes } = options
          const { addRoute } = actions

          routes.map(route => addRoute(route))
      }
  }
}