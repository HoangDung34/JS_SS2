let username = prompt("Mời nhập tên người dùng");
console.log("usernaem", username);

let role = prompt("Mời nhập vai trò admin || student || guest");
let account_balance = prompt("Mời nhập số dư tài khoản");
let card_status = prompt("mời nhập trạng thái thẻ");
let date = prompt("số ngày quá hạn sách sách");

//2.kiểm tra quyền truy cập dựa vào vai trò
if(role == "admin"){
    console.log(`chào ${role} bạn có thể toàn quyền hệ thống!`);
}else if(role == "student"){
    console.log(`chào ${role} bạn có thể mượn sách`);
}else if(role == "guest"){
    console.log(`chào ${role} bạn chỉ có thể đọc sách tại chỗ`)
}else{
    console.log("lỗi vai trò");
}

//3. kiểm tra điều kiện mượn sách
let check = username != null && (role == "admin" || role == "student") && account_balance > 0 && card_status == true;
if(check){
    console.log("đủ điều kiện mượn sách");
}else{
    console.log("Không đủ điều kiện");
}

//4. Tính phí trả sách dựa vào ngày quá hạn

if(date == 0){
    console.log("cảm ơn bạn đã đúng hạn");
}else if(date >= 1 && date <= 5){
    console.log("tổng tiền phạt", date*5000);
}else if(date <= 10){
    console.log("tổng tiền phạt", date*10000);
}else if(date > 10){
    console.log("phạt 200.000, khóa tài khoản");
    card_status = false
}else{
    console.log(`${date} không hợp lệ!`);
}