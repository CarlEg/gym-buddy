import React from 'react';
import 'date-fns'
import {KeyboardTimePicker,
MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import classes from './Time.modules.css'

const theme = createMuiTheme({
    palette:{
        primary: {
            main: '#8C030E'
        }
    }
})

const Time = (props) =>{
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ThemeProvider theme={theme}>
                <div className={classes}>
                <p>Choose time for workout:</p>
                <KeyboardTimePicker
                    className={classes.TimePicker}
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


export default (Time);