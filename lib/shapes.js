// need a constructor to define shapes and colors
class Shape {
constructor(){
  this.color= ''
}
setColor(color){
  this.color=(color);
}
}
// use render method to allow user input of color with diff shapes
class Square extends Shape {
  render(){
    return `<rect x="90" height="250" width="250" fill="${this.color}">`
  }
}
class Triangle extends Shape {
  render(){
    return `< polygon height="100%" width="100%" points= "0,200 300,200 150,0" fill="${this.color}">`
  }
}
class Circle extends Shape {
  render(){
    return `<circle cx="50%" cy="50" r="100" height="100%" width="100" fill"${this.color}">`
  }
};

//write a module.export function that will allow shapes to be used across the project
module.exports = {Square, Triangle, Circle}