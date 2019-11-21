class User{
    constructor(x, y, w, h, c){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c
        this.speed = 5
    }

    walk = (event) =>{
        if(event.key === 'ArrowUp'){
            if(this.y - 1 <= 0){
                this.y = this.y
            }else{
                this.y -= this.speed
            }
        }
        if(event.key === 'ArrowDown'){
            if(this.y + this.h >= game.canvas.height){
                this.y = this.y
            }else{
                this.y += this.speed
            }
        }
        if(event.key === 'ArrowLeft'){
            if(this.x + this.w >= game.canvas.width){
                this.x = this.x
            }else{
                this.x -= this.speed
            }
        }
        if(event.key === 'ArrowRight'){
            if(this.x - 1 <= 0){
                this.x = this.x
            }else{
                this.x += this.speed
            }
        }
    }

    is_colliding(enemy){
        if(this.x == enemy.x - enemy.w){
            //console.log('collide')
        }
    }
}