import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Paper, TextField, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Add, Create } from '@material-ui/icons';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#daf7a6',
        },
        secondary: {
            main: '#c0fefb',
            light: '#dcddff',
        },
    },
});


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 9,
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
        { "id": 2, "date": "1998-11-15", "name": "Kushagra", "options": "yes", "status": 1 },
    ]

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    button: {
        margin: theme.spacing(1),
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
                                <StyledTableCell component="th" scope="row">
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
                                <StyledTableCell align="justify">{row.options}</StyledTableCell>
                                <StyledTableCell align="justify">{row.status}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}

export default TableStructure;