import { cloneDeep, isUndefined } from 'lodash';

export const mergeOptions = <Options extends Record<string, any>>(
  defaultOptions: Options,
  options?: Partial<Options>,
) => {
  if (options) {
    const mergedOptions = cloneDeep(defaultOptions);
    const defaultOptionKeys = Object.keys(defaultOptions);

    // loop through the defaults to only include valid and non-undefined options
    defaultOptionKeys.forEach((key) => {
      const optionValue = cloneDeep(options[key]);
      if (!isUndefined(optionValue)) {
        (mergedOptions as any)[key] = optionValue;
      }
    });

    return mergedOptions;
  } else {
    return defaultOptions;
  }
};
