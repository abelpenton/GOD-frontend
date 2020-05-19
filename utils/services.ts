import axios from 'axios';
import * as config from '@utils/config';

export const roundService = () => {
    const createRound = async (gameId: number, move: number) => {
        return await axios.post(`${config.GOD_API}/game/NewRound`, {
            'Move': move,
            'GameId': gameId
        }, config.options);
    };

    const updateRound = async (roundId: number, lastMove: number) => {
        return await axios.put(`${config.GOD_API}/game/UpdateRound/${roundId}`, { lastMove }, config.options);
    };

    return {
        post: createRound,
        put: updateRound
    };
};

export const gameService = () => {
    const createGame = async (player1: string, player2: string) => {
        return await axios.post(`${config.GOD_API}/game/NewGame`, {
            'Player1': player1,
            'Player2': player2
        }, config.options);
    };

    const getPlayer = async (playerNumber: number) => {
        return await axios.get(
            `${config.GOD_API}/game/GetPlayer/${playerNumber}`,
            config.options
        );
    };
    return {
        post: createGame,
        get: getPlayer
    };
};