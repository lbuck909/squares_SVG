const {Triangle, Square, Circle} = require("./shapes")

//Triangle Test
describe( 'Triangle', () => {
  test('render correctly', () =>{
    const shape = new Triangle();
    var color =('red')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill="${color}">`);
  });
});
//Square Test
describe( 'Square', () => {
  test('render correctly', () =>{
    const shape = new Square();
    var color =('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="145" y="153" width="150" height="150" fill="${color}`);
  });
});
//Circle Test
describe( 'Circle', () => {
  test('render correctly', () =>{
    const shape = new Square();
    var color =('pink')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="${color}`);
  });
});