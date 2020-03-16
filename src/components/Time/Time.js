import React from 'react';
import 'date-fns'
import {KeyboardTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import clsx from 'clsx'

const theme = createMuiTheme({
    palette:{
        primary: {
            main: '#8C030E'
        }
    }
})

const styles = {
    root: {
        background: '#8C030E',
        color: 'white',
        position: 'relative',
        top:'-15px'
    },
    MuiInput:{
        color: 'white',
    }
}

const Time = (props) =>{
    const {classes, className, ...other} = props;
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ThemeProvider theme={theme}>
                <div>
                <p>Choose time for workout:</p>
                <KeyboardTimePicker
                    className={clsx(classes.root, classes.MuiInput)} {...other}
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    format="h:mm a"
                    value={props.value}
                    onChange={props.whenChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
                </div>
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    )
}


export default withStyles(styles)(Time);