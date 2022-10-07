module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb", "airbnb-typescript"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    project: ["./**/**/tsconfig.lint.json", "*/tsconfig.lint.json"]
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "class-methods-use-this": 0,
    "@typescript-eslint/lines-between-class-members": 0,
  },
  "overrides": [
    {
      "files": ["*.stories.tsx"],
      "rules": {
        "react/function-component-definition": 0,
      }
    },
    {
      "files": ["httpIntercept.tsx"],
      "rules": {
        "func-names": 0,
      }
    }
   ],
  "ignorePatterns": ['.eslintrc.js', 'node_modules/**']
};