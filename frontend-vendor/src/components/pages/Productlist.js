import React, { useState } from "react";
import  "./Additems.css";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";

export default function Productlist() {
  const [dataStore, setDataStore] = useState([
    { name: "Jon", job: "Software Dev", age: 29 },
    { name: "Jon", job: "Software Dev", age: 29 },
    { name: "Jon", job: "Software Dev", age: 29 }
  ]);

  return (
    <div id='classComponentForm' >
      <h1>Material-Table Demo</h1>
      <div style={{ width: "80%", align: "center" }}>
        <MaterialTable
          columns={[
            {
              title: "Name",
              field: "name",
              headerStyle: {
               
              }
            },
            {
              title: "Occupation",
              field: "job",
              headerStyle: {
                
              }
            },
            {
              title: "Age",
              field: "age",
              type: "numeric",
              headerStyle: {
                
              }
            }
          ]}
          data={dataStore}
          title="Material-Table Demo"
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />
          }}
          actions={[
            {
              icon: () => <SaveIcon />,
              tooltip: "Save User",
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
          ]}
          components={{
            Action: (props) => (
              <Button
                onClick={(event) => props.action.onClick(event, props.data)}
                color="primary"
                variant="text"
                style={{ textTransform: "none" }}
                size="small"
              >
                Save
              </Button>
            )
          }}
          options={{
            headerStyle: {
              
            }
          }}
        />
      </div>
    </div>
  );
}
