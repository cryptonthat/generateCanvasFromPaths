//Generate Canvas From Paths

//Imports
const { createCanvas, loadImage, getContext } = require(`canvas`);

const generateCanvasFromPaths = (canvas,paths) => {

  generate(paths,canvas,0)

}

//generate: a multi-functional canvas drawer by layers
//default: parameter: filepath/url  output: draws image to full size of canvas
const generate = async (paths, canvas, counter) => {

    if (canvas) {
    const context = canvas.getContext("2d");
  

    if (counter<paths.length) {

        if (paths[counter]==="img") {

          //settings: pathfile, x, y, width, height
          var settings = paths[counter+1].split(" ")
          let img = new Image()
          img.src = settings[0]
          img.onload = () => {
            context.drawImage(img,settings[3],settings[4],settings[1],settings[2])
            console.log("loaded layer"+settings[0])
            var x = counter+2
            generate(paths, canvas, x)
          }

        } else {

          let img = new Image()
          img.src = paths[counter]
          img.onload = () => {
            context.drawImage(img,0,0,canvas.width,canvas.height)
            console.log("loaded layer"+paths[counter])
            var x = counter+1
            generate(paths, canvas, x)
          }
        }

    } else {

      console.log("Canvas Generated")

    }
  }

}

module.exports = generateCanvasFromPaths
