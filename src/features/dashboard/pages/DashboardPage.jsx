import dayjs from "dayjs";
import {
    Drawer,
    IconButton,
    Stack,
    useMediaQuery,
    useTheme,
    Grid,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterCategorie from "../../../shared/components/FilterCategorie.jsx";
import FilterDate from "../../../shared/components/FilterDate.jsx";
import ValueBox from "../components/ValueBox.jsx";
import useDashStore from "../dashboardStore.js"
import { useState } from "react";

const Dashboard = () => {
    const { filters, setFilters } = useDashStore();
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const category = filters?.category ?? ["Todas"];
    const startDate = filters?.startDate ? dayjs(filters.startDate) : dayjs();
    const endDate = filters?.endDate ? dayjs(filters.endDate) : dayjs();

    const handleCategoryChange = (val) =>
        setFilters({ category: val, startDate, endDate });
    const handleStartDateChange = (val) =>
        setFilters({ category, startDate: val, endDate });
    const handleEndDateChange = (val) =>
        setFilters({ category, startDate, endDate: val });

    const toggleDrawer = () => setOpen((v) => !v);

    return (
        <>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 0,
                    position: "sticky",
                    top: 0,
                    zIndex: 1100,
                }}
            >
                {isSmallScreen && (
                    <IconButton
                        onClick={toggleDrawer}
                        sx={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            color: "#FFFFFF",
                        }}
                    >
                        <FilterListIcon />
                    </IconButton>
                )}
            </header>

            {!isSmallScreen && (
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        px: 2,
                        pb: 2,
                        borderBottom: "2px dashed var(--primary-color)",
                    }}
                >
                    <FilterCategorie value={category} onChange={handleCategoryChange} />
                    <FilterDate
                        dateType="start"
                        value={startDate}
                        onChange={handleStartDateChange}
                        otherDate={endDate}
                    />
                    <FilterDate
                        dateType="end"
                        value={endDate}
                        onChange={handleEndDateChange}
                        otherDate={startDate}
                    />
                </Stack>
            )}

            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        width: isSmallScreen ? "45%" : 360,
                        p: 2,
                        backgroundColor: "var(--background-color)",
                    },
                }}
            >
                <Stack spacing={2} alignItems={"center"}>
                    <FilterCategorie value={category} onChange={handleCategoryChange} />
                    <FilterDate
                        dateType="start"
                        value={startDate}
                        onChange={handleStartDateChange}
                        otherDate={endDate}
                    />
                    <FilterDate
                        dateType="end"
                        value={endDate}
                        onChange={handleEndDateChange}
                        otherDate={startDate}
                    />
                </Stack>
            </Drawer>

            <Grid container spacing={2} sx={{ p: 1, width: "100%", justifyContent: "center" }}>
                {/* Linha 1 */}
                <Grid size={{ xs: 12, md: 4 }} sx={{ p: 3 }}>
                    <ValueBox value={5000} type={"sales"}>Valor Vendido</ValueBox>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ p: 3 }}>
                    <ValueBox value={5000} type={"expenses"}>Valor Gasto</ValueBox>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ p: 3 }}>
                    <ValueBox>Top Produto</ValueBox>
                </Grid>
                {/* Linha 2 */}
                <Grid size={{ xs: 12, md: 8 }} sx={{ minHeight: 350, p: 3 }}>
                    <ValueBox>Vendas/Mês</ValueBox>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} sx={{ minHeight: 200, p: 3 }}>
                    <ValueBox>Produtos Vendidos</ValueBox>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
