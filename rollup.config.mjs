import config from '../../rollup.config.mjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import json from '@rollup/plugin-json';
import { defineConfig } from 'rollup';

export default defineConfig({
  ...config,
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
  plugins: [del({ targets: 'dist/*' }), peerDepsExternal({ useTsconfigDeclarationDir: true }), resolve(), commonjs(), typescript(), json()],
  external: [
    '@bixi-design/builder',
    '@bixi-design/lint',
    '@rollup/plugin-commonjs',
    '@rollup/plugin-node-resolve',
    'cac',
    'chalk',
    'cli-table3',
    'dotenv',
    'dotenv-expand',
    'ejs',
    'fs-extra',
    'inquirer',
    'lodash',
    'ora',
    'rollup',
    'rollup-plugin-typescript2',
    'express',
    'portfinder',
    'open',
    // 注意，这里需要把 lowdb 打包进来，避免 commonjs import esm 导致错误
    // 'lowdb',
    'socket.io',
    'rxjs',
    'axios',
    'esbuild',
    'semver',
    'path',
    'child_process',
    'qs'
  ]
});
