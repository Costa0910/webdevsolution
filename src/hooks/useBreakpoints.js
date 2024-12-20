import useMediaQuery from './useMediaQuery';

const BREAKPOINT_MOBILE = '768px';
const BREAKPOINT_TABLET = '1024px';

export const useIsMobile = () => {
  return useMediaQuery(`(max-width: ${BREAKPOINT_MOBILE})`);
};

export const useIsTablet = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINT_MOBILE}) and (max-width: ${BREAKPOINT_TABLET})`);
};

export const useIsDesktop = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINT_TABLET})`);
};