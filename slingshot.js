class Slingshot {
    constructor (bodya,bodyb)
    {
        var options={
        bodyA: bodya,
        bodyB: bodyb,
        length:10,
        stifness:0.05
        }
    this.chain = Constraint.create(options)
    World.add (world,this.chain);
    }
display(){
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}
}
