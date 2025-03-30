function masukkanNama() {
    var nama = document.getElementById("namaInput").value.trim();
    if (nama === "") {
        alert("Silakan masukkan nama terlebih dahulu!");
        return;
    }

    document.getElementById("halamanNama").classList.add("hidden");
    document.getElementById("halamanUcapan").classList.remove("hidden");

    ketikTeks("ucapan", "🌙 Selamat Hari Raya Idul Fitri, " + nama + "! 🌙", 50, function() {
        ketikTeks("pesan", 
            "✨Taqabbalallahu minna wa minkum, shiyamana wa shiyamakum. ✨\n" + 
            "Semoga Allah menerima amal ibadah kita semua selama bulan Ramadan dan melimpahkan berkah di hari yang suci ini. \n\n" + 
            "Di hari yang penuh kemenangan ini, Hadyan ingin mengucapkan Selamat Hari Raya Idul Fitri.\n " + 
            "Mohon maaf lahir dan batin atas segala salah dan khilaf, baik yang disengaja maupun tidak. 💖 \n\n" +
            "🌙 Selamat merayakan Idul Fitri bersama keluarga dan orang-orang tercinta. Semoga kedamaian dan keberkahan selalu menyertaimu. 🌙", 
            40, function() {
                document.getElementById("RatingContainer").style.display = "block"; 
            });
    });
}

function ketikTeks(elemenId, teks, kecepatan, callback) {
    let elemen = document.getElementById(elemenId);
    let i = 0;
    function ketik() {
        if (i < teks.length) {
            elemen.innerHTML += teks.charAt(i);
            i++;
            setTimeout(ketik, kecepatan);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }
    elemen.innerHTML = "";
    ketik();
}
function keHalamanPayment() {
    document.getElementById("halamanUcapan").classList.add("hidden");
    document.getElementById("payment").classList.add("hidden");
    document.getElementById("HalamanPayment").classList.remove("hidden");
}

function keHalamanRating() {
    document.getElementById("halamanUcapan").classList.add("hidden");
    document.getElementById("halamanRating").classList.remove("hidden");
}

function beriRating(nilai) {
    keHalamanRating();
    ketikTeks("Rating","Terima Kasih atas rating ⭐ " +nilai+ " Anda!",40);
}

function RekeningOnTap() {
    alert("Silakan hubungi Pemilik website untuk informasi lebih lanjut!");
}

function toggleMusik() {
    var audio = document.getElementById("backsound");
    var button = document.getElementById("musikButton");

    if (audio.paused) {
     audio.play();
     button.innerHTML = "🔇 Matikan Musik";
    } else {
     audio.pause();
        button.innerHTML = "🔊 Hidupkan Musik";
    }
}
const buttonheight = 65;
const buttonwidth = 350;
const maxheight = window.innerHeight - buttonheight;
const maxwidth = window.innerWidth - buttonwidth;

window.addEventListener("DOMContentLoaded",()=>{
    const buttonNO = document.getElementById('no');

    buttonNO.addEventListener("click", () =>{
        buttonNO.style.top = Math.floor(Math.random() * (maxheight + 1)) + "px";
        buttonNO.style.left = Math.floor(Math.random() * (maxwidth + 1)) + "px";
        buttonNO.style.position = "absolute";
    });
    buttonNO.addEventListener("mouseover", () =>{
        buttonNO.style.top = Math.floor(Math.random() * (maxheight + 1)) + "px";
        buttonNO.style.left = Math.floor(Math.random() * (maxwidth + 1)) + "px";
        buttonNO.style.position = "absolute";
    });
});
