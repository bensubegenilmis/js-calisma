const now = new Date();
console.log(now);

console.log(typeof now);

console.log("Year:", now.getFullYear());

console.log("Month:", now.getMonth()+1);

console.log("Date:", now.getDate());

console.log("Date:", now.getDay());  //haftanin ilk günü pazar ve 0

console.log("Date:", now.getHours());

console.log("Date:", now.getMinutes());

console.log("Date:", now.getSeconds());

console.log("timestamp:", now.getTime());



console.log(now.toDateString());  //Fri Apr 12 2024

console.log(now.toTimeString());  //19:55:57 GMT+0300 (GMT+03:00)

console.log(now.toLocaleDateString()); //12.04.2024

console.log(now.toLocaleString()); //12.04.2024 19:56:53

console.log(now.toLocaleTimeString());  //19:57:21

const startDate = new Date("08/15/2018  9:45:00");

const nowDate = new Date();
console.log(startDate);

const diff= nowDate.getTime() - startDate.getTime();

console.log(diff);

const mins = Math.round(diff/1000/60);   //ms/s/dk çevirdik

console.log(`Girdiğimiz tarihten günümüze geçen dakika ${mins}`);

const hours = Math.round(mins/60); 

console.log(`Girdiğimiz tarihten günümüze geçen saat ${hours}`);

const days = Math.round(hours/24); 

console.log(`Girdiğimiz tarihten günümüze geçen gün ${days}`);

const year = Math.round(days/365); 

console.log(`Girdiğimiz tarihten günümüze geçen yıl ${year}`);

const timestamp = 178626102865;

console.log(new Date(178626102865));  //geçen ms cinsinden değeri saat ve tarihe çevirir







 

