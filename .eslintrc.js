module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2020,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
    "react/prop-types": "off",
		"quotes": ["error","double"],
		"semi": ["error","never"]
	}
}
