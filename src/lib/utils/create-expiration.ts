/**
 * Creates a `Date` object that is a certain number of milliseconds in the future.
 * @param milliseconds the number of milliseconds before the expiration date
 */
export const createExpiration = (milliseconds: number) => {
  return new Date(new Date().valueOf() + milliseconds);
};
