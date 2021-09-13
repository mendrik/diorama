import resolve from 'rollup-plugin-node-resolve'
import tsc from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json'

export default {
  input: 'src/layout.ts',
  treeshake: true,
  output: [
    {
      name: 'diorama',
      file: 'dist/diorama.js',
      format: 'iife',
      sourcemap: true,
      banner: `/* diorama image layout v${pkg.version} */`,
      exports: 'named'
    }
  ],
  plugins: [
    commonjs({}),
    resolve({
      browser: true
    }),
    tsc({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ES2015',
          target: 'es5',
          declaration: true
        },
        exclude: ['src/diorama.tsx', 'src/images.ts', 'src/start.tsx', 'src/tile.tsx'],
        clean: true
      }
    })
  ]
}
