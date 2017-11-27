export default class Emmit{
    constructor(log = {}){
        this.log = log;
    }
    on(type,callback){
        (
            this.log[type] = this.log[type] || []
        ).push(callback);
        return ()=>{
            this.log[type].splice(
                this.log[type].indexOf>>>0,1
            )
        }
    }
    emit(type,argument){
        (
            this.log[type] || []
        ).forEach((log)=>log(argument))
        if(type !== '*') this.emit('*',argument);
    }
}