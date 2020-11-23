function simulateAsyncAPI(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, time);
  });
}

simulateAsyncAPI("A", 1000)
  .then(() => {
    return simulateAsyncAPI("B", 500);
  })
  .then(() => {
    return simulateAsyncAPI("C", 100);
  });
