/* eslint-disable import/prefer-default-export */
import { resources } from 'config/game';

/**
 *
 * @param {string} fieldType - one of: cabbage, carrot, potato, pumpkin, tomato
 * @param {number} plantedAtTimestamp
 * @param {Object()} resourcesConfig
 * @returns {number}
 */
export const getLevelTimestamp = (
  level,
  fieldType,
  plantedAtTimestamp,
  resourcesConfig = resources
) => {
  const timestamps = [
    {
      level: 2,
      timestamp:
        plantedAtTimestamp +
        Math.round((1 / 3) * resourcesConfig[fieldType].growingTime),
    },
    {
      level: 3,
      timestamp:
        plantedAtTimestamp +
        Math.round((2 / 3) * resourcesConfig[fieldType].growingTime),
    },
    {
      level: 4,
      timestamp:
        plantedAtTimestamp + Math.round(resourcesConfig[fieldType].growingTime),
    },
    {
      level: 5,
      timestamp:
        plantedAtTimestamp +
        resourcesConfig[fieldType].growingTime +
        resourcesConfig[fieldType].timeToRot,
    },
  ];

  return (
    timestamps.find((timestamp) => timestamp.level === level)?.timestamp ?? null
  );
};

/**
 *
 * @param {string} fieldType - one of: cabbage, carrot, potato, pumpkin, tomato
 * @param {number} plantedAtTimestamp
 * @param {Object()} resourcesConfig
 * @returns {number} - a level of field
 */
export const getFieldLevel = (
  fieldType,
  plantedAtTimestamp,
  resourcesConfig = resources
) => {
  if (plantedAtTimestamp === null) {
    return 0;
  }

  const now = Date.now();

  if (
    now >= getLevelTimestamp(5, fieldType, plantedAtTimestamp, resourcesConfig)
  ) {
    return 5;
  }

  if (
    now >= getLevelTimestamp(4, fieldType, plantedAtTimestamp, resourcesConfig)
  ) {
    return 4;
  }

  if (
    now >= getLevelTimestamp(3, fieldType, plantedAtTimestamp, resourcesConfig)
  ) {
    return 3;
  }

  if (
    now >= getLevelTimestamp(2, fieldType, plantedAtTimestamp, resourcesConfig)
  ) {
    return 2;
  }

  return 1;
};
