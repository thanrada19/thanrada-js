function simulateAsyncAPI(text, time, callback) {
  setTimeout(() => {
    console.log(text);
    callback();
  }, time);
}

simulateAsyncAPI("A", 1000, () => {
  simulateAsyncAPI("B", 500, () => {
    simulateAsyncAPI("C", 100, () => {});
  });
});
