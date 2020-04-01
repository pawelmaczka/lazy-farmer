const types = {
  cabbage: 'cabbage',
  carrot: 'carrot',
  potato: 'potato',
  pumpkin: 'pumpkin',
  tomato: 'tomato',
};

const defaultFields = [
  {
    id: 1,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 2,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 3,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 4,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 5,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 6,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 7,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 8,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 9,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 10,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 11,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 12,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 13,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 14,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 15,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 16,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 17,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 18,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 19,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
  {
    id: 20,
    type: types.cabbage,
    productionStartTimestamp: null,
  },
];

const defaultResources = {
  cabbage: 10,
  carrot: 1,
  potato: 1,
  pumpkin: 1,
  tomato: 1,
};

const getDefaultFields = () => defaultFields;

const getDefaultFarm = () => ({
  avatar: null,
  resources: defaultResources,
  fields: getDefaultFields(),
});

module.exports = getDefaultFarm;
