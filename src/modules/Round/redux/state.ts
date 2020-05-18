interface IRoundState {
    currentPlayerName: string;
    currentPlayerNumber: number;
    currentMove: number;
    roundId: number;
    endGame: boolean;
    winnerName: string;
    rounds: any[];
}

const initState: IRoundState = {
    currentPlayerName: '',
    currentPlayerNumber: 1,
    currentMove: 1,
    roundId: 0,
    endGame: false,
    winnerName: '',
    rounds: []
};

export { initState, IRoundState };