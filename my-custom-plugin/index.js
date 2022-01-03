const { getSpells } = require('../data/spells-cjs')

function myCustomPlugin(context, options) {
  return {
    name: 'my-custom-plugin',
    async loadContent() {
      console.log("Load content...")
    },
    async contentLoaded({content, actions}) {
      const { createData, addRoute } = actions;

      getSpells(async function(spells) {
        console.log(spells)
        const testData = await createData('spells.json', JSON.stringify({ a:1, b:2 }));

        addRoute({
          path: '/api/spells',
          component: '@site/src/components/test',
          exact: true,
          modules: {
            testData: testData
          }
        });
      })
    },
  };
};

module.exports = myCustomPlugin
