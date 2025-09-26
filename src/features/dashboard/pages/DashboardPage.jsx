import FilterCategorie from "../../../shared/components/FilterCategorie.jsx";
import FilterDate from "../../../shared/components/FilterDate.jsx";
import { useState } from "react";
import dayjs from "dayjs";

const Dashboard = () => {
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());

    return (
        <section>
            <h1>DASHBOARDS</h1>
            <FilterCategorie />
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
        </section>
    );
};

export default Dashboard;
