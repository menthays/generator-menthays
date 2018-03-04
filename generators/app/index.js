'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', { type: String, required: true });

    this.log(this.options.appname);
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the sweet ' + chalk.red('generator-menthays') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option? I change it?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('./'),
      this.destinationPath('./')
    );
  }

  install() {
    this.installDependencies();
  }
};
