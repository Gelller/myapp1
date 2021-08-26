import Checkbox from '@material-ui/core/Checkbox';
import React, { checked, setChecked } from 'react';
import { checkbox } from '../Chat/chatSlice'
import { useDispatch, useSelector } from 'react-redux'


const Profile = (props) => {
    const { status } = useSelector((state) => state.chat);
    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        dispatch(checkbox(event.target.checked))
        setChecked(status);
    };

    return <Checkbox
        onChange={handleChange}
        defaultChecked={status}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
    />

}
export default Profile