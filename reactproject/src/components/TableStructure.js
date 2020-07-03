import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Paper, TextField, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@material-ui/core';
import { MenuItem, FormControl, Select } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Add, Create } from '@material-ui/icons';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3f50b5',
            light: '#daf7a6',
        },
        secondary: {
            main: '#c0fefb',
            light: '#dcddff',
        },
    },
});


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.black,
        fontSize: 20,
    },
    body: {
        fontSize: 15,
        padding: '10px',
        alignContent: 'right',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.secondary.main,
        },
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.secondary.light,
        }
    },
}))(TableRow);

var rows =
    [
        { "id": 1, "date": "2000-08-21", "name": "Priya", "options": "yes", "status": 2 },
        { "id": 2, "date": "1998-11-15", "name": "Kushagra", "options": "no", "status": 1 },
    ]

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
    button: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});

function TableStructure() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Actions</StyledTableCell>
                            <StyledTableCell align="justify">ID</StyledTableCell>
                            <StyledTableCell align="justify">Date</StyledTableCell>
                            <StyledTableCell align="justify">Name</StyledTableCell>
                            <StyledTableCell align="justify">Options</StyledTableCell>
                            <StyledTableCell align="justify">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align='justify'>
                                    <Button variant="contained"
                                        color="default"
                                        className={classes.button}
                                        startIcon={<Add />}>
                                        New</Button>
                                    <Button variant="contained"
                                        color="default"
                                        className={classes.button}
                                        startIcon={<Create />}>
                                        Edit</Button>
                                </StyledTableCell>
                                <StyledTableCell align="justify">{row.id}</StyledTableCell>
                                <StyledTableCell align="justify">
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="date"
                                            type="date"
                                            value={row.date}
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </StyledTableCell>
                                <StyledTableCell align="justify">{row.name}</StyledTableCell>
                                <StyledTableCell align="justify">
                                    <ToggleButtonGroup type="checkbox" value={row.options} className="mb-2">
                                        <ToggleButton value={'yes'}>Yes</ToggleButton>
                                        <ToggleButton value={'no'}>No</ToggleButton>
                                    </ToggleButtonGroup>
                                </StyledTableCell>
                                <StyledTableCell align="justify">
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            defaultValue={row.status}
                                            displayEmpty
                                            className={classes.selectEmpty}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="" disabled>Select Status</MenuItem>
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}

export default TableStructure;