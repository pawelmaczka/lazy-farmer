import React from 'react';

import Field from 'components/Field';

import { ReactComponent as level0 } from './img/potato_0.svg';
import { ReactComponent as level1 } from './img/potato_1.svg';
import { ReactComponent as level2 } from './img/potato_2.svg';
import { ReactComponent as level3 } from './img/potato_3.svg';
import { ReactComponent as level4 } from './img/potato_4.svg';

const svgComponents = [level0, level1, level2, level3, level4];

const PotatoField = () => {
  return <Field svgComponents={svgComponents} />;
};

export default PotatoField;
