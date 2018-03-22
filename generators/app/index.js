'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', {
      type: String,
      required: true
    });
  }

  prompting() {
    this.log(
      yosay('Welcome to the sweet ' + chalk.red('generator-menthays') + ' generator!\n')
    );

    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.options.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'username',
        message: "What's your GitHub username",
        store: true
      },
      {
        type: 'input',
        name: 'description',
        message: 'Some description pls'
      }
    ]).then(props => {
      this.props = props;
    });
  }

  writing() {
    this._writingMain();
    this._writingConfig();
    this._writingPkgWithProps();
  }

  _writingMain() {
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/__mocks__'),
      this.destinationPath(`./${this.options.appname}/__mocks__`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/src'),
      this.destinationPath(`./${this.options.appname}/src`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/static'),
      this.destinationPath(`./${this.options.appname}/static`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/test'),
      this.destinationPath(`./${this.options.appname}/test`)
    );
  }

  _writingConfig() {
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/babelrc'),
      this.destinationPath(`./${this.options.appname}/.babelrc`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/editorconfig'),
      this.destinationPath(`./${this.options.appname}/.editorconfig`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/gitignore'),
      this.destinationPath(`./${this.options.appname}/.gitignore`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/postcss.config.js'),
      this.destinationPath(`./${this.options.appname}/postcss.config.js`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/README.md'),
      this.destinationPath(`./${this.options.appname}/README.md`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/webpack.config.js'),
      this.destinationPath(`./${this.options.appname}/webpack.config.js`)
    );
    this.fs.copy(
      this.templatePath('./vanilla-scaffold/webpack.utils.js'),
      this.destinationPath(`./${this.options.appname}/webpack.utils.js`)
    );
  }

  _writingPkgWithProps() {
    this.fs.copyTpl(
      this.templatePath('./vanilla-scaffold/package.json'),
      this.destinationPath(`./${this.options.appname}/package.json`),
      {
        ...this.props
      }
    );
  }

  install() {
    process.chdir(process.cwd() + '/' + this.options.appname);
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
