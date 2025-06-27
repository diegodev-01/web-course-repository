import * as React from "react"
import Button from "@mui/material/Button"
import TablePagination from "@mui/material/TablePagination"
import {ThemeProvider, createTheme } from "@mui/material/styles"

const customTheme = createTheme({
  components: {
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          backgroundColor: "#e3f2fd",
        },
        selectIcon: {
          color: "#1976d2",
        },
        actions: {
          color: "#d32f2f",
        },
      },
    },
  },
})

export function Demo() {
  const [page, setPage] = React.useState(2)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <ThemeProvider theme={customTheme}>
      <div className="bg-amber-300 p-4 transition-colors">
        <h1 className="text-2xl font-bold mb-4 mt-80 w-[56%] bg-blue-700">
          Demo Material UI
        </h1>
        <p className="mb-4">
          This is a demo of Material UI components with custom styles.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea porro
          tempora aliquid soluta molestiae! Ipsum eum obcaecati doloribus! Atque
          error exercitationem debitis excepturi enim qui aspernatur animi
          ducimus, neque esse.
        </p>
        <Button variant="contained">Hello world</Button>
        <TablePagination
          width={"100%"}
          align="center"
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </ThemeProvider>
  )
}
