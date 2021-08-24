import { AppBar as MaterialUiAppBar } from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: '15px',
        color: theme.palette.background.default,
        textDecoration: 'none',
    },
    appBar: {
        marginBottom: '50px',
        position: 'static',
    },
    acitiveLink: {
        textDecoration: 'auto',
        color: 'red',
    },
}));

const routes = [
    { pathTitle: 'Home', path: '/home' },
    { pathTitle: 'Chat', path: '/chat' },
    { pathTitle: 'Playground', path: '/playground' },
    { pathTitle: 'Profile', path: '/profile' }
]

const AppBar = () => {

    const classes = useStyles();
    const location = useLocation();



    return (<MaterialUiAppBar className={classes.appBar}>
        <Toolbar>
            {routes.map((route) => (
                <Link
                    key={route.path}
                    to={route.path}
                    className={`${classes.link} ${route.path === location.pathname ? classes.acitiveLink : ""}`}>
                    <Typography variant='h6'> {route.pathTitle} </Typography>
                </Link>

            ))
            }




        </Toolbar >

    </MaterialUiAppBar >);
}
export default AppBar