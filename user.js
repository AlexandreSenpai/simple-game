class User{
    constructor(x, y, w, h, c){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c
        this.gravity = 3
        this.speed = 5
    }

    walk = (event) =>{
        const Action = {
            ArrowUp: () => {
                if(this.y - 1 <= 0){
                    this.y = this.y
                }else{
                    this.y -= this.speed
                }
            },
            ArrowDown: () => {
                if(this.y + this.h >= game.canvas.height){
                    this.y = this.y
                }else{
                    this.y += this.speed
                }
            },
            ArrowLeft: () => {
                if(this.x - 1 <= 0){
                    this.x = this.x
                }else{
                    this.x -= this.speed
                }
            },
            ArrowRight: () => {
                if(this.x + this.w >= game.canvas.width){
                    this.x = this.x
                }else{
                    this.x += this.speed
                }
            }
        }
        var action = Action[event.key]
        if(action){
            action()
        }
    }

    is_colliding(enemy){
        var distance = (x, y) =>{
            let xDis = this.x - x
            let yDis = this.y - y
            return Math.sqrt(Math.pow(xDis, 2) + Math.pow(yDis, 2)) - this.w
        }
        //console.log('distance:', distance(enemy.x, enemy.y))
        if(distance(enemy.x, enemy.y) + 1 < 1){
            this.x -= 2
        }
    }
}