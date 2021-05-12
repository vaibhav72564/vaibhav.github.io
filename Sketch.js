var angle;
var v1n;
var v2n;
var rx;
var ry;
var r = 100;
var v1;
var v2;
function setup(){
  createCanvas(340,340);
  angleMode(DEGREES)
  angle = createSlider(0,180,90,1);
  
  v1n = createSlider(1,100,10,1)
  v2n = createSlider(1,100,10,1)
  
}
function draw(){
  background(51);
  translate(width/2 , height/2);
  fill(0,170,120)
  text('Angle : '+angle.value()+"°",-160,-150)
  
  stroke(0,100,200)
  line(0,0,100,0);
  fill(255)
  text(v1+'N' , 110,5);
  
  
  v1 = v1n.value()
  v2 = v2n.value()
  
  var x = cos(angle.value())*r
  var y = -sin(angle.value())*r

  var tanalpha = v2*sin(angle.value())/(v1+v2*cos(angle.value()))
  var theta = atan(tanalpha)
  rx = cos(theta)*r
  ry = sin(theta)*r*-1
  
  line(0,0,x,y);
  text(v2+'N' , x+10 , y+10);
  
  
  //resultant
  text(magnitude(angle.value()) , rx-10,ry-10);
  
  var col = map(magnitude(angle.value()) , 0 , v1+v2 , 0,255);
  var size = map(magnitude(angle.value()) , 0,v1+v2 , 5,15)
  fill(col);
  ellipse(rx,ry,size);
  stroke(255,255,170);
  line(0,0,rx,ry);
  

  
}

function magnitude(angle){
 
 var result = (v1)**2+(v2)**2+2*(v1*v2)*cos(angle)
 
 return floor(sqrt(result));
 
}
