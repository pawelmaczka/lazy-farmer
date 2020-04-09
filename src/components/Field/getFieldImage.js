import { ReactComponent as all0 } from './img/all_0.svg';
import { ReactComponent as cabbage1 } from './img/cabbage_1.svg';
import { ReactComponent as cabbage2 } from './img/cabbage_2.svg';
import { ReactComponent as cabbage3 } from './img/cabbage_3.svg';
import { ReactComponent as cabbage4 } from './img/cabbage_4.svg';
import { ReactComponent as carrot1 } from './img/carrot_1.svg';
import { ReactComponent as carrot2 } from './img/carrot_2.svg';
import { ReactComponent as carrot3 } from './img/carrot_3.svg';
import { ReactComponent as carrot4 } from './img/carrot_4.svg';
import { ReactComponent as potato1 } from './img/potato_1.svg';
import { ReactComponent as potato2 } from './img/potato_2.svg';
import { ReactComponent as potato3 } from './img/potato_3.svg';
import { ReactComponent as potato4 } from './img/potato_4.svg';
import { ReactComponent as pumpkin1 } from './img/pumpkin_1.svg';
import { ReactComponent as pumpkin2 } from './img/pumpkin_2.svg';
import { ReactComponent as pumpkin3 } from './img/pumpkin_3.svg';
import { ReactComponent as pumpkin4 } from './img/pumpkin_4.svg';
import { ReactComponent as tomato1 } from './img/tomato_1.svg';
import { ReactComponent as tomato2 } from './img/tomato_2.svg';
import { ReactComponent as tomato3 } from './img/tomato_3.svg';
import { ReactComponent as tomato4 } from './img/tomato_4.svg';

const fieldImages = {
  cabbage: [all0, all0, cabbage1, cabbage2, cabbage3, cabbage4],
  carrot: [all0, all0, carrot1, carrot2, carrot3, carrot4],
  potato: [all0, all0, potato1, potato2, potato3, potato4],
  pumpkin: [all0, all0, pumpkin1, pumpkin2, pumpkin3, pumpkin4],
  tomato: [all0, all0, tomato1, tomato2, tomato3, tomato4],
};

export const getFieldImage = (type, level) => fieldImages[type][level];
