import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
// import { CircularProgress } from '@material-ui/core';

import getFieldImage from './getFieldImage';
import { getFieldLevel } from './helpers';

import * as Styled from './Field.style';

const plant = firebase.functions().httpsCallable('plant');
// const TIME_TO_ROTTEN = 10800000;

// const Loading = styled(CircularProgress)`
//   position: absolute;
//   top: 0.6em;
//   left: 0.35em;
//   z-index: 2;
// `;

const Field = ({ field: { id, plantedAtTimestamp, type } }) => {
  const [level, setLevel] = React.useState(
    getFieldLevel(type, plantedAtTimestamp)
  );
  const [isPerformingAction, setIsPerformingAction] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLevel(getFieldLevel(type, plantedAtTimestamp));
    }, 1000);

    return () => clearInterval(interval);
  }, [plantedAtTimestamp]);

  const handleClick = React.useCallback(async () => {
    await setIsPerformingAction(true);
    await plant({ fieldId: id, type });
    await setIsPerformingAction(false);
  }, []);

  const Image = getFieldImage(type, level);

  return (
    <Styled.Field grayscale={level === 0}>
      {/* {isPerformingAction && <Loading size={30} disableShrink />} */}
      {/* <Loading size={30} disableShrink /> */}
      <Image onClick={handleClick} />
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
