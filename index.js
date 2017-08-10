// This creates a random number of async functions then mimics a Promise.all implementation

let count = 20; // Math.floor(Math.random() * 100);

let scaffold = Array(count).fill(() => {});

let resolve2s = x => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('resolve', x);
      resolve(x);
    }, 2000 * Math.random());
  });
};

scaffold.map((e, i) => {
  console.log('scaffold', i);
  let s2 = resolve2s(i);
  return async function(x) {
    console.log(i, s2);
    return x + await s2;
  };
});
