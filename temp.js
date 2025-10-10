
class Err{
    data = 10
}

class BadError extends Err{
    constructor(msg){
        super()
        this.message = msg
    }
    logger(){
        console.log("Value= ", this.message)
    }
}

const baderror = new BadError("i_am_error")
baderror.logger()
