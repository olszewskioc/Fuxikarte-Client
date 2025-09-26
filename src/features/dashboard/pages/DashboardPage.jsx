import { useState, useEffect } from "react";
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

const Dashboard = () => {
    const [category, setCategory] = useState(["Todas"]);
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    // Carrega filtros salvos
    useEffect(() => {
        const raw = localStorage.getItem("dashboard:filters");
        if (!raw) return;
        try {
            const parsed = JSON.parse(raw);
            if (parsed.category) setCategory(parsed.category);
            if (parsed.startDate) setStartDate(dayjs(parsed.startDate));
            if (parsed.endDate) setEndDate(dayjs(parsed.endDate));
        } catch (e) {
            console.error(e.message);
        }
    }, []);

    // Salva filtros no localStorage
    useEffect(() => {
        localStorage.setItem(
            "dashboard:filters",
            JSON.stringify({
                category,
                startDate: startDate?.toISOString?.() ?? null,
                endDate: endDate?.toISOString?.() ?? null,
            })
        );
    }, [category, startDate, endDate]);

    const toggleDrawer = () => setOpen((v) => !v);

    return (
        <>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 0,
                    position: "sticky", // fixa no topo quando rola a página
                    top: 0,
                    zIndex: 1100, // acima do conteúdo
                }}
            >
                {isSmallScreen && (
                    <IconButton
                        onClick={toggleDrawer}
                        sx={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            color: '#FFFFFF'
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
                    <FilterCategorie value={category} onChange={setCategory} />
                    <FilterDate
                        dateType="start"
                        value={startDate}
                        onChange={setStartDate}
                        otherDate={endDate}
                    />
                    <FilterDate
                        dateType="end"
                        value={endDate}
                        onChange={setEndDate}
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
                    <FilterCategorie value={category} onChange={setCategory} />
                    <FilterDate
                        dateType="start"
                        value={startDate}
                        onChange={setStartDate}
                        otherDate={endDate}
                    />
                    <FilterDate
                        dateType="end"
                        value={endDate}
                        onChange={setEndDate}
                        otherDate={startDate}
                    />
                </Stack>
            </Drawer>
            <Grid container spacing={2} sx={{ p: 2, width: "100%", justifyContent: 'center' }}>
                {/* Linha 1 */}
                <Grid item size={{ xs: 12, md: 4 }}>
                    <ValueBox>Valor Vendido</ValueBox>
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                    <ValueBox>Valor Gasto</ValueBox>
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                    <ValueBox>Top Produto</ValueBox>
                </Grid>
                {/* Linha 2 */}
                <Grid item size={{ xs: 12, md: 8 }} sx={{minHeight: 350}}>
                    <ValueBox>Vendas/Mês</ValueBox>
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }} sx={{minHeight: 200}}>
                    <ValueBox>Produtos Vendidos</ValueBox>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
