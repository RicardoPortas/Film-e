import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const apiUrl = "https://ironrest.cyclic.app/86_film-e"

const Equipe = () => { 
  const [ listaEquipe, setListaEquipe ] = useState ([]);
  const [ refresh, setRefresh ] = useState (false) 
  
  useEffect ( () => {

    axios.get (apiUrl)
      .then (response => {
        let result = response.data.map ( item => { 
          item.id = item._id
          return item 
        })
        setListaEquipe (result)
      })
      .catch (error => console.log(error))

  }, [refresh])


  const deleteUser = id => {
    
   axios.delete(`${apiUrl}/${id}`)
   .then(response => {
      setRefresh(!refresh)
   })
   .cacth(err => console.log(err))
  } 
  


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { 
    field: "id", 
    headerName: "ID",
    flex: 0.9,
    },
    {
      field: "nome",
      headerName: "Nome",
      flex: 0.5,
      cellClassName: "nome-column--cell",
      editable: true
    },
    {
      field: "sobrenome",
      headerName: "sobrenome",
      flex: 0.5,
      cellClassName: "sobrenome-column--cell",
      editable: true
    },
    {
      field: "email",
      headerName: "E-mail",
      flex: 1,
      editable: true
    },
    {
      field: "contato",
      headerName: "Contato",
      flex: 0.5,
      editable: true
    },
    {
      field: "funcao",
      headerName: "Função",
      flex: 0.8,
      editable: true
    },
    {
      field: "cnpj",
      headerName: "CNPJ",
      flex: 0.7,
      editable: true
    },
    {
      field: "Editor",
      headerName: "Editor",
      flex: 1,
      renderCell: (params) => {
        console.log (params)
        return (
           ( <>
           <Box>
                  <Button type="submit" color="Yellow" variant="contained">
                      <Link to ={`/user/${params.id}`} >
                         Update
                      </Link>
                   </Button>
              <Button type="submit" color="red" variant="contained" onClick = {() => {deleteUser (params.id)}} >
                Deletar 
              </Button>
            </Box> </>
          )
        );
      },
    },
  ];
  
console.log (listaEquipe)

  return (
    <Box m="20px">
      <Header title="GESTORES" subtitle="Equipe de Produção" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[800],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[600],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.grey[100]} !important`,
          },
        }}
        
      >
        <DataGrid checkboxSelection rows={listaEquipe} columns={columns} />

        </Box>
            <Box display="flex" justifyContent="end" mt="10px">
              <Button type="submit" color="secondary" variant="contained">
                Criar novo usuário
              </Button>
            </Box>
  
      </Box>
  );
};

export default Equipe;