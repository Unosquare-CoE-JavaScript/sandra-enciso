/*
FACADE
Provides a simple, easy to understand/user interface over a large and sophisticades body of code.
*/
/*
Facade involves complex susbsystems and we don't really have the time to build anything of sufficient complexity.
*/

/*Store the characters, is an array of characters that you subsequently get to output */
class Buffer extends Array
{
  //How much characters do you want to store in the horizontal and vertical dimension?
  constructor(width=30, height=20) //Default values
  {
    super();
    this.width = width;
    this.height = height;
    this.alloc(width*height);
  }

  write(text, position=0)
  {
    // write to the buffer
  }
}

/*The viewport is designed specifically for presenting a buffer o a part of the buffer */
class Viewport
{
  constructor(buffer=new Buffer()) //Creates a new buffer with the default values
  {
    this.buffer = buffer;
    this.offset = 0; //is where you are actually looking
  }

  // high-level
  append(text, pos)
  {
    this.buffer.write(text, pos + this.offset);
  }

  getCharAt(index) //Get a character from a particular index
  {
    return this.buffer[this.offset + index];
  }
}

/*
Console is a facade for all of those things that we brought to 
Console is a subsystem related to buffers and buffer management
*/
class Console
{
  constructor()
  {
    this.buffer = new Buffer();
    this.currentViewport = new Viewport(
      this.buffer
    );
    this.buffers = [this.buffer];
    this.viewports = [this.currentViewport];
  }

  // high-level
  write(text)
  {
    this.currentViewport.buffer.write(text); //writes to the buffer
  }

  // low-level
  getCharAt(index)
  {
    return this.currentViewport.getCharAt(index);
  }
}

let c = new Console();
c.write('hello');
let ch = c.getCharAt(0);