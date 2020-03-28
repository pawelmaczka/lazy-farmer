import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Layout = ({ children }) => <Content>{children}</Content>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
