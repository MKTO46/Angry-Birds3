class Bird extends BaseClass {
  constructor(x,y){
    //transfers all the properties of the basecalss to this class
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //updating the baseclass display
    super.display();
  }
}
