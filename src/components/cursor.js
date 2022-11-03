import React from 'react'
const lerp = (a, b, n) => (1 - n) * a + n * b;
const isBrowser = typeof window !== "undefined"

class Cursor extends React.Component{
  constructor(props) {
    // config
    super();
    this.target = { x: -0.5, y: -0.5 }; // mouse position
    this.cursor = { x: -0.5, y: -0.5 }; // cursor position
    this.speed = 0.2;
    this.init();
  }
  bindAll() {
    ["onMouseMove", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
    ["onMouseOut", "render"].forEach((fn) => (this[fn] = this[fn].bind(this)));
  }
  onMouseMove(e) {
    //get normalized mouse coordinates [0, 1]
    if (isBrowser) {
        this.target.x = e.clientX / window.innerWidth;
        this.target.y = e.clientY / window.innerHeight;
    }
    // trigger loop if no loop is active
    if (!this.raf) this.raf = requestAnimationFrame(this.render);
    console.log(this.target.x);
  
    document.getElementById("cursor").style.display = 'block';
    
  }
  onMouseOut(){
    document.getElementById("cursor").style.display = 'none';
  }
  render() {
    if (typeof window === `undefined`) {
        return(<></>);
    }
    //calculate lerped values
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
    document.documentElement.style.setProperty("--cursor-x", this.cursor.x);
    document.documentElement.style.setProperty("--cursor-y", this.cursor.y);
    //cancel loop if mouse stops moving
    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
      Math.pow(this.target.y - this.cursor.y, 2)
    );
    if (delta < 0.001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }
    //or continue looping if mouse is moving
    this.raf = requestAnimationFrame(this.render);
  }
  init() {
    this.bindAll();
    if (isBrowser) {
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseout", this.onMouseOut);
    this.raf = requestAnimationFrame(this.render);
    }
    
  }
}

export default Cursor;
