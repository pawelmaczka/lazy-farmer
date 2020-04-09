import React from 'react';
import PropTypes from 'prop-types';
import { Popover as MuiPopover } from '@material-ui/core';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
`;

const FieldPopover = ({ children, anchorEl, onClose, open }) => (
  <MuiPopover
    open={open}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  >
    <Container>{children}</Container>
  </MuiPopover>
);

FieldPopover.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  anchorEl: PropTypes.object,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default FieldPopover;
