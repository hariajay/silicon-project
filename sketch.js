const Engine = Matter.Engine
const world = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var gameState = 1
var dis=0
var bg1,bg2
var eng,wld
var red,b1,volley,b2,foot,b3
var ground
var stand
var hanger
var star
var ting
var blow,boom,timer,time
var nail,rec,type
var start,button,green
var carbon,magnet,shield
var stick,stick,frame
var score=0
var arrow
var light,bc,lightning
var collide,water,sharp
var g1,s1,s2,s3
var s3,stand2,stick1,st4,lava
var weapon,wimg,chain,grass,st1
var coinum=0,l1,l2,mins=0,gems=0
var fire,fire1,f=[]
var p=1,h1,h2,h3
var s1=[],s2=[],s3=[],s4=[],s5=[],s6=[],s7=[]
var k1,award,cs=[]

function preload(){
  bg1 = loadImage("brown.jpg")
  bg2 = loadImage("hills.png")
  bg3 = loadImage("mount.png")
  b1 = loadImage("red.png")
  b2 = loadImage("volley.png")
  b3 = loadImage("football.png")
  l1 = loadImage("l1.png")
  l2 = loadImage("l2.png")
  award = loadImage("award.png")
  over = loadImage("gameover.png")
  frame = loadImage("frame.png")
  arrow = loadImage("arrow.png")
  fire = loadImage("fireball.png")
  st1 = loadImage("stand1.png")
  st2 = loadImage("stand2.png")
  st3 = loadImage("stand3.png")
  st4 = loadImage("st4.png")
  lava = loadImage("lava.png")
  wimg = loadImage("weapon.png")
  shield = loadImage("shield.png")
  water = loadImage("water.png")
  lightning = loadImage("light.png")
  carbon = loadImage("diamond.png")
  timer = loadImage("clock.png")
  sh1 = loadImage("blade.png")
  restart = loadImage("restart.png")
  ins = loadImage("ins.png")
  intro = loadImage("intro.png")
  story = loadImage("story.png")
  tools = loadImage("tools.png")
  stick = loadImage("stick1.png")
  stick2 = loadImage("stick2.png")
  star = loadImage("c1.png")
  rec = loadImage("rect.png")
  ca = loadAnimation("c1.png","c2.png","c3.png","c4.png","c5.png","c6.png")
}
function setup(){
    createCanvas(530,460)

    eng = Engine.create()
    wld = eng.world
    red = Bodies.circle(20,270,28,{restitution:0.3,friction:0})
    world.add(wld,red)
    collide = Bodies.rectangle(-30,170,10,460,{isStatic:true})
    world.add(wld,collide)
    weapon = Bodies.circle(3770,0,30,{density:10})
    world.add(wld,weapon)
    ball = createSprite(red.position.x,red.position.y,56,56)
    ball.visible = false
    for(var i=300; i<560; i+=30){
      s1.push(new Sharp(i,445,sh1))
    }
    for(var i=1115; i<1500; i+=30){
      s2.push(new Sharp(i,445,sh1))
    }
    for(var i=2235; i<2900; i+=30){
      s3.push(new Sharp(i,445,sh1))
    }
    for(var i=5260; i<5760; i+=30){
      s4.push(new Sharp(i,445,sh1))
    }
    coins(155,305,380)
    coins(725,875,250)
    coins(825,975,380)
    coins(1675,1825,250)
    coins(1675,1825,380)
    coins(1915,2065,150)
    coins(3125,3275,250)
    coins(3225,3375,380)
    coins(3825,3975,270)
    coins(4675,4825,150)
    coins(4875,5025,250)
    coins(4825,4775,380)
    coins(5800,5950,380)
    g1 = new Ground(185,400)
    g2 = new Ground(832,530)
    g3 = new Ground(1912,825)
    g4 = new Ground(4070,2365)
    g5 = new Ground(5888,270)
    g6 = new Ground(7095,1530)
  
    std1 = new Stand(800,300,300,44,st1)
    std2 = new Stand(1300,300,30,40,st3)
    std3 = new Stand(1750,300,300,44,st1)
    std4 = new Stand(2000,190,300,44,st1)
    std5 = new Stand(3200,300,300,44,st1)
    std6 = new Stand(4750,190,300,44,st1)
    std7 = new Stand(4950,300,300,44,st1)
    std8 = new Stand(5500,300,30,40,st3)
    sk1 = new Stand(2375,300,180,10,stick)
    sk2 = new Stand(2560,250,180,10,stick)
    sk3 = new Stand(2740,200,180,10,stick)

    lightner = createSprite(3600,200,30,420)
    lightner.visible = false
    k1 = createSprite(6600,523,20,200)
    k2 = createSprite(6650,277,20,200)
    k3 = createSprite(6700,523,20,200)
    h1 = createSprite(2465,300,150,10)
    h2 = createSprite(2620,250,150,10)
    h3 = createSprite(2775,200,150,10)
    re = createSprite(56,-298,130,40)
    re.addImage("res",restart)
    re.scale = 0.6
    re.setCollider("rectangle",0,0,200,70)

    h1.visible = false
    h2.visible = false
    h3.visible = false

    k1.shapeColor = "brown"
    k2.shapeColor = "brown"
    k3.shapeColor = "brown"
    bl1 = new Sharp(k1.x,45,sh1)
    bl2 = new Sharp(k2.x,45,sh1)
    bl3 = new Sharp(k3.x,45,sh1)

    chain1 = new Chain(weapon,{x:4100,y:15})
  }
