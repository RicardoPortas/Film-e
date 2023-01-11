import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataEquipe } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const apiUrl = "https://ironrest.cyclic.app/86_film-e"

const Equipe = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { 
    field: "id", 
    headerName: "ID",
    flex: 0.2,
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
      field: "CNPJ",
      headerName: "CNPJ",
      flex: 0.7,
      editable: true
    },
    {
      field: "Editor",
      headerName: "Editor",
      flex: 1,
      renderCell: ({ row: { editor } }) => {
        return (
           ( <Box display="flex" justifyContent="end" mt="5px">
              <Button type="submit" color="Yellow" variant="contained">
                Update
              </Button>
              <Button type="submit" color="red" variant="contained">
                Deletar
              </Button>
              <Button type="submit" color="red" variant="contained">
                Visualizar
              </Button>
            </Box> )
        );
      },
    },
  ];
  

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
        <DataGrid checkboxSelection rows={mockDataEquipe} columns={columns} />

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