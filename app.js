let isim = prompt("İsim girin:");
let vize1 = Number(prompt("1.vize notunu girin: "));
let vize2 = Number(prompt("2.vize notunu girin: "));
let final = Number(prompt("Final notunu girin: "));

let sonuc = (vize1*0.3) + (vize2*0.3) + (final*0.4);
if(sonuc>50){
    alert("Tebrikler " + isim + " geçtin, notun: " + sonuc);
}else{
    alert("Maalesef " + isim + " kaldın, notun: " + sonuc);
}