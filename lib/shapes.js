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
    return `<rect x="145" y="153" width="150" height="150" fill="${this.color}">`
  }
}
class Triangle extends Shape {
  render(){
    return `<polygon points= "0,200 300,200 150,0" fill="${this.color}">`
  }
}
class Circle extends Shape {
  render(){
    return `<circle cx="150" cy="100" r="100" fill"${this.color}">`
  }
};

//write a module.export function that will allow shapes to be used across the project
module.exports = {Square, Triangle, Circle}