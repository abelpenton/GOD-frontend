import { useContext, useEffect } from 'react';
import axios from 'axios';
import { RoundContext } from '@app/Round/context';
import * as ACTIONS from '@app/Round/redux/actions';
import * as config from '@utils/config';

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