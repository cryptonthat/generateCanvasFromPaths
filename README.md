# Generate-Canvas

Generate a JS Canvas from an Array of Layer Filepaths

## Installation

Install generate-canvas

```shell
npm install generate-canvas
```

## Usage

Initialise generate-canvas
```shell
import generateCanvas from 'generate-canvas'
```

Create a canvas variable with your canvas id
```shell
const canvasObj = document.getElementById($ID);
```

Create an array of image filepaths
```shell
paths = ["./image1.png","./image2.png", "https://www.image.com/image1.png"]
```

Run generate-canvas
```shell
generateCanvas(canvasObj, paths)
```


## Options

Generate-canvas draws images at the full canvas size

To draw images of different sizes and at different points you must use the "img" identifier followed by an options string and then the image url

Options string
```shell
"x_value y_value image_width image_height"
```

Example
```shell
const options = `30 30 100 100`
const paths = ["img", options, "./image1.png"]
```
