
let bookName = prompt("Nhập tên sách:");
let name = prompt("Nhập tên tác giả:");
let publishYear = Number(prompt("Nhập năm xuất bản:"));

let newYear = new Date().getFullYear();

console.log("Tên sách:", bookName);
console.log("Tác giả:", name);
console.log("Năm xuất bản:", publishYear);

if (publishYear === newYear) {
    console.log("Đây là sách mới!");
} else if (newYear - publishYear <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}
