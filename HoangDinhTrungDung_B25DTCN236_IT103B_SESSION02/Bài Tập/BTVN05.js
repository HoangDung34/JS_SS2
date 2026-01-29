let nameBook = prompt("Nhập tên sách: ");
let status = prompt("Trạng thái sách (có sẵn/đã mượn):");
let publishYear = Number(prompt("Năm xuất bản:"));

let newYear = new Date().getFullYear();

if(status = "có sẵn" && newYear - publishYear <= 5){
    console.log("Sách này mới và có sẵn để mượn");
}else if(status == "đã mượn" && newYear - publishYear <= 10){
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
}else if(status == "đã mượn" && newYear - publishYear > 10){
    console.log("Sách này đã mượn và khá cũ");
}else if(status == "có sẵn" && newYear - publishYear > 5){
    console.log("Sách này có sẵn nhưng đã lâu năm"); 
}