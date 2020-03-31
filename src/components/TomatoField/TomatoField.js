import React from 'react';

import Field from 'components/Field';

import { ReactComponent as level0 } from './img/tomato_0.svg';
import { ReactComponent as level1 } from './img/tomato_1.svg';
import { ReactComponent as level2 } from './img/tomato_2.svg';
import { ReactComponent as level3 } from './img/tomato_3.svg';
import { ReactComponent as level4 } from './img/tomato_4.svg';

const svgComponents = [level0, level1, level2, level3, level4];

const TomatoField = () => {
  return <Field svgComponents={svgComponents} />;
};

export default TomatoField;
