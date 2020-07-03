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

function createData(id, date, name, options, status) {
    return { id, date, name, options, status };
}

const rows = [
    createData(1, '2000-08-21', 'Priya', 'yes', '2'),
    createData(2, '1998-11-15', 'Kushagra', 'yes', '1')
];

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
                            <StyledTableCell align="justified">ID</StyledTableCell>
                            <StyledTableCell align="justified">Date</StyledTableCell>
                            <StyledTableCell align="justified">Name</StyledTableCell>
                            <StyledTableCell align="justified">Options</StyledTableCell>
                            <StyledTableCell align="justified">Status</StyledTableCell>
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
                                <StyledTableCell align="justified">{row.id}</StyledTableCell>
                                <StyledTableCell align="justified">
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="date"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            value={row.date}
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </StyledTableCell>
                                <StyledTableCell align="justified">{row.name}</StyledTableCell>
                                <StyledTableCell align="justified">{row.options}</StyledTableCell>
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