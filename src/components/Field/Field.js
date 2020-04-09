import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import PlantMenu from 'components/PlantMenu';
import { getFieldImage } from './getFieldImage';
import { getFieldLevel } from './helpers';

import * as Styled from './Field.style';

const plant = firebase.functions().httpsCallable('plant');

const CropMenu = PlantMenu;

const Field = ({ field: { id, plantedAtTimestamp, type } }) => {
  const [level, setLevel] = React.useState(
    getFieldLevel(type, plantedAtTimestamp)
  );

  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const fieldRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLevel(getFieldLevel(type, plantedAtTimestamp));
      setAnchorEl(fieldRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, [plantedAtTimestamp, fieldRef, type]);

  const handleClick = React.useCallback(() => {
    setAnchorEl(fieldRef.current);
    setIsMenuOpened(true);
  }, [fieldRef]);

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
    setIsMenuOpened(false);
  }, []);

  const handlePlant = React.useCallback(
    (fieldType) => {
      plant({ fieldId: id, type: fieldType });
    },
    [id]
  );

  const Image = getFieldImage(type, level);

  return (
    <Styled.Field grayscale={level === 0} isMenuOpened={isMenuOpened}>
      <Image onClick={handleClick} data-testid="svg-image" ref={fieldRef} />
      {level === 0 && (
        <PlantMenu
          onPlant={handlePlant}
          anchorEl={anchorEl}
          onClose={handleClose}
          open={isMenuOpened}
        />
      )}
      {level === 4 && (
        <CropMenu
          onPlant={handlePlant}
          anchorEl={anchorEl}
          onClose={handleClose}
          open={isMenuOpened}
        />
      )}
    </Styled.Field>
  );
};

Field.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.number.isRequired,
    plantedAtTimestamp: PropTypes.number,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Field;
