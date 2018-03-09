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
    this.option('vanilla')
    this.option('react')

    this.mode = this.options.react ? 'react' : 'vanilla'
  }

  prompting() {
    // Have Yeoman greet the user.
    if (this.mode === 'react') {
      this.log(yosay(
        'Welcome to the sweet ' + chalk.red('generator-menthays') + ' generator!\n' +
        'You have choose react scaffold. This one is based on create-react-app and integrated with sass and ant-design'
      ));
    } else {
      this.log(yosay(
        'Welcome to the sweet ' + chalk.red('generator-menthays') + ' generator!\n' 
      ));

      return this.prompt([{
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.options.appname // Default to current folder name
      }, {
        type: 'input',
        name: 'username',
        message: 'What\'s your GitHub username',
        store: true
      }, {
        type: 'input',
        name: 'description',
        message: 'Some description pls',
      }]).then((props) => {
        this.props = props
      });
    }

  }

  writing() {
    if (this.mode === 'react') {
      this.fs.copyTpl(
        this.templatePath('./react-scaffold'),
        this.destinationPath(`./${this.options['appname']}/`), { ...this.props
        }
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('./vanilla-scaffold'),
        this.destinationPath(`./${this.options['appname']}/`), { ...this.props
        }
      );
    }

  }

  install() {
    process.chdir(process.cwd()+'/'+this.options.appname);
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
