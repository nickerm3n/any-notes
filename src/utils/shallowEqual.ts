export const shallowEqual = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};
