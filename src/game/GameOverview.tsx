import Game from "../model/Game";

export default function GameOverview(game: Game) {
    return (
        <div className="box">
            <h2 style={{ backgroundImage: `url(${game.image})` }}>
                {game.name}
            </h2>
            <p>{game.description}</p>
        </div>
    )
}