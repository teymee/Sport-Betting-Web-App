import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FinalComponent from "./component/FinalComponent";
import Nav from "./component/Nav/Nav";

function App() {
	return (
		<div className="total">
			<Nav />

			<Router>
				<Switch>
					<Route path="/" exact component={FinalComponent}/>
					<Route path="/:name" exact component={FinalComponent} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
