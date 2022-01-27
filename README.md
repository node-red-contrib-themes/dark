# Node-RED Contrib Theme: Dark

A dark theme for [Node-RED][node-red].

![screenshot](https://raw.githubusercontent.com/node-red-contrib-themes/dark/master/images/screenshot.png)

This theme is part of the [Node-RED Contrib Theme Collection][theme-collection].

## Install

### Install with npm

Run the following command from within the Node-RED user data directory (by default, `$HOME/.node-red`).

```shell
npm install @node-red-contrib-themes/dark
```

## Usage

Add `theme: "dark"` to the `editorTheme` object in your `settings.js` and then restart Node-RED.

```js
editorTheme: {
    theme: "dark",
},
```

For details on the Node-RED's configuration file and its structure, please refer to the [Node-RED official documentation][node-red-doc].

### Themed Scrollbars (*EXPERIMENTAL*)

Includes the theme and changes the scrollbars to make them better fit the theme.

**NOTE**: This is ***EXPERIMENTAL*** and may not work on all browsers.

Add `theme: "dark-scroll"` to the `editorTheme` object in your `settings.js` and then restart Node-RED.

```js
editorTheme: {
    theme: "dark-scroll",
},
```

### Monaco Editor Theme

This package comes with a pre-configured theme for the Monaco editor.

Just leave `theme` under `codeEditor` commented out in your `settings.js` and then restart Node-RED.

```js
editorTheme: {
    theme: dark,
    codeEditor: {
        lib: "monaco",
        options: {
            // theme: "",
        },
    },
},
```

## License

This project is licensed under the [MIT license][license].

## Like my work?

If you like my work please give it a GitHub ⭐️.

Also, consider supporting me with a coffee ☕.

<a href="https://www.buymeacoffee.com/mbonani" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height="60px"></a>

[license]: LICENSE
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration#editor-themes
[node-red]: https://nodered.org/
[theme-collection]: https://www.npmjs.com/package/@node-red-contrib-themes/theme-collection
