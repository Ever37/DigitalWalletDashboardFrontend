import { TextField } from "@mui/material";
import PropTypes from 'prop-types';
 
 const MyTextField = ({
  id,
  value,
  label,
  onChange,
  ...props
}) => {
  const handleChange = (event) => {
    if (onChange) onChange(event);
  }
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={handleChange}
      variant="standard"
      sx={{ minWidth: 400 }}
      fullWidth
      {...props}
    />
  );
 }

 MyTextField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
  
 export default MyTextField;