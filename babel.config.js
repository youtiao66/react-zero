module.exports = {
  "presets": ["@babel/react", "@babel/typescript", ["@babel/env", { "modules": false }]],
  "plugins": ["@babel/plugin-proposal-object-rest-spread", "@babel/plugin-proposal-class-properties"]
}