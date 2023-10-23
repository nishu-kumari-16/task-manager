/**
 * Calculates the number of pages based on a total count and page size.
 * @param {number} total - The total count of items.
 * @param {number} pageSize - The number of items per page.
 * @returns {number} - The calculated number of pages.
 */
export const getPageCountFromTotal = (total: number, pageSize: number) =>
  Math.ceil(total / pageSize);

/**
 * Throttled function that limits the invocation of the provided function to once per specified delay.
 * @param func The function to throttle.
 * @param delay The number of milliseconds to throttle the function.
 * @returns A throttled function.
 */
export const throttle = (
  func: (...args: any[]) => void,
  delay: number
): ((...args: any[]) => void) => {
  let isThrottled = false;
  let lastArgs: any[] | null = null;
  // eslint-disable-next-line no-undef
  let timerId: NodeJS.Timeout | null = null;

  const execute = () => {
    if (lastArgs) {
      func(...lastArgs);
      lastArgs = null;
      isThrottled = true;
      timerId = setTimeout(() => {
        isThrottled = false;
        if (lastArgs) {
          execute();
        }
      }, delay);
    }
  };

  return (...args: any[]) => {
    if (!isThrottled) {
      func(...args);
      isThrottled = true;
      timerId = setTimeout(() => {
        isThrottled = false;
        if (lastArgs) {
          execute();
        }
      }, delay);
    } else {
      lastArgs = args;
    }
  };
};
