import { useParams } from 'react-router-dom';
import GameList from "../model/GameList";

interface PropsRoute {
    gameId?: string | undefined;
}

export default function GamePage() {

    let { gameId } = useParams<PropsRoute>();
    console.log("GamePage displaying game: " + gameId);

    let game = GameList.find(g => g.name === gameId);

    return (
        <main>
            <h1>Game Page!</h1>
            <p>Setting up a game of {gameId}</p>
            <p>Ok, remember that this game is called {game?.name} and has description: {game?.description}</p>
            <br></br>
        </main>
    );
}