module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb", "airbnb-typescript"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    project: ["./**/**/tsconfig.json", "*/tsconfig.json"]
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {},
  "overrides": [
    {
      "files": ["*.stories.tsx"],
        "rules": {
          "react/function-component-definition": 0,
          "react/jsx-props-no-spreading": 0,
        }
    }
   ],
  "ignorePatterns": ['.eslintrc.js', 'node_modules/**']
};