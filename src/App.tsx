import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./house.svg";
import "./App.css";
import HomePage from "./home/HomePage";
import GamePage from "./game/GamePage";

export default function App() {

	return (
		<div className="App">
			<header>
				<img src={logo} className="header-logo" alt="PunHouse" /> 
				<span>PunHouse</span>
			</header>

			<Router>
				<Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/games/:gameId" component={GamePage} />
                </Switch>
            </Router>

			<footer>
				<span>
				<a className="App-link" href="https://pun.cool" target="_blank" rel="noopener noreferrer">
					Watch some pun competition videos!
				</a>
				</span>
			</footer>
		</div>
	);
}
