import { FileCopy } from '@mui/icons-material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';

const MyCopyButton = ({
  textToCopy,
}) => {

  const handleCopyClick = () => navigator.clipboard.writeText(textToCopy);

  return (
    <IconButton
      variant="copy-address"
      color="primary"
      startIcon={<FileCopy />}
      onClick={handleCopyClick}
    >
      <ContentCopyOutlinedIcon />
    </IconButton>
  );
};

MyCopyButton.propTypes = {
  textToCopy: PropTypes.string.isRequired,
};

export default MyCopyButton;
