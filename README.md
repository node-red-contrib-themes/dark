# Dark Node-RED theme

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

[![NPM Shield][npm-shield]][npm-package]

<a href="https://www.buymeacoffee.com/mbonani" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height="60px" width="217px"></a>

A dark theme for [Node-RED][node-red].

![screenshot](https://raw.githubusercontent.com/node-red-contrib-themes/dark/master/images/screenshot.png)

## Install

Install via npm

```shell
npm install @node-red-contrib-themes/dark
```

## Configuration

### Node-RED version 1.3.0 or later

Add the following to the `editorTheme` section of your `settings.js`, and then restart Node-RED.

```js
editorTheme: {
    theme: "dark"
}
```

### Themed Scrollbars (EXPERIMENTAL)

This includes changes to the scrollbars to make them better fit the theme.

**NOTE**: This is ***EXPERIMENTAL*** and may not work on all browsers.

If you want to try it, change the `editorTheme` section of your `settings.js` to
look like the following, and then restart Node-RED.

```js
editorTheme: {
    theme: "dark-scroll"
}
```

### Node-RED versions from 1.0.0 to 1.2.9

Add the following to the `editorTheme` section of your `settings.js`, and then restart Node-RED.

```js
editorTheme: {
    page: {
        css: [
            "<user-dir>/node_modules/@node-red-contrib-themes/dark/theme.css"
            // Uncomment the next two lines if you want to use the themed scrollbars.
            // ,
            // "<user-dir>/node_modules/@node-red-contrib-themes/dark/scrollbars.css",
        ]
    }
}
```

Replace `<user-dir>` with the Node-RED User directory. For example, `/home/username/.node-red`.

For more details on the configuration please refer to the
[Node-RED official documentation][node-red-doc].

Enjoy!

## License

[MIT][license]

[commits-shield]: https://img.shields.io/github/commit-activity/y/node-red-contrib-themes/dark.svg
[commits]: https://github.com/node-red-contrib-themes/dark/commits/master
[last-commit-shield]: https://img.shields.io/github/last-commit/node-red-contrib-themes/dark.svg
[license]: https://github.com/node-red-contrib-themes/dark/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/node-red-contrib-themes/dark.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2021.svg
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration
[node-red]: https://nodered.org/
[npm-package]: https://nodei.co/npm/@node-red-contrib-themes/dark
[npm-shield]: https://nodei.co/npm/@node-red-contrib-themes/dark.png
