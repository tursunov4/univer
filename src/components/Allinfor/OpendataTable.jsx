import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


export default function OpendataTable({handleEdit , handleDelete , data}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [lan , setLan] = React.useState("uz")


  return (
    <>
      <div className="buttongorup__elon">
      <ButtonGroup   aria-label="outlined primary button group">
  <Button  onClick={()=>setLan("uz")}>Uz</Button>
  <Button onClick={()=>setLan("ru")}>Ru</Button>
  <Button onClick={()=>setLan("en")}>Eng</Button>
  <Button onClick={()=>setLan("kr")}>Kr</Button>
</ButtonGroup>
      </div>
       <TableContainer style={{maxWidth:"95%" , margin:"20px auto"}} component={Paper}>
      <Table sx={{ minWidth: "95%" }} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <TableCell>
              {
              lan === "uz" &&"nameUZ"
              }
              {
              lan === "ru" &&"nameRU"
              }
              {
              lan === "en" &&"nameEN"
              }
              {
              lan === "kr" &&"nameKR"
              }
             </TableCell>
             
  
                        
            <TableCell>Image</TableCell> 
            <TableCell>Action</TableCell> 
          
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row , index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {  lan ==="en" && row?.nameEN}
                {  lan ==="ru" && row?.nameRU}
                {  lan ==="uz" && row?.nameUZ}
                {  lan ==="kr" && row?.nameKR}
              </TableCell>        
              <TableCell component="th" scope="row">               
                    <p key={index}>
                      {row?.file?.orginalName}
                    </p>
              </TableCell>  
              <TableCell >
              <Button onClick={()=>handleEdit(row)} size="small" style={{margin:"5px"}} variant="outlined" href="#outlined-buttons">
                 Edit
               </Button>
                <Button onClick={()=>handleDelete(row.id)} size="small" variant="outlined" color="error">
                  Delete
                </Button>

              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </>
  );
}
