class Plinko{
    constructor(x, y){
        var options = {
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);

        this.radius = 10;
    }

    display(){
        var pos = this.body.position;

        fill(255);
        // noStroke();
        // rectMode(CENTER);
        circle(pos.x, pos.y, 20);
    }
}