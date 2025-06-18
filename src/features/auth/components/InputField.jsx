import { useState } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/material";

const InputField = ({ borderRadius, type = "text", ...props }) => {
    const [field, meta] = useField(props.name);
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;
    const hasError = meta.touched && Boolean(meta.error);

    return (
        <Box sx={{textAlign: 'center'}}>
            <label style={{textTransform: 'uppercase', fontWeight: 'bold', fontSize: '1.75rem'}}>{props.name}</label>
            <TextField
                {...field}
                {...props}
                type={inputType}
                fullWidth
                variant="outlined"
                placeholder={props.name}
                error={hasError}
                helperText={hasError ? meta.error : ""}
                InputProps={{
                  sx: { borderRadius: borderRadius, mt: '1rem', bgcolor: '#f0f0f0' },
                    endAdornment: isPassword && (
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => setShowPassword((prev) => !prev)}
                                onMouseDown={(e) => e.preventDefault()}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "password"]),
    borderRadius: PropTypes.string,
};

export default InputField;
