class SlingShot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.02,
            length:250
        }
        this.sling = Constraint.create(options)
     World.add(world,this.sling)
    }
    display(){
        strokeWeight(5)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
    }
}
