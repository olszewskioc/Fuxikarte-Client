import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { forwardRef } from "react";
import "dayjs/locale/pt-br"; 

const CustomTextField = forwardRef((props, ref) => (
    <TextField
        {...props}
        ref={ref}
        fullWidth
        sx={{
            m: 1,
            width: "10rem",
            backgroundColor: "var(--secondary-color)",
            borderRadius: "10px",
            boxShadow: "3px 4px 6px rgba(0,0,0,0.25)",
            "& fieldset": { border: "none" },
            "& .MuiInputBase-input": {
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "var(--text-color)",
            },
            "& .MuiInputLabel-root": {
                fontFamily: "Poppins",
                fontWeight: "medium",
                color: "#000000",
            },
            "& svg": {
              color: "var(--text-color)"
            }
        }}
    />
));

CustomTextField.displayName = "CustomTextField";

const FilterDate = ({ dateType, value, onChange, otherDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <DatePicker
        enableAccessibleFieldDOMStructure={false}
        label={dateType === "start" ? "Data Início" : "Data Fim"}
        value={value}
        onChange={onChange}
        minDate={dateType === "end" ? otherDate : undefined}
        maxDate={dateType === "start" ? otherDate : undefined}
        slots={{ textField: CustomTextField }}
      />
    </LocalizationProvider>
  );
};

FilterDate.propTypes = {
  dateType: PropTypes.oneOf(["start", "end"]).isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  otherDate: PropTypes.object,
};

export default FilterDate;
