let nameBook = prompt("Nhập tên sách: ");
let categoryBook = prompt("Thể loại sách (Khoa học / Lịch sử / Văn học / Truyện): ");
let status = prompt("Tình trạng sách (có sẵn / đã mượn): ");

if (categoryBook === "Khoa học" || categoryBook === "Lịch sử") {
    if (status === "có sẵn") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (categoryBook === "Văn học" || categoryBook === "Truyện") {
    console.log("Sách này có thể đọc giải trí");
}
