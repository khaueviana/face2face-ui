export default class GameService{
    
    constructor(resourceService){
        this._resource = resourceService;
    }

    getQuestions(){
        var endpoint = this._resource('games/questions')
        return endpoint.get()
            .then(response => response.json(), error =>{
                console.log(error);
                throw new Error("Não foi possível obter as questões do jogo.")
            }); 
    }
}

