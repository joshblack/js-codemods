'use strict';

module.exports = (file, api) => {
  const j = api.jscodeshift;
  const convertSymbolToLiteral = (path) => {
    const value = path.value.arguments[0].value;
    return j.literal(value);
  };

  return j(file.source)
    .find(j.CallExpression, {
      callee: {
        name: 'Symbol',
      },
    })
    .replaceWith(convertSymbolToLiteral)
    .toSource({ quote: 'single' });
};
