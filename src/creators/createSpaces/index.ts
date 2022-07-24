import { CSSConvertibleUnit, toUnit } from '../../utilities';

export type SizeVariants = '' | 'Major' | 'Minor';

export type SpaceToken<Suffix extends string = ''> =
  | `gapRelated${SizeVariants}${Suffix}`
  | `gapUnrelated${SizeVariants}${Suffix}`
  | `marginRelated${SizeVariants}${Suffix}`
  | `marginUnrelated${SizeVariants}${Suffix}`
  | `padding${SizeVariants}${Suffix}`;

export const createSpaces = <Suffix extends string = ''>(
  unit: CSSConvertibleUnit = 'rem',
  suffix?: Suffix,
) => {
  const to = (value: number) => toUnit(value, unit);
  suffix = suffix ?? ('' as Suffix);

  return {
    [`gapRelated${suffix}`]: to(4),
    [`gapRelatedMajor${suffix}`]: to(8),
    [`gapRelatedMinor${suffix}`]: to(2),
    [`gapUnrelated${suffix}`]: to(8),
    [`gapUnrelatedMajor${suffix}`]: to(16),
    [`gapUnrelatedMinor${suffix}`]: to(4),

    [`marginRelated${suffix}`]: to(2),
    [`marginRelatedMajor${suffix}`]: to(4),
    [`marginRelatedMinor${suffix}`]: to(1),
    [`marginUnrelated${suffix}`]: to(4),
    [`marginUnrelatedMajor${suffix}`]: to(8),
    [`marginUnrelatedMinor${suffix}`]: to(2),

    [`padding${suffix}`]: to(8),
    [`paddingMajor${suffix}`]: to(16),
    [`paddingMinor${suffix}`]: to(4),
  } as Record<SpaceToken<Suffix>, string>;
};
