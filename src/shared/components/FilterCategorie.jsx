import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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
  'Todas',
  'Cozinha',
  'Banheiro',
  'Quarto',
  'Toalhas',
  'Churrasco',
  'Madeira'
];

const FilterCategorie = () => {
  const [selectedCategories, setSelectedCategories] = useState(['Todas']);

  const toggleCategory = (categorie) => {

    if (categorie === 'Todas') {
      setSelectedCategories(['Todas']);
      return;
    }

    let newSelected;
    if (selectedCategories.includes(categorie)) {

      newSelected = selectedCategories.filter((c) => c !== categorie);
    } else {

      newSelected = [...selectedCategories.filter((c) => c !== 'Todas'), categorie];
    }

    setSelectedCategories(newSelected.length ? newSelected : ['Todas']);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        width: '15rem',
        backgroundColor: 'var(--secondary-color)',
        borderRadius: '10px',
        boxShadow: '3px 4px 6px rgba(0,0,0,0.25)'
      }}
    >
      <InputLabel
        id="categories-checkbox"
        sx={{ fontFamily: 'Poppins', fontWeight: 'medium', color: '#000000' }}
      >
        Categoria
      </InputLabel>
      <Select
        labelId="categories-checkbox"
        id="multiples-categories-checkbox"
        multiple
        value={selectedCategories}
        input={<OutlinedInput label="Categoria" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
        sx={{ 
            color: 'var(--text-color)', 
            fontWeight: 'bold', 
            fontFamily: 'Poppins', 
            border: 'none', 
            "& fieldset": {border: "none", borderRadius: '10px'}, 
        }}
        IconComponent={() => null}
      >
        {categories.map((categorie) => (
          <MenuItem key={categorie} onClick={() => toggleCategory(categorie)}>
            <Checkbox checked={selectedCategories.includes(categorie)} />
            <ListItemText primary={categorie} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterCategorie;
