var topRight = new Point (20, 0);
var rectSize = new Size (100, 100);
var rect = new Rectangle (topRight, rectSize);
var path = new Path.Rectangle(rect, 200);
path.fillColor = 'orange';

console.log(rect); // { x: 10, y: 20, width: 200, height: 100 }
console.log(rect.point); // { x: 10, y: 20 }
console.log(rect.size); // { width: 200, height: 100 }