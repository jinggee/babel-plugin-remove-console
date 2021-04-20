export default function () {
  return {
    name: '@clintech/babel-plugin-remove-console',
    visitor: {
      CallExpression(path, state) {
        const { env } = state.opts;
        if (env !== 'prod' && env !== 'production') {
          return;
        }
        const callee = path.get('callee');
        if (!callee.isMemberExpression()) {
          return;
        }
        if (callee.get('object').isIdentifier({ name: 'console' })) {
          path.remove();
        }
      },
    },
  };
}
