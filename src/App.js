import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomRoute from "./util/CustomRoute";
import Chat from "./Chat";
import Playground from "./Playground";
import Dog from "./Dog";
import Home from "./Home";
import Signup from "./Auth/Singup";
import Login from "./Auth/Login";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/compat";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        width: "100vw",
        height: "100vh",
        display: "flex",
    },
}));

export const firebaseConfig = {
    apiKey: "AIzaSyAGzzTptYi5WoqzrqyUsMkDo9Saib4QM4Y",
    authDomain: "myapp1-2b4d3.firebaseapp.com",
    databaseURL: "https://myapp1-2b4d3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myapp1-2b4d3",
    storageBucket: "myapp1-2b4d3.appspot.com",
    messagingSenderId: "414188414927",
    appId: "1:414188414927:web:d893652fd338d967f014ba"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

const App = () => {
    const classes = useStyles();

    const [user, loading] = useAuthState(firebase.auth());

    if (loading) {
        return <div>Loading</div>;
    }
    return (
        <Router>
            <div className={classes.mainWrapper}>
                {/* <AppBar /> */}

                <Switch>
                    <CustomRoute secured path="/chat/:id">
                        <Chat />
                    </CustomRoute>

                    <CustomRoute path="/playground" secured withAppBar={true}>
                        <Playground myProps={1} />
                    </CustomRoute>

                    <Route path="/dog" secured withAppBar={true}>
                        <Dog />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/signup">
                        <Signup />
                    </Route>

                    <Route path="/" withAppBar={false}>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;