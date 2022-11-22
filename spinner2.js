let toSpin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let delay = 0;
for (const print of toSpin) {
  for (const print of toSpin) {
    setTimeout(() => process.stdout.write(print), delay);
    delay += 200;
  }
};
setTimeout(() => process.stdout.write('\n'), 3000);