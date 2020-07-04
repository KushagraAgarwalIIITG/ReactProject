import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Paper, TextField, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@material-ui/core';
import { MenuItem, FormControl, Select, TableSortLabel } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Add, Create } from '@material-ui/icons';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';


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
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

var rows =
    [

        { "id": 2, "date": "1998-11-15", "name": "Kushagra", "options": "no", "status": 1 },
        { "id": 3, "date": "1970-10-28", "name": "Srikanth", "options": "yes", "status": 3 },
        { "id": 1, "date": "2000-08-21", "name": "Priya", "options": "yes", "status": 2 },
    ]

const headCells = [
    { id: 'id', numeric: true, label: 'ID' },
    { id: 'date', numeric: true, label: 'Date' },
    { id: 'Name', numeric: false, label: 'Name' },
    { id: 'options', numeric: false, label: 'Options' },
    { id: 'status', numeric: true, label: 'Status' },
];
function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <StyledTableRow align="right">
                <StyledTableCell>
                    <Button variant="contained"
                        color="primary"
                        startIcon={<Add />}>
                        New Row</Button>
                </StyledTableCell>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align='center'
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </StyledTableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

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
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
});

function TableStructure() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <ThemeProvider theme={theme}>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <EnhancedTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <StyledTableRow key={row.name} tabIndex={-1}>
                                        <StyledTableCell align='center'>
                                            <Button variant="contained"
                                                color="default"
                                                className={classes.button}
                                                startIcon={<Create />}>
                                                Edit</Button>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.id}</StyledTableCell>
                                        <StyledTableCell align="center">
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
                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <ToggleButtonGroup type="checkbox" value={row.options} className="mb-2">
                                                <ToggleButton value={'yes'}>Yes</ToggleButton>
                                                <ToggleButton value={'no'}>No</ToggleButton>
                                            </ToggleButtonGroup>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
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
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 33 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </ThemeProvider>
    );
}

export default TableStructure;