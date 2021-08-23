import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

var structureChats = {
    id: "0",
    name: "user",
};

var user = Object.create(structureChats)
user.id = 0
user.name = "user"

var robot = Object.create(structureChats)
robot.id = 1
robot.name = "robot"

const mas = new Array();

mas.push(user)
mas.push(robot)

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.listChats.main
    },
}));

const Chats = () => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>

            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                {
                    mas.map((mas, i) => (
                        <ListItem
                            button
                            selected={selectedIndex === mas.id}
                            onClick={(event) => handleListItemClick(event, mas.id)}
                        >
                            <ListItemText primary={mas.name} />
                        </ListItem>

                    ))
                }
            </List>
        </div>
    );
}

export default Chats;


