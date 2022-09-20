import { styled as muiStyled } from '@mui/material/styles';

export const styled: typeof muiStyled = (
  component: Parameters<typeof muiStyled>[0],
  options?: Parameters<typeof muiStyled>[1]
): ReturnType<typeof muiStyled> => {
  // @ts-ignore Fix https://github.com/nrwl/nx/issues/4508
  if (options?.shouldForwardProp) {
    // Explicitly declared, no need handle
    return muiStyled(component, options);
  }
  if (!options) {
    options = {};
  }

  // Is simple element, pass only valid props
  // @ts-ignore Fix https://github.com/nrwl/nx/issues/4508
  // options.shouldForwardProp = isValidProp;
  return muiStyled(component, options);
};
