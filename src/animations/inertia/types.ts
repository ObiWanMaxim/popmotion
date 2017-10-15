export type InertiaProps = {
  velocity?: number,
  from?: number,
  modifyTarget?: (v: number) => number,
  power?: number,
  timeConstant?: number,
  autoStopDelta?: number
};
