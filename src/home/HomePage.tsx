import { Link } from "react-router-dom";
import GameOverview from "../game/GameOverview";
import GameList from "../model/GameList";

export default function HomePage() {

    return (
        <main>
            <h1>Choose a game:</h1>
            <div className="gamelist">
                {
                GameList.map(game => {
                    return (
                        <Link to={`/games/${game.name}`} key={game.name}>
                            <GameOverview {...game}></GameOverview>
                        </Link>
                    )
                })
                }
            </div>
            <br></br>
        </main>
    );
}