/*
A virtual proxy is a unique kind of proxy that shows you that you have a resource, even though in reality you might not have it yet.
So it masquerades as a real object while not exactly being real.
*/
class Image
{
  constructor(url)
  {
    this.url = url;
    console.log(`Loading image from ${this.url}`);
  }

  draw() // If you never call draw, you've already wasted computational time on actually loading the image from the remote
  {
    console.log(`Drawing image ${this.url}`);
  }
}

class LazyImage
{
  constructor(url)
  {
    this.url = url;
  }

  /*
  Unless we already have an image, that image equals a new image and specifying the url
  */
  draw()
  {
    if (!this.image)
      this.image = new Image(this.url);
    this.image.draw(); //then draw
  }
}

function drawImage(img)
{
  console.log('About to draw the image');
  img.draw();
  console.log('Done drawing the image');
}

let img = new LazyImage('http://pokemon.com/pikachu.png');
drawImage(img);