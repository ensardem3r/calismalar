// 1. Başlangıç sayısını belirliyoruz
let sayacDegeri = 0;

// 2. Ekrandaki sayının yazacağı yeri HTML'den buluyoruz
const sayiEkrani = document.getElementById("sayi");

// 3. Arttır butonuna tıklanınca olacaklar
document.getElementById("arttir").addEventListener("click", function() {
    sayacDegeri = sayacDegeri + 1;         // Sayıyı 1 arttır
    sayiEkrani.textContent = sayacDegeri;  // Yeni sayıyı ekrana yazdır
});

// 4. Azalt butonuna tıklanınca olacaklar
document.getElementById("azalt").addEventListener("click", function() {
    sayacDegeri = sayacDegeri - 1;         // Sayıyı 1 azalt
    sayiEkrani.textContent = sayacDegeri;  // Yeni sayıyı ekrana yazdır
});

// 5. Sıfırla butonuna tıklanınca olacaklar
document.getElementById("sifirla").addEventListener("click", function() {
    sayacDegeri = 0;                       // Sayıyı 0 yap
    sayiEkrani.textContent = sayacDegeri;  // Yeni sayıyı ekrana yazdır
});