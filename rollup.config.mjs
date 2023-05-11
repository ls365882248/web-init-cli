import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import json from '@rollup/plugin-json';
import url from '@rollup/plugin-url';
import { uglify } from 'rollup-plugin-uglify';
import { defineConfig } from 'rollup';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  external: [],
  plugins: [
    peerDepsExternal({ useTsconfigDeclarationDir: true }),
    url(),
    del({ targets: ['dist/*', 'es/*'] }),
    uglify(),
    commonjs(),
    typescript(),
    json()
  ]
});
