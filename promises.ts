/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function func1(): string | number {
  return 1;
}

async function func2(): Promise<string | number> {
  return "A";
}

/*
console.log("#1: ", func1());
console.log(
  "#2: ",
  func2().then((result) => console.log(result))
);
*/

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function func3(): Promise<void> {
  const awaitVal = await func2();
  console.log("waiting " + awaitVal);
}

//func3();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForMyPromise() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("done!");
    }, 1000);
  });

  const result = await promise;
  console.log("my promise is " + result);
}

//waitForMyPromise();

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

/* 
new Promise((resolve) => {
  setTimeout(() => {
    resolve("done!");
  }, 1500);
}).then((r) => console.log("then my other promise is " + r)); 
*/

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// this function wraps the asynchronous setTimeout in a Promise
// use this function to execute code after the Promise returns
// from the function fulfilled
function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function func4() {
  wait(2000).then(() => console.log("it's been two seconds!"));
}

func4();

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const randomPromise = (random: number) =>
  new Promise((resolve, reject) => {
    if (random > 0.5) {
      resolve("resolved!");
    } else {
      reject("rejected!");
    }
  });

/* for (let i = 0; i < 10; i++) {
  const random = Math.random();
  wait(2000 + random * 1000)
    .then(() => randomPromise(random))
    .then((result) => console.log("random try #", i, result))
    .catch((error) => console.error("random try #", i, error));
}
 */
/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

const randomPromise2 = async (i: number) => {
  const random = Math.random();

  await wait(3000 + random * 1000);

  try {
    const result = await randomPromise(random);
    console.log("random #", i, result);
  } catch (error) {
    console.error("random #", i, error);
  }
};

for (let i = 1; i < 10; i++) {
  randomPromise2(i);
}

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

console.log("END OF PROGRAM");
