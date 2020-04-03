import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Layout.style';

const Layout = ({ children }) => <Styled.Content>{children}</Styled.Content>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
