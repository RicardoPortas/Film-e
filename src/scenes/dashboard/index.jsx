import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Bem vindo ao Film-e, esta é sua dashboard" />
            </Box>
        </Box>
    );
};

export default Dashboard;