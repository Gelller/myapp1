import { makeStyles } from '@material-ui/core/styles';
import PropsTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    messageList: {
        width: '100%',
        height: '90%',
        borderBottom: '1px solid black',
    },
    time: {
        float: 'right',
        fontSize: '12px',
        margin: "0px 10px",
        marginTop: '5px'

    },
    inputText: {
        color: '#000080',
        margin: "0px 10px",
    },
}))

const MessageList = ({ messagesArray }) => {

    const classes = useStyles();
    return (
        <div className={classes.messageList}>
            {
                messagesArray.map((message, i) => (<div key={i} className={classes.inputText}> {message.author + ":" + message.text} <div className={classes.time}>{message.time}</div> </div>))
            }

        </div>
    )
}

MessageList.prototype = {
    messagesArray: PropsTypes.array.isRequired,
};
export default MessageList