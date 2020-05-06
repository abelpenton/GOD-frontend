
export interface IGameState {
    player1Name: string;
    player2Name: string;
    gameId: number;
}

export interface IRoundState {
    currentPlayerName: string;
    currentPlayerNumber: number;
    currentMove: number;
    roundId: number;
    endGame: boolean;
    winnerName: string;
    rounds: any[];
}

export interface IContextProps {
    children: React.ReactNode;
}

export interface IAction {
    type: string;
    payload: any;
}