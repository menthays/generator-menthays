## What's New
Add another scaffold for react. It is based on [create-react-app](https://github.com/facebookincubator/create-react-app), and integrated with sass and ant-design.  

```bash
# add '--react' option to create react scaffold
yo menthays <project-name> --react
```

## Bug fixed
- It will correctly enter the project and run npm install after creating the project.
- Correctly create /static folder to make webpack worked.
- No longer run bower install anymore.

## Improvement
- Remove puppeteer from devDependencies. You can integrate it by yourself when need ui-test.
- Update description and readme.