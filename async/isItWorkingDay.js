//  * Case 1

const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item.toLowerCase() === day.toLowerCase();
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// message
console.log("Mengecek Hari....");

// consuming promise with then-catch
const resolvedValue = (resolve) => {
  console.log(`Masih hari ${resolve}. Ayo kerja!`);
};
const rejectedValue = (reject) => {
  console.log(reject);
  setTimeout(() => {
    console.log("Yeay! Selamat rebahan! hehe>.<");
  }, 1000);
};

cekHariKerja("Minggu").then(resolvedValue).catch(rejectedValue);

// error handling with try-catch
const check = async () => {
  try {
    let day = await cekHariKerja("MingGU");
    console.log(`Masih hari ${day}. Ayo Kerja!`);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("Yeay bisa rebahan! :P");
  }
};
check();
