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
    };

    sendQuestion(question){
        var gameId = '5a3c17ec0863ed309867d640';
        var player = 'playerOne';
        var resource = `games/${gameId}/questions/${player}/${question.id}`;
        var service = this._resource(resource);

        return service.get(response => response.json(), error => 
        { 
            console.log(error);
            throw new Error('Ocorreu algo errado ao enviar a questão.');
        });
    };
}

