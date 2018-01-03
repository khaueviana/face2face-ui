export default class GameService{
    
    constructor(resourceService){
        this._resource = resourceService;
    }

    getQuestions(){
        var endpoint = this._resource('games/questions');
        return endpoint.get().then(response => response.json(), error =>{throw error}); 
    };

    sendQuestion(question){
        var gameId = '5a3c17ec0863ed309867d640';
        var player = 'playerOne';
        var resource = `games/${gameId}/questions/${player}/${question.id}`;
        var service = this._resource(resource);
        return service.get().then(response => response.json(), error => {throw error});
    };

    startGame(){
        var resource = this._resource('games/start');
        return resource.save().then(response => response.json(), error => {throw error});
    };


    getGame(gameId){
        var resource = this._resource(`games/${gameId}`);
        return resource.get().then(response => response.json(), error => {throw error});
    };
}

