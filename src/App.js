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

    return (<Router key='rout'>
        <AppBar />
        <Switch>
            <Router path="/profile" key='rout1'>
                <Profile />
            </Router>
            <Router path="/chat" key='rout2'>
                <Chat />
            </Router>
            <Router path="/playground" key='rout3' >
                <PlayGround />
            </Router>

            <Router path="/" key='rout4'>
                <Home />
            </Router>
        </Switch>
    </Router>)

}

export default App