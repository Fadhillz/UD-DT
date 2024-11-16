// membuat onloading
window.addEventListener('load', function() {
    
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.style.opacity = '0';
        
        // Menambahkan kelas 'hidden' setelah 2 detik
        setTimeout(function() {
            loadingElement.style.display = 'none';
        }, 2000); // 2000 ms = 2 detik
    }

    document.querySelectorAll('.core .row').forEach(function(row) {
        row.style.display = 'flex';
    });
});

const urlParam = new URLSearchParams(window.location.search);
const jeneng = urlParam.get('to') || '';

const candu = document.getElementById('candu');
candu.innerText = ` ${jeneng}`;

// animation on scrool
const bn = document.querySelectorAll('.an');

const anm = document.querySelectorAll('.anm');
window.addEventListener('scroll',showanm);

showanm();
function showanm() {
    const trigger = window.innerHeight / 100 * 95;

    anm.forEach((a) => {
        const boxTop = a.getBoundingClientRect().top;

        if (boxTop < trigger) {
            a.classList.add('show');
        }  else {
            a.classList.remove('show');
        }
    })
}

//buka undangan
function bukaUndangan () {
    document.querySelector('.core').style.position = 'relative';
    document.querySelector('.aws').style.top = '-100vh';
    document.getElementById('kembang').style.animation = "keluark1 2s ease forwards";
    document.getElementById('kembang2').style.animation = "keluark2 2s ease forwards";
    document.getElementById('kertas1').style.animation = "kerkel1 2s ease forwards";
    document.getElementById('kertas2').style.animation = "kerkel2 2s ease forwards";
    document.getElementById('textJudul').style.animation = "judulk 2s ease forwards";
    document.getElementById('lineart').style.animation = "lineout 3s ease  forwards";
    //untuk bagiaan tombol
    document.getElementById('textTamu').style.animation = "ktomb 2.3s ease forwards";
    document.getElementById('tombol').style.animation = "ktomb 2.3s ease forwards";
    document.getElementById('tekanTombol').style.animation = "ktomb 2.3s ease forwards";
    document.querySelector('.tamu').style.animation = "ktomb 2.3s ease forwards";
    //untuk bagian loadingnya
    document.querySelector('.slamet').style.display = "flex";
    document.querySelector('.titandannando').style.display = "flex";
    document.getElementById('core').scrollIntoView();
    bn.classList.add('anm');
};

// simplyCoutdown
simplyCountdown('.simply-countdown', {
    year: 2024,
    month: 11, 
    day: 27, 
    words: { 
        days: { singular: 'HARI', plural: 'HARI' },
        hours: { singular: 'JAM', plural: 'JAM' },
        minutes: { singular: 'MENIT', plural: 'MENIT' },
        seconds: { singular: 'DETIK', plural: 'DETIK' }
    }
});

// buka ig
function bukaigtitan() {
    window.open("https://www.instagram.com/nihtitan/", "_blank");
}

function bukaignando() {
    window.open("https://www.instagram.com/mdwifernando.98/", "_blank");
}

function bukaAkad() {
    window.open("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDAwY2ZtdWw4bGUwbjFmb2JxYThybXU5cW8gMGUwYzU0ZGVkNjQwNjU2Y2U3NzA4N2Y1MGMyNjVjYTQ2MGViMDBjMzU0MzIxMWUxZGIyY2M3NTM1NDRiMGVhYkBn&tmsrc=0e0c54ded640656ce77087f50c265ca460eb00c3543211e1db2cc753544b0eab%40group.calendar.google.com", "_blank");
}

function bukaResepsi() {
    window.open("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MG1naDZoYThtb2szaXYwNWcxcWU4b2g3ZXQgMGUwYzU0ZGVkNjQwNjU2Y2U3NzA4N2Y1MGMyNjVjYTQ2MGViMDBjMzU0MzIxMWUxZGIyY2M3NTM1NDRiMGVhYkBn&tmsrc=0e0c54ded640656ce77087f50c265ca460eb00c3543211e1db2cc753544b0eab%40group.calendar.google.com", "_blank");
}

function salinmandiri() {
    // Nomor yang ingin disalin
    const numbermandiri = "1140021939205";

    // Menggunakan Clipboard API untuk menyalin teks
    navigator.clipboard.writeText(numbermandiri)
        .then(() => {
            // Menampilkan notifikasi jika sukses
            const notification = document.getElementById("notification");
            notification.style.display = "block";
            setTimeout(() => {
                notification.style.display = "none";
            }, 2000); // Menyembunyikan notifikasi setelah 2 detik
        })
        .catch(err => {
            console.error("Gagal menyalin teks ke clipboard: ", err);
    });
}


function salinbca() {
    // Nomor yang ingin disalin
    const numberbca = "4300533413";

    // Menggunakan Clipboard API untuk menyalin teks
    navigator.clipboard.writeText(numberbca)
        .then(() => {
            // Menampilkan notifikasi jika sukses
            const notification = document.getElementById("notification");
            notification.style.display = "block";
            setTimeout(() => {
                notification.style.display = "none";
            }, 2000); // Menyembunyikan notifikasi setelah 2 detik
        })
        .catch(err => {
            console.error("Gagal menyalin teks ke clipboard: ", err);
    });
}

/**
 * ========================================
 *            Komentar orang-orang
 * ========================================
 */
window.addEventListener("DOMContentLoaded", async function () {
    const listKomentar = document.querySelector('.tempat-komentar');

    function formatTanggal(tanggal) {
        const date = new Date(tanggal);
        return new Intl.DateTimeFormat("id-ID", {
            year: "numeric", month: "long", day: "numeric"
        }).format(date);
    }

    /* ! IMPORTANT, CHANGE URL TO YOUR OWN DB ! */
    const commentsFetch = await fetch("http://localhost:3000/api/comment?appId=67377fed2b3d1e1c31024bf1", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    const comments = await commentsFetch.json();

    for (let komen of comments) {
        const div = document.createElement("div");
        div.classList.add("komentar");
        div.innerHTML = `
            <h6 class="komentar__header" name="guestName">${komen.name}</h6>
            <p class="komentar__isi" name="comment">${komen.comment}</p>
            <p class="komentar__footer" name="footer"><small>${formatTanggal(komen.date)} | ${komen.present ? "Hadir" : "Tidak hadir"}</small></p>
            `;

        listKomentar.appendChild(div);
    }
});