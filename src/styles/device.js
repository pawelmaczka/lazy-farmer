export const breakpoint = {
  mobileS: '20em', // 320px
  mobileM: '23.4375em', // 375px
  mobileL: '26.5625em', // 425px
  tablet: '48em', // 768px
  laptop: '64em', // 1024px
  laptopL: '90em', // 1440px
  desktop: '120em', // 1920px
  desktopL: '128em', // 2048px
  desktop2K: '160em', // 2560px
  desktop3K: '192em', // 3072px
  desktop4K: '256em', // 4096px
};

const device = {
  mobileS: `(min-width: ${breakpoint.mobileS})`,
  mobileM: `(min-width: ${breakpoint.mobileM})`,
  mobileL: `(min-width: ${breakpoint.mobileL})`,
  tablet: `(min-width: ${breakpoint.tablet})`,
  laptop: `(min-width: ${breakpoint.laptop})`,
  laptopL: `(min-width: ${breakpoint.laptopL})`,
  desktop: `(min-width: ${breakpoint.desktop})`,
  desktopL: `(min-width: ${breakpoint.desktopL})`,
  desktop2K: `(min-width: ${breakpoint.desktop2K})`,
  desktop3K: `(min-width: ${breakpoint.desktop3K})`,
  desktop4K: `(min-width: ${breakpoint.desktop4K})`,
};

export default device;
