interface IGameState {
    player1Name: string;
    player2Name: string;
    gameId: number;
}

const initState: IGameState = {
    player1Name: '',
    player2Name: '',
    gameId: -1
};

export { initState, IGameState };