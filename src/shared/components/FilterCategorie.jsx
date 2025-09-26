import PropTypes from "prop-types";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = [
  "Todas",
  "Cozinha",
  "Banheiro",
  "Quarto",
  "Toalhas",
  "Churrasco",
  "Madeira",
];

const FilterCategorie = ({ value = ["Todas"], onChange = () => {} }) => {
  // garante que current seja sempre um array
  const current = Array.isArray(value) ? value : ["Todas"];

  const toggleCategory = (categorie) => {
    if (categorie === "Todas") {
      onChange(["Todas"]);
      return;
    }

    let newSelected;
    if (current.includes(categorie)) {
      newSelected = current.filter((c) => c !== categorie);
    } else {
      newSelected = [...current.filter((c) => c !== "Todas"), categorie];
    }

    onChange(newSelected.length ? newSelected : ["Todas"]);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        width: "10rem",
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px",
        boxShadow: "3px 4px 6px rgba(0,0,0,0.25)",
      }}
    >
      <InputLabel
        id="categories-checkbox"
        sx={{ fontFamily: "Poppins", fontWeight: "medium", color: "#000000" }}
      >
        Categoria
      </InputLabel>

      <Select
        labelId="categories-checkbox"
        id="multiples-categories-checkbox"
        multiple
        value={Array.isArray(value) ? value : ["Todas"]}
        input={<OutlinedInput label="Categoria" />}
        renderValue={(selected) => (Array.isArray(selected) ? selected.join(", ") : String(selected))}
        MenuProps={MenuProps}
        sx={{
          color: "var(--text-color)",
          fontWeight: "bold",
          fontFamily: "Poppins",
          border: "none",
          "& fieldset": { border: "none", borderRadius: "10px" },
        }}
        IconComponent={() => null}
      >
        {categories.map((categorie) => (
          <MenuItem key={categorie} onClick={() => toggleCategory(categorie)}>
            <Checkbox checked={current.includes(categorie)} />
            <ListItemText primary={categorie} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

FilterCategorie.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export default FilterCategorie;
