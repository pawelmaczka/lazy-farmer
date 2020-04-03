import React from 'react';
import PropTypes from 'prop-types';

import Field from 'components/Field';
import * as Styled from './Fields.style';

const sortById = (first, second) => first.id - second.id;

const Fields = ({ fields }) => (
  <Styled.Fields>
    <Styled.FieldsGrid>
      {fields.sort(sortById).map((field) => (
        <Field key={field.id} field={field} />
      ))}
    </Styled.FieldsGrid>
  </Styled.Fields>
);

Fields.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Fields;
