/**
 *
 * @description Return seconds in Hours Minutes Seconds format
 */
const secondsToHMS = (seconds: number): string => {
  if (seconds === 0) return "0 Second";

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
  const mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
  const sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

  const output = hDisplay + mDisplay + sDisplay;
  return output;
};

export default secondsToHMS;
