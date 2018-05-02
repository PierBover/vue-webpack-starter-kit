// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true
	},
	plugins: [
		'html'
	],
	'rules': {
		'semi': 2,
		'no-extra-semi': 2,
		'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
		'indent': ['error', 'tab', {'SwitchCase': 1}],
		'keyword-spacing': ['error', {'after': true}],
		'space-before-blocks': 'error',
		'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
		'space-in-parens': ['error', 'never'],
		'space-before-function-paren': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'object-curly-spacing': ['error', 'never'],
		'semi-spacing': ['error', {'before': false, 'after': true}],
		'no-multi-spaces': 'error',
		'no-trailing-spaces': 'error',
		'space-infix-ops': 'error',
		'comma-spacing': ['error', {'before': false, 'after': true}],
		'arrow-parens': ['error', 'always'],
		'no-dupe-args': 'error',
		'yoda': 'error',
		'comma-dangle': ['error', 'never'],
		'arrow-spacing': ['error', {'before': true, 'after': true}]
	}
};
