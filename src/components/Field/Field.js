import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
// import { CircularProgress } from '@material-ui/core';

import { getFieldImage } from './getFieldImage';
import { getFieldLevel } from './helpers';

import * as Styled from './Field.style';

const plant = firebase.functions().httpsCallable('plant');

const Field = ({ field: { id, plantedAtTimestamp, type } }) => {
  const [level, setLevel] = React.useState(
    getFieldLevel(type, plantedAtTimestamp)
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLevel(getFieldLevel(type, plantedAtTimestamp));
    }, 1000);

    return () => clearInterval(interval);
  }, [plantedAtTimestamp]);

  const handleClick = React.useCallback(async () => {
    await plant({ fieldId: id, type });
  }, []);

  const Image = getFieldImage(type, level);

  return (
    <Styled.Field grayscale={level === 0}>
      <Image onClick={handleClick} data-testid="svg-image" />
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
