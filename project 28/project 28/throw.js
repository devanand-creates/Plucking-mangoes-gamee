class Throw{

constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.01,
        length:10
    }
    this.pointB=pointB;
    this.throw=constraint.create(options);
    world.add(world,this.throw);
}
fly(){
this.throw.bodyA=null;
}
launch(bodyA=bodyA);
}

display()
{

}

