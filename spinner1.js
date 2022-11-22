//process.stdout.write('hello from spinner1.js... \rheyyy\n');
let toSpin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let delay = 0;
for (const print of toSpin) {
  for (const print of toSpin) {
    setTimeout(() => {
      process.stdout.write(print);
    }, delay);
    delay += 200;
  }
}


