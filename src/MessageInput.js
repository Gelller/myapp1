import { useState } from 'react';
import PropsTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: "0px 10px",
    },
    input: {
        margin: "0px 10px",
        width: "70%",
    },

    inputWrapper: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.secondary.main
    },

}))

const MessageInput = ({ onSendMessage }) => {

    const sendAndRemoveInput = () => {
        const trimmedMessageText = inputMessage.trim()

        if (trimmedMessageText !== '') {
            onSendMessage(trimmedMessageText)
            setInputMessage('')
        }

    }
    const classes = useStyles()
    const [inputMessage, setInputMessage] = useState("");
    return (
        <div className={classes.inputWrapper} color="primary">
            <TextField color="black" label="Введите сообщение" variant="filled"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        sendAndRemoveInput()
                    }
                }}
                // multiline
                classes={{
                    root: classes.input,
                }}
            />
            <Button variant="contained" color="primary"
                onClick={sendAndRemoveInput}
                classes={{
                    root: classes.button,
                }}
            >Отправить</Button>
        </div>
    )
}

MessageInput.prototype = {
    onSendMessage: PropsTypes.func.isRequired,
};

export default MessageInput;