import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
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

export default function Kanferensiyatable({ handleEdit, handleDelete, data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [lan, setLan] = React.useState("uz");

  return (
    <>
      <div className="buttongorup__elon">
        <ButtonGroup aria-label="outlined primary button group">
          <Button onClick={() => setLan("uz")}>Uz</Button>
          <Button onClick={() => setLan("ru")}>Ru</Button>
          <Button onClick={() => setLan("en")}>Eng</Button>
          <Button onClick={() => setLan("kr")}>Kr</Button>
        </ButtonGroup>
      </div>
      <TableContainer
        style={{ maxWidth: "95%", margin: "20px auto" }}
        component={Paper}
      >
        <Table sx={{ width: "120vw" }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>
                {lan === "uz" && "titleUZ"}
                {lan === "ru" && "titleRU"}
                {lan === "en" && "titleEN"}
                {lan === "kr" && "titleKR"}
              </TableCell>
              <TableCell>
                {lan === "uz" && "addressUZ"}
                {lan === "ru" && "addressRU"}
                {lan === "en" && "addressEN"}
                {lan === "kr" && "addressKR"}
              </TableCell>
              <TableCell>Telefon Raqam</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>
                {lan === "uz" && "Kutilayotgan sana UZ"}
                {lan === "ru" && "Kutilayotgan sana RU"}
                {lan === "en" && "Kutilayotgan sana EN"}
                {lan === "kr" && "Kutilayotgan sana KR"}
              </TableCell>
              <TableCell>
                {lan === "uz" && "descriptionUZ"}
                {lan === "ru" && "descriptionRU"}
                {lan === "en" && "descriptionEN"}
                {lan === "kr" && "descriptionKR"}
              </TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? data?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : data
            )?.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {lan === "en" && row?.titleEN}
                  {lan === "ru" && row?.titleRU}
                  {lan === "uz" && row?.titleUZ}
                  {lan === "kr" && row?.titleKR}
                </TableCell>
                <TableCell component="th" scope="row">
                  {lan === "en" && row?.addressEN}
                  {lan === "ru" && row?.addressRU}
                  {lan === "uz" && row?.addressUZ}
                  {lan === "kr" && row?.addressKR}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row?.phone}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row?.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {lan === "en" && row?.dateEN}
                  {lan === "ru" && row?.dateRU}
                  {lan === "uz" && row?.dateUZ}
                  {lan === "kr" && row?.dateKR}
                </TableCell>
                <TableCell
                  style={{ width: "400px" }}
                  component="th"
                  scope="row"
                >
                  <p
                    style={{
                      width: "400px !important",
                      height: "250px",
                      overflowY: "auto",
                      padding: "10px",
                    }}
                  >
                    {lan === "en" && row?.descriptionEN}
                    {lan === "ru" && row?.descriptionRU}
                    {lan === "uz" && row?.descriptionUZ}
                    {lan === "kr" && row?.descriptionKR}
                  </p>
                </TableCell>

                <TableCell>
                  <Button
                    onClick={() => handleEdit(row)}
                    size="small"
                    style={{ margin: "5px" }}
                    variant="outlined"
                    href="#outlined-buttons"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(row.id)}
                    size="small"
                    variant="outlined"
                    color="error"
                  >
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
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
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
