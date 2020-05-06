import { useContext, useEffect } from 'react';
import { RoundContext } from './context';
import * as ACTIONS from './redux/actions';
import axios from 'axios';
const config = require('../../config');

export const useRound = () => useContext(RoundContext);

export const useCurrentPlayer = () => {
    const { state: { currentPlayerNumber }, dispatch } = useRound();

    useEffect(() => {
        axios.get(
            `${config.GOD_API}/game/GetPlayer/${currentPlayerNumber}`,
            config.options
        ).then(response => {
            console.log(response.data.playerName);
            dispatch(ACTIONS.set_current_player_name(response.data.playerName));
        });
    }, [currentPlayerNumber]);

    return currentPlayerNumber;
};

export const usePlayerName = () => useRound().state.currentPlayerName;

export const useWinnerName = () => useRound().state.winnerName;