class Coin{
  constructor(x,y){
    this.coin = createSprite(x,y,30,30)
    this.img = loadImage("c1.png")
    this.coingroup = new Group()
    this.coin.addAnimation("c",this.img)
    this.coin.scale = 0.014
  }
  touching(){
    this.coingroup.add(this.coin)
    if(ball.isTouching(this.coingroup)){
      coinum = coinum + 1
      this.coingroup[0].destroy()
    }
  }
}