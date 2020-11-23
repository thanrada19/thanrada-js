function simulateAsyncAPI(text, time) {
  setTimeout(() => console.log(text), time);
}

simulateAsyncAPI("A", 1000);
simulateAsyncAPI("B", 500);
simulateAsyncAPI("C", 100);
