<h1 align="center">cli-gradient</h1>

<p align="center">
  <strong>Add smooth gradient effects to your command line text, without any external dependencies.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/cli-gradient"><img src="https://img.shields.io/npm/v/cli-gradient.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/cli-gradient"><img src="https://img.shields.io/npm/dt/cli-gradient.svg" alt="NPM Downloads"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

## Features

- **Gradient Text**: Easily apply custom color gradients to your terminal output.
- **Pure JavaScript**: No external dependencies, just a lightweight, self-contained solution.
- **Configurable Gradients**: Specify your own start and end colors to create unique gradients.
- **Cross-Platform**: Works seamlessly on Windows, macOS, and Linux terminals.

## Installation

Install the package using npm:

```
npm install cli-gradient-pure
```

## Usage

Import the `gradientText` function and use it to apply gradient effects to your text:

```javascript
const { gradientText } = require('cli-gradient-pure');

console.log(gradientText('Hello, World!', { from: '#ff0000', to: '#0000ff' }));
```

This will output the text "Hello, World!" with a smooth red-to-blue gradient.

## Options

The `gradientText` function accepts the following options:

| Option | Type | Description |
| --- | --- | --- |
| `from` | string | The starting color of the gradient (hex, rgb, or named color) |
| `to` | string | The ending color of the gradient (hex, rgb, or named color) |


## Contributing

If you find any issues or have suggestions for improvement, feel free to open a new issue or submit a pull request. 
## Note

- This project is just for my personal usage, if you want to support me you can give it a star on github
- If you want something to add or fix you can contact me on twitter (@ddosntfcion)