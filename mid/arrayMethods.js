// * Case 1: Array Methods in JavaScript


// ! Method Array.prototype.reverse()
/**
 * * Method reverse() digunakan untuk membalikan urutan element array 
 * * Mengubah array asal
 */
const num_reverse = [1, 2, 3, 4, 5];
console.log(num_reverse.reverse());
console.log(num_reverse);


// ! Method Array.prototype.concat()
/**
 * * Method concat() digunakan untuk menggabungkan array
 * * Menerima variable berisi array atau array literal
 * * Tidak mengubah array asal
 */
const num_concat = [5, 6, 7, 8, 9, 10]
const char_concat = ["a", "b", "c", "d", "e"];

console.log(num_concat.concat(char_concat));
console.log(num_concat.concat(char_concat, 100, 99, 98, 97));
console.log(num_concat);


// ! Method Array.prototype.slice()
/**
 * * Method slice() digunakan untuk mengambil/men-copy sebagian element array
 * * Mendapatkan 2 argumnent:
 * *    1) Argument pertama (opsional), index awal pengambilan element
 * *       - Jika diisi angka (+), element diambil dari index tsb
 * *       - Jika diisi angka (-), dihitung dari element terakhir
 * *    2) Argument kedua (opsional), index akhir pengambilan
 * *       - Jika diisi angka (+), element diambil sampai index tsb (tapi index tsb tidak termasuk)
 * *       - Jika diisi angka (-), dihitung dari element terakhir
 * *       - Jika tidak diisi, element akan diambil sampai element terakhir
 * *    3) Jika tanpa argument, slice() akan mengambil seluruh element (di-copy)
 * * Method slice() tidak mengubah array asal
 */
const num_slice = [2, 4, 6, 8, 10, 12, 16, 20];

console.log(num_slice.slice(3, 6));
console.log(num_slice.slice());
console.log(num_slice.slice(-5, -2));


// ! Method Array.prototype.splice()
/**
 * * Method splice() digunakan untuk menambah atau mengurangi element array
 * * Method splice() bisa menerima 3 argument:
 * *    1) Argument pertama, index awal penambahan atau pengurangan element
 * *       - Jika diisi angka (-), dihitung dari element terakhir
 * *    2) Argument kedua (opsional), jumlah element yang ingin dihapus,
 * *       - Jika diisi 0, maka tidak ada element yang dihapus
 * *       - Jika tidak diisi, semua sisa element akan dihapus mulai dari index pd arg 1
 * *    3) Argument ketiga dan seterusnya (opsional), bisa diisi element baru yg ingin ditambahkan
 * * Method ini akan mengubah array asal
 */
const num_splice = [3, 5, 7, 9, 11, 13, 15];

console.log(num_splice.splice(4, 2));
console.log(num_splice.splice(-4, 2));
console.log(num_splice.splice(4));
console.log(num_splice);


// ! Method Array.prototype.join()
/**
 * * Method join() menggabungkan element array menjadi String
 * * Menerima 1 argument yaitu karakter pembatas sbg pemisah antar element
 * * Jika arg tidak ditulis, default-nya dipisah dengan koma (,)
 * * Kebalikan method split() pada String Object
 */
const fruits = ["mango", "banana", "apple", "cherry", "avocado"];

console.log(fruits.join());
console.log(fruits.join(" "));
console.log(fruits.join("-"));
console.log(fruits.join(", "));
console.log(fruits);


// ! Method Array.prototype.push()
/**
 * * Method push() digunakan untuk menambah element baru dari posisi element terakhir
 * * akan mengubah nilai array asal
 */

fruits.push("Kedondong", "Melinjo");
console.log(fruits);


// ! Method Array.prototype.pop()
/**
 * * Method pop() digunakan untuk mengluarkan dan menghapus 1 element dari posisi element terakhir
 * * akan mengubah array asal
 */

fruits.pop();
console.log(fruits);


// ! Method Array.prototype.unshift()
/**
 * * Method unshift() digunakan untuk menambah element baru di posisi awal array
 * * Method ini akan mengubah array asal
 */
fruits.unshift("grape", "coconut");
console.log(fruits);


// ! Method Array.prototype.shift()
/**
 * * Method shift() digunakan untuk mengeluarkan 1 element dari posisi awal array
 * * Method ini akan mengubah array asal
 */
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);


// ! Method Array.prototype.includes()
/**
 * * Method includes() digunakan untuk mengecek "keberadaan" suatu element dalam array
 * * Method ini mengembalikan nilai boolean, jika ada = true, jika tidak ada = false
 * * bisa memiliki 2 argument:
 * *    1) Argument pertama, element yang akan dicari
 * *    2) Argument kedua (opsional), index awal pengecekan,
 * *       - Jika tidak diisi, dianggap 0, akan dicari dari index paling awal 
 * * Method ini tidak akan mengubah array asal
*/

const animals = ["cat", "dog", "tiger", "monkey", "tapir"];
let checkAnimal = animals.includes("monkey");
console.log(checkAnimal);
console.log(animals);


// ! Method Array.prototype.sort()
/**
 * * Method sort() digunakan untuk proses pengurutan element pada array
 * * Menerima 1 argument (opsional) berupa callback functions yg berfungsi untuk mengatur proses pengurutan
 * * Jika argument tidak diisi, proses pengurutan menggunakan nomor urut unicode
 * * Method ini mengubah array asal
 */

let sortingAnimals = animals.sort();
console.log(sortingAnimals);
console.log(animals);