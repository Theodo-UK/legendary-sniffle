module.exports = {
  '*.{js,jsx,ts,tsx,cjs,mjs}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': ['tsc-files'],
  '*.{json,yaml}': ['prettier --write'],
};
