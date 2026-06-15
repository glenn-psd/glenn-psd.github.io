module.exports = [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        module: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        requestAnimationFrame: 'readonly',
        IntersectionObserver: 'readonly',
        MutationObserver: 'readonly',
        navigator: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { caughtErrors: 'none' }],
      'no-undef': 'error',
      'no-console': 'off',
    },
  },
];
