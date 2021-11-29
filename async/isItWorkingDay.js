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
  console.log("Selamat berlibur dan menikmati waktu luang!");
};
const finalValue = () => {
  setTimeout(() => {
    console.log("Cek hari lain?");
  }, 1000);
};

cekHariKerja("Sabtu")
  .then(resolvedValue)
  .catch(rejectedValue)
  .finally(finalValue);

// error handling with try-catch
const check = async () => {
  try {
    let day = await cekHariKerja("Rabu");
    console.log(`Hari ${day} adalah hari kerja. Selamat bekerja!`);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("Selamat berlibur dan istirahat!");
  } finally {
    setTimeout(() => {
      console.log("Cek hari lain?");
    }, 1000);
  }
};
check();
