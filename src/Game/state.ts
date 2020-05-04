export interface IGameState {
    player1Name: string;
    player2Name: string;
    gameId: number;
}

export const gameState: IGameState = {
    player1Name: '',
    player2Name: '',
    gameId: -1
};