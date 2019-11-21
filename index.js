class Game{
    constructor(){
        this.canvas = document.getElementById('display')
        this.ctx = this.canvas.getContext('2d')
        this.entities = []
        this.observers = {}
        this.player = new User(10, 10, 30, 30, '#ff0000')
        this.spawn_entities()
        this.movement = addEventListener('keydown', this.notify_all)
        this.register_observers('entities', this.player.walk)
        this.update_interval = setInterval(this.update_game, 20)
    }

    register_observers(classe, observer){
        if(this.observers[classe]){
            this.observers[classe].push(observer)
        }else{
            this.observers[classe] = []
            this.observers[classe].push(observer)
        }
    }

    notify_all = (event) =>{
        console.log('notifying', this.observers.entities.length)
        for(const observer of this.observers.entities){
            observer(event)
        }
    }

    create(entity){
        this.ctx.fillStyle = entity.c
        this.ctx.fillRect(entity.x, entity.y, entity.w, entity.h)
    }

    update_game = () =>{
        this.ctx.clearRect(0, 0, 500, 500)
        this.update()
    }

    spawn_entities(){       
        for(var i = 0; i < 10; i++){
            var color = Math.ceil(Math.random()*5)
            this.entities.push(new User(Math.floor(Math.random()*300), Math.floor(Math.random()*400), 30, 30, '#'+color+color+color+color+color+color))
        }
    }

    update(){
        this.create(this.player)
        for(const entity of this.entities){
            this.create(entity)
            this.player.is_colliding(entity)
        }
    }
}

game = new Game()
