function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("getData", dataId);
        resolve("success");
        // reject("error");
        // if (getNextData) {
        //   getNextData();
        // }
      }, 3000);
    });
  }
  (async function() {
    console.log("fetching data1...");
    await getData(1);
    console.log("fetching data2...");
    await getData(2);
    console.log("fetching data3...");
    await getData(3);
    console.log("fetching data4...");
    await getData(4);
    console.log("fetching data5...");
    await getData(5);
  })();