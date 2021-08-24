import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Chat from "./Chat";
import PlayGround from "./Playground";
import Home from './Home'
import AppBar from "./AppBar";
import Profile from './Profile';


const App = () => {

    return (<Router>
        <AppBar />
        <Switch>
            <Router path="/profile">
                <Profile />
            </Router>
            <Router path="/chat">
                <Chat />
            </Router>
            <Router path="/playground">
                <PlayGround />
            </Router>

            <Router path="/">
                <Home />
            </Router>
        </Switch>
    </Router>)

}

export default App