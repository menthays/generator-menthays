'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-menthays:webpack3', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments(['generator-temp'])
      .withPrompts({
        name: 'test',
        formatEnabled: true,
        username: 'Menthays <tillohao@gmail.com>',
        description: 'test with jest'
      });
  });

  it('created and CD into a folder named like the generator', () => {
    assert.equal(path.basename(process.cwd()), 'generator-temp');
  });

  it('creates files', () => {
    assert.file([
      'webpack.config.js',
      'webpack.utils.js',
      'postcss.config.js',
      'package.json',
      '.babelrc',
      '.eslintrc',
      '.editorconfig',
      '.gitignore'
    ]);
  });
});

describe('generator-menthays:webpack4', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments(['generator-temp'])
      .withOptions({ webpack4: true })
      .withPrompts({
        name: 'test',
        formatEnabled: true,
        username: 'Menthays <tillohao@gmail.com>',
        description: 'test with jest'
      });
  });

  it('created and CD into a folder named like the generator', () => {
    assert.equal(path.basename(process.cwd()), 'generator-temp');
  });

  it('creates files', () => {
    assert.file([
      'webpack.config.js',
      'webpack.utils.js',
      'postcss.config.js',
      'package.json',
      '.babelrc',
      '.eslintrc',
      '.editorconfig',
      '.gitignore'
    ]);
  });
});
