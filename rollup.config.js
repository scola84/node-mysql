import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/mysql.js',
  entry: 'index.js',
  format: 'cjs',
  plugins: [
    buble()
  ]
};
