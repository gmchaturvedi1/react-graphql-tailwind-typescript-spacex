/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  // add this lines
  './pages/**/*.{js,ts,jsx,tsx}',
  // if you have other folder, add its path too, like this:
  './components/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  extend: {},
 },
 plugins: [],

 purge: ['./pages/**/*.tsx', './pages/**/*.js', './pages/**/*.ts', './components/**/*.tsx', './components/**/*.js', './components/**/*.ts'],
};
