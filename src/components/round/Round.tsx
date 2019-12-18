import React, {useState, useEffect} from 'react';
const config = require('../../../config');

const getGameId = (): number => {
    const from: number = location.pathname.indexOf('gameId=') + 7;
    const to: number = location.pathname.lastIndexOf('/') + 1;

    // tslint:disable-next-line: radix
    return Number.parseInt(location.pathname.substring(from, to - from + 7));
};

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const Round: React.FC = () => {
    const [playerName, setPlayerName] = useState('');
    const [playerNumber, setPlayerNumber] = useState(1);
    const [gameId] = useState(getGameId());
    const [currentMove, setCurrentMove] = useState(0);
    const [roundId, setRoundId] = useState(0);
    const [endGame, setEndGame] = useState(false);
    const [winnerName, setWinnerName] = useState('');
    const [rounds, setRounds] = useState([]);

    const moves: string[] = ['Rock', 'Papper', 'Scissors'];

    const loadRounds = () => {
        fetch(`${config.GOD_API}/game/GetRoundsGame/${gameId}`, options)
            .then(response => {
                const gameRounds = JSON.stringify(response.json())['Rounds'];
                const roundUpdates = [];
                gameRounds.map(({PlayerRoundWinnerName}, index) => {
                    // tslint:disable-next-line: no-array-mutation
                    roundUpdates.push({
                        roundNumber: index,
                        roundWinner: PlayerRoundWinnerName
                    });
                });
            });
    };

    const getPlayer = () => {
        fetch(`${config.GOD_API}/game/GetPlayer/${playerNumber}`, options)
            .then(response => setPlayerName(JSON.stringify(response.json())['PlayerName']));
    };

    const newRound = () => {
        const postOptions = {
            method: 'POST',
            body: JSON.stringify({
                'Move': currentMove,
                'GameId': gameId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(`${config.GOD_API}/game/NewRound`, postOptions)
            .then(response => {
                setRoundId(JSON.stringify(response.json())['Id']);
                setPlayerNumber(2);
            });
    };

    const completeRound = () => {
        const postOptions = {
            method: 'POST',
            body: JSON.stringify({
                'lastMove': currentMove
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(`${config.GOD_API}/game/UpdateRound/${roundId}`, postOptions)
            .then(response => {
                const game = JSON.stringify(response.json());
                if (game['EndGame']) {
                    setEndGame(true);
                    setWinnerName(game['PlayerGameWinnerName']);
                } else {
                    setPlayerNumber(1);
                }
            });
    };

    const proccessRound = () => {
        if (playerNumber === 1) {
            newRound();
        } else {
            completeRound();
        }
    };

    useEffect(() => {
        getPlayer();
        loadRounds();
    }, [playerNumber]);


    return (
        <div>
            {!endGame && <div>
                <label>Round {rounds.length + 1}</label>
                <br/>
                <br/>
                <label>{playerName}</label>
                <br/>
                <br/>
                <label>Select Move</label>
                <select onChange={e => setCurrentMove(moves.indexOf(e.target.value) + 1)}>
                    {moves.map((value, index) => {
                        // tslint:disable-next-line: no-unused-expression
                    return (<option key={index + 1} value={value}>{value}</option>);
                    })}
                </select>
                <br/>
                <br/>
                <button type='button' onClick={proccessRound}>Ok</button>
            </div>}
        </div>
    );
};

class RoundModel {
    roundNumber: number;
    roundWinner: string;
}

export default Round;