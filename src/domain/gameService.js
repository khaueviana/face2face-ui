export default class GameService {

    constructor(resourceService) {
        this._resource = resourceService;
    }

    getQuestions() {
        var endpoint = this._resource('games/questions');
        return endpoint.get().then(response => response.json(), error => { throw error });
    };

    sendQuestion(gameId, question) {
        var resource = `games/${gameId}/questions/${question.id}`;
        var service = this._resource(resource);
        return service.get().then(response => response.json(), error => { throw error });
    };

    startGame() {
        var resource = this._resource('games/start');
        return resource.save().then(response => response.json(), error => { throw error });
    };


    getGame(gameId) {
        var resource = this._resource(`games/${gameId}`);
        return resource.get().then(response => response.json(), error => { throw error });
    };

    flipCard(characterId) {
        const gameId = localStorage.getItem("gameId");
        const resource = this._resource('games/flip');
        const request = { gameId, characterId };

        return resource.save(request).then(response => response.json(), error => { throw error });
    };

    sendTipOff(characterId) {
        const gameId = localStorage.getItem("gameId");
        const resource = this._resource('games/tipoff');
        const request = { gameId, characterId };

        return resource.save(request).then(response => response.json(), error => { throw error });
    };

    endGame(gameId) {
        const resource = this._resource('games/end');
        const request = { gameId };

        return resource.save(request).then(response => response.json(), error => { throw error });
    }
}