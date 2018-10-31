// Normal function:
function hello(name, message)
{
    console.log("Chào " + name + ", bạn là " + message);
}
 
hello('Nam', 'admin freetuts.net');

var domain = ["freetuts.net", 'qa.freetuts.net', 'demo.freetuts.net'];

 
// chuyển đổi thành chữ in hoa
domain.map(function(val, key){
    console.log(val.toUpperCase());   
});
 
console.log(domain);
// setTimeout
setTimeout(() => {
    console.log('3 giây đã trôi qua');
}, 3000);


// Array
let date = [31, 10, 2018]
 
// Chuyển ba giá trị vào ba biến d, m, y
let [d, m, y] = date;
 
// In kết quả
console.log("Day: " + d);   // Day: 31
console.log("Month: " + m); // Month: 10
console.log("Year: " + y);  // Year : 2018

//Lấy giá trị theo key Object
var person = {name : "nam", email : "nguyenvannamcd16tt6thdc@gmail.com"};
 
var {name : nam_name, email : nam_name} = person;
 
console.log(nam_name);    // Nam
console.log(nam_email);   // nguyenvannamcd16tt6thdc@gmail.com

// Giá trị của const
const info = {
    name : "Nguyen Van Nam",
    domain : "Freetuts.net"
};
 
console.log(info);

// const vòng lặp
var domains = [
    'freetuts.net',
    'google.com',
    'facebook.com'
];
 
for (domain of domains){
    const message = "Domain " + domain;
    console.log(message);
}
