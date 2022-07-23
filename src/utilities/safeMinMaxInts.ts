export const safeMinMaxInts = (min: number, max: number) => ({
  safeMin: Math.round(Math.min(min ?? 8, max ?? 16)),
  safeMax: Math.round(Math.max(min ?? 8, max ?? 16)),
});
