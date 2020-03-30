const field = {
  level: 0,
  type: 'wheat',
  productionStartTimestamp: null,
};

const getDefaultFields = () =>
  Array(6)
    .fill(true)
    .map((value, index) => ({
      id: index,
      ...field,
    }));

const getDefaultFarm = () => ({
  avatar: null,
  fields: getDefaultFields(),
});

module.exports = getDefaultFarm;
