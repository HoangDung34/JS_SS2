let nameBook = prompt("Nhập tên sách: ");
let userName = prompt("Nhập tên người mượn:");
let like = prompt("Nhập 1 đến 5");

if(like == 5 || like == 4){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");  
}else if(like == 3){
    console.log("Sách này khá ổn, có thể mượn");  
}else if(like == 2 || like == 1){
    console.log("Sách này khá ổn, có thể mượn");
}