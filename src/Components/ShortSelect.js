import { useState } from 'react';
import {FormControl, InputLabel, Select, MenuItem, Typography} from "@mui/material";
const ShortSelect = ({ onChange, value, label, items, hoverBorderColor, borderColor, focusBorderColor, width, disabled }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <FormControl fullWidth variant="outlined" sx={{width:width}} size='small' id={`short-select-form-${label}`}>
            <InputLabel
                id={`short-select-label-${label}`}
            >
                {label}
            </InputLabel>
            <Select
                disabled={disabled}
                labelId={`short-select-label-${label}`}
                id={`short-select-${label}`}
                value={value}
                onOpen={handleOpen}
                onClose={handleClose}
                onChange={(e) => onChange(e.target.value)}
                label={label}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 200, // Maximum height of the dropdown menu
                        },
                    },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: borderColor || 'rgba(0, 0, 0, 0.23)', // Default border color
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: hoverBorderColor || 'rgba(0, 0, 0, 0.87)', // Border color on hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: focusBorderColor ? focusBorderColor :'#3f51b5', // Border color when focused
                    },
                    }
                }}
                >
                {items?.map((itm, index) => (
                    <MenuItem key={index} value={itm}>
                        <Typography variant='body1'>
                            {itm}
                        </Typography>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default ShortSelect;
