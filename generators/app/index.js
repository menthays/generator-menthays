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
    this.templateDir = 'mpa';
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
    let mainDir = ['__mocks__', 'src', 'static', 'test'];
    mainDir.map(dir => {
      return this.fs.copy(
        this.templatePath(`./${this.templateDir}/${dir}`),
        this.destinationPath(`./${this.options.appname}/${dir}`)
      );
    });
  }

  _writingConfig() {
    let configMap = {
      babelrc: '.babelrc',
      editorconfig: '.editorconfig',
      eslintrc: '.eslintrc',
      gitignore: '.gitignore',
      'postcss.config.js': 'postcss.config.js',
      'README.md': 'README.md',
      'webpack.config.js': 'webpack.config.js',
      'webpack.utils.js': 'webpack.utils.js'
    };

    Object.keys(configMap).map(key => {
      return this.fs.copy(
        this.templatePath(`./${this.templateDir}/${key}`),
        this.destinationPath(`./${this.options.appname}/${configMap[key]}`)
      );
    });
  }

  _writingPkgWithProps() {
    this.fs.copyTpl(
      this.templatePath(`./${this.templateDir}/packageJson`),
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
