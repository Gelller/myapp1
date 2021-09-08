import { MyDataContext } from '../index'
import { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

}))


const PlayGround = (props) => {
    const classes = useStyles()
    const { messagesArray } = useSelector((state) => state.chat);

    const dispatch = useDispatch()

    return (
        <>

            <div>Array Message :{messagesArray.map((message, i) => (<div key={i} > {message.author + ":" + message.text} <div className={classes.time}>{message.time}</div> </div>))}</div>
        </>
    )


}

const withAuHoc = function (Component) {
    return props => {
        console.log('props', props)

        return <Component userInfo={{ userId: 1, userName: 'qwer' }} {...props} />
    }

}



export default withAuHoc(PlayGround)