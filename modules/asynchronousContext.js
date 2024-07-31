// Asynchronous Context is known as node js storage, that created independent storage for each cluster.

const { AsyncLocalStorage } = require("node:async_hooks");

const storage = new AsyncLocalStorage();

const initValue = { name: "Deepak" };

const test = () => {
  const data = storage.getStore();
  console.log(data);
};

const AsynchronousContext = () => {
  // Basic Initialization
  // let id = 1;
  // let interval = setInterval(()=>{
  //     if(id>=5) clearInterval(interval);
  //     storage.run({...initValue,id:id++},()=>{
  //         test();
  //     })
  // })

  // Snapshot
  const store1 = storage.run(123, () => AsyncLocalStorage.snapshot());
  const store2 = storage.run(234, () => AsyncLocalStorage.snapshot());
  const store3 = storage.run(321, () =>
    store1(() => {
        console.log("store1")
        console.log(storage.getStore());
    }),
    store2(() => {
        console.log("store2")
      console.log(storage.getStore());
    }),
  );
  console.log(storage.getStore())
};

module.exports = AsynchronousContext;