function draw(){
  background(0)
  Engine.update(eng)

  if(gameState == 1){
   Engine.update(eng)
   imageMode(CENTER)

   image(bg2,3850,180,8000,610)
   image(rec,camera.position.x-177,30,140,45)
   image(rec,camera.position.x+185,30,115,40)
   image(carbon,camera.position.x-157,30,28,24)
   image(arrow,camera.position.x+153,30,30,10)
   image(water,425,435,275,72)
   image(water,1300,435,400,72)
   image(water,2567,435,690,72)
   image(water,5500,432,500,65)
   image(lava,6175,435,300,55)
   image(lightning,3600,200,50,420)
   image(star,camera.position.x-223,30,28,28)
   image(wimg,weapon.position.x,weapon.position.y,70,70)
   image(b1,red.position.x,red.position.y,54,54)

   ball.x = red.position.x
   ball.y = red.position.y
   dis=Math.round(red.position.x/50)
   
   bl1.sprite.position.y=k1.y-123
   bl2.sprite.position.y=k2.y-123
   bl3.sprite.position.y=k3.y-123
   h1.y = sk1.body.position.y
   h2.y = sk2.body.position.y
   h3.y = sk3.body.position.y

   if(k1.y<430 && k2.y<430 && k3.y<430){
     k1.velocityY+=3
     k2.velocityY+=3
     k3.velocityY+=3
   }
   if(k1.y>500 && k2.y>500 && k3.y>500){
     k1.velocityY=-3
     k2.velocityY=-3
     k3.velocityY=-3
   }
  re.x = camera.position.x-10
  textSize(22)
  fill(0)
  text(gems,camera.position.x-138,38)
  text(coinum,camera.position.x-203,38)
  text(dis+" m",camera.position.x+172,38)
  camera.position.x = red.position.x+130
  camera.position.y = 230

  if(weapon.position.x<3900){
    Matter.Body.applyForce(weapon,weapon.position,{x:0.4,y:0})
  }
  if(weapon.position.x>4300){
    Matter.Body.applyForce(weapon,weapon.position,{x:-0.4,y:0})
  }
  chain1.display()
  sk1.display()
  sk2.display()
  sk3.display()

  std1.display()
  std2.display()
  std3.display()
  std4.display()
  std5.display()
  std6.display()
  std7.display()
  std8.display()

  if(keyDown("space")){
    Matter.Body.applyForce(red,red.position,{x:0,y:-0.025})
  }
  if(keyDown("left")){
   Matter.Body.applyForce(red,red.position,{x:-0.0012,y:0})
  }
  if(keyDown("right")){
    Matter.Body.applyForce(red,red.position,{x:0.0012,y:0})
  }
  if(ball.isTouching(h1)){
    Matter.Body.setStatic(sk1.body,false)
  }
  if(ball.isTouching(h2)){
    Matter.Body.setStatic(sk2.body,false)
  }
  if(ball.isTouching(h3)){
    Matter.Body.setStatic(sk3.body,false)
  }
  for(var i=0; i<cs.length; i++){
    cs[i].touching()
  }
}
  if(red.position.y>400 || ball.isTouching(lightner)){
    gameState=2
  }
  drawSprites()
  if(gameState == 2){
    Matter.Body.setStatic(red,true)
    imageMode(CENTER)
    image(bg2,3850,180,8000,610)
    re.y = 298
    image(bg1,camera.position.x-5,200,320,250)
    image(restart,camera.position.x-10,298,130,80)
    image(award,camera.position.x-5,165,40,40)
    image(over,camera.position.x-5,125,350,250)
    textSize(22)
    strokeWeight(0.2)
    fill(0)
    text("Coins: "+coinum,camera.position.x-105,220)
    text("Gems: " +gems,camera.position.x+20,220)
    text("Distance: " +dis,camera.position.x-75,255)

  if(mousePressedOver(re)){
    gameState=1
    Matter.Body.setStatic(red,false)
    red.position.x = 50
    red.position.y = 270
   }
  }
}
function coins(x1,x2,y){
  for(var a=x1; a<x2; a+=50){
    cs.push(new Coin(a,y))
   }
  }