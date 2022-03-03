//this is just a function to make 24hr time, not important to understand
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}