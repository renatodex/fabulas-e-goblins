async function myCustomPlugin(context, options) {

  return {
    name: 'my-custom-plugin',
    async loadContent() {
      console.log("Load content...")
    },
    async contentLoaded({content, actions}) {
      const { createData, addRoute } = actions;

      const testData = await createData('mydata.json', JSON.stringify({ a:1, b:2 }));

      addRoute({
        path: '/my-custom-plugin',
        component: '@site/src/components/test',
        exact: true,
        modules: {
          testData: testData
        }
      });
    },
  };
};

module.exports = myCustomPlugin
