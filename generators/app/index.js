'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('appname', { type: String, required: true });
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sweet ' + chalk.red('generator-menthays') + ' generator!'
    ));

    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.options.appname // Default to current folder name
    }, {
      type    : 'input',
      name    : 'username',
      message : 'What\'s your GitHub username',
      store   : true
    }, {
      type    : 'input',
      name    : 'description',
      message : 'Some description pls',
    }]).then((props) => {
      this.props = props
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath(`./${this.options['appname']}/`),
      {...this.props}
    );
  }

  install() {
    this.installDependencies();
  }
};
