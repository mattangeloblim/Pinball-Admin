/* eslint-disable */
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { randomTraderName, randomEmail } from "@mui/x-data-grid-generator";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { getTransactionTable } from "../services/getTransactionTable";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "user_id", headerName: "User ID", width: 150 },
  { field: "number", headerName: "Phone", width: 150 },
  { field: "transaction_type", headerName: "Type", width: 150 },
  { field: "transaction_id", headerName: "Transaction ID", width: 150 },
  { field: "transaction_amount", headerName: "Amount", width: 150 },
  { field: "createdAt", headerName: "Created At", width: 150 },
  { field: "updatedAt", headerName: "Updated At", width: 150 },
];

const rows = [
  { id: 1, name: randomTraderName(), email: randomEmail(), age: 25 },
  { id: 2, name: randomTraderName(), email: randomEmail(), age: 36 },
  { id: 3, name: randomTraderName(), email: randomEmail(), age: 19 },
  { id: 4, name: randomTraderName(), email: randomEmail(), age: 28 },
  { id: 5, name: randomTraderName(), email: randomEmail(), age: 23 },
  { id: 6, name: randomTraderName(), email: randomEmail(), age: 27 },
  { id: 7, name: randomTraderName(), email: randomEmail(), age: 18 },
  { id: 8, name: randomTraderName(), email: randomEmail(), age: 31 },
  { id: 9, name: randomTraderName(), email: randomEmail(), age: 24 },
  { id: 10, name: randomTraderName(), email: randomEmail(), age: 35 },
];

export default function AdminTransaction() {
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [""],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const { result } = await getTransactionTable();
        setData(result);
        // console.log(userList);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert("An error occurred. Please try again later.");
      }
    };
    getAllData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center">
        <div className="w-[80%] ">
          <h1 className=" w-full text-3xl font-semibold text-center uppercase underline">
            transaction history table
          </h1>
          <Box sx={{ width: 1 }}>
            <FormControlLabel
              checked={columnVisibilityModel.id !== false}
              onChange={(event) =>
                setColumnVisibilityModel(() => ({ id: event.target.checked }))
              }
              control={<Switch color="primary" size="large" />}
              label="Show ID column"
            />
            <FormControlLabel
              checked={filterModel.quickFilterExcludeHiddenColumns}
              onChange={(event) =>
                setFilterModel((model) => ({
                  ...model,
                  quickFilterExcludeHiddenColumns: event.target.checked,
                }))
              }
              control={<Switch color="primary" size="large" />}
              label="Exclude hidden columns"
            />
            <Box sx={{ height: 700 }}>
              <DataGrid
                columns={columns}
                rows={data}
                disableColumnFilter
                disableDensitySelector
                slots={{ toolbar: GridToolbar }}
                filterModel={filterModel}
                onFilterModelChange={(newModel) => setFilterModel(newModel)}
                slotProps={{ toolbar: { showQuickFilter: true } }}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={(newModel) =>
                  setColumnVisibilityModel(newModel)
                }
              />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}
