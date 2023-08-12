import { Button } from "@mui/material";
import PropTypes from 'prop-types';

const MyButton = ({
  id,
  label,
  onClick,
  ...props
}) => {
  const handleOnClick = (event) => {
    if (onClick) onClick(event);
  }
  return (
    <Button
      id={id}
      onClick={handleOnClick}
      variant="outlined"
      {...props}
    >
      {label}
    </Button>  
  );
}

MyButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
 
export default MyButton;