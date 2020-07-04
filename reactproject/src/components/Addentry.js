import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Add } from '@material-ui/icons';
import { FormControlLabel, FormLabel, FormControl, Radio, RadioGroup, InputLabel, Input, Select } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    formLabel: {
        color: theme.palette.common.black,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        margin: theme.spacing(2),
        alignContent: 'center',
    },
}));


export default function Addentry() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);

    };

    const handleStatus = (event) => {
        setStatus(Number(event.target.value) || '');
    }


    return (
        <div>
            <Button variant="contained"
                color="default"
                onClick={handleClickOpen}
                startIcon={<Add />}>
                New Entry</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="new-entry-form">
                <DialogTitle id="new-entry-form">New entry</DialogTitle>
                <DialogContent>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">
                                Add a New Entry</Typography>
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            autoComplete="id"
                                            name="id"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="id"
                                            label="ID"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="date"
                                            type="date"
                                            name="date"
                                            autoComplete="date"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="name"
                                            label="Name"
                                            type="text"
                                            id="name"
                                        // autoComplete="current-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend" >Options</FormLabel>
                                            <RadioGroup aria-label="option" name="options1" value={value} onChange={handleChange}>
                                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                                <FormControlLabel value="no" control={<Radio />} label="No" /></RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <form className={classes.container}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="status">Status</InputLabel>
                                                <Select
                                                    native
                                                    value={status}
                                                    onChange={handleStatus}
                                                    input={<Input id="status" />}>
                                                    <option aria-label="Select Status" value="" />
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </Select>
                                            </FormControl>
                                        </form>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </Container>
                </DialogContent>
                <DialogActions>
                    <Grid item xs={6} sm={3}>
                        <Button onClick={handleClose} type="cancel"
                            id="cancelled"
                            variant="contained"
                            color="primary"
                            className={classes.button}>
                            Cancel </Button>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Button onClick={handleClose} type="submit"
                            id="submitted"
                            variant="contained"
                            color="primary"
                            className={classes.button}>
                            Submit</Button></Grid>

                </DialogActions>
            </Dialog>
        </div>
    );
}
