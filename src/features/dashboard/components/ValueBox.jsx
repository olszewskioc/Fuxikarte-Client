import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import CurrencyFormatter from "../../../shared/components/CurrencyFormatter";

const ValueBox = ({ children, value, type }) => {
  return (
    <Box
      sx={{
        boxShadow: 3,
        backgroundColor: "rgba(0,0,0,0.68)",
        height: "100%",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 3 },
        py: { xs: 2, md: 3 },
      }}
    >
      <Stack alignItems="center" spacing={{ xs: 1, sm: 1.5, lg: 2 }}>
        <Typography
          component="h2"
          sx={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.4rem" },
            textAlign: "center",
          }}
        >
          {children}
        </Typography>
        {value && 
          <Typography
            component="p"
            sx={{
              color: `${type == "sales" ? "var(--accenture-color)" : "var(--accenture-color-alt)"}`,
              fontWeight: "bold",
              fontSize: { xs: "1.75rem", sm: "2rem", md: "1.5rem", lg: "2.5rem" },
              lineHeight: 1,
              mb: { xs: 0.5, sm: 1 },
            }}
          >
            {<CurrencyFormatter value={value} />}
          </Typography>
      }
      </Stack>
    </Box>
  )
};

ValueBox.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number,
  type: PropTypes.oneOf(["sales", "expenses"])
};

export default ValueBox;