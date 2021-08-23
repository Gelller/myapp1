
import { blue } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: blue[500],

        },
        secondary: {
            // This is green.A700 as hex.
            main: '#115293',
        },
        listChats: {
            // This is green.A700 as hex.
            main: '#64b5f6',
        },

    },
});