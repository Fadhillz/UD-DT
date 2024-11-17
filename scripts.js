// Function to detect if the user is on an iPhone
function isIphone() {
    return /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
}

// Function to apply CSS changes and show notification if on iPhone
function applyIphoneStyles() {
    if (isIphone()) {
        // Hide elements with the class 'noniphone'
        const iphoneConfig = document.querySelectorAll('.noniphone');
        iphoneConfig.forEach(iphone => {
            iphone.style.display = 'none';
        });

        // Create and show notification
        const notification = document.createElement('div');
        notification.textContent = "You are using Safari. Some features may not work optimally. We apologize for the inconvenience.";
        notification.style.position = 'fixed';
        notification.style.top = '10px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#ffcc00';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000';
        notification.style.color = '#000';
        document.body.appendChild(notification);

        // Remove notification after 2 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

// Run the function on page load
window.onload = applyIphoneStyles;


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
    document.getElementById('pause-btn').style.opacity = '1';
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
 *            Handle for Comments
 * ========================================
 */
window.addEventListener("DOMContentLoaded", async function () {
    const secretKey = "67377fed2b3d1e1c31024bf1";
    const listKomentar = document.querySelector('.tempat-komentar');
    const form = document.querySelector('.konfir');


    /* Format date to DD MMMM YYYY */
    function formatTanggal(tanggal) {
        const date = new Date(tanggal);
        return new Intl.DateTimeFormat("id-ID", {
            year: "numeric", month: "long", day: "numeric"
        }).format(date);
    }


    async function loadComments() {
        /* Check if parent element has a child */
        if (listKomentar.hasChildNodes()) {
            listKomentar.innerHTML = "";
        }


        /* ! IMPORTANT, CHANGE URL TO YOUR OWN DB ! */
        const commentsFetch = await fetch(`https://apinya-pais.vercel.app/api/comment?appId=${secretKey}`, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        const comments = await commentsFetch.json();


        if (!comments.length) {
            const div = document.createElement("div");
            div.classList.add("komentar-empty");
            div.innerHTML = "<p class='komentar__empty'>Belum ada komentar</p>";
            listKomentar.appendChild(div);
        }


        for (let komen of comments) {
            const div = document.createElement("div");
            div.classList.add("komentar");
            div.innerHTML = `
            <h6 class="komentar__header" name="guestName">${komen.name}</h6>
            <p class="komentar__isi" name="comment">${komen.comment}</p>
            <p class="komentar__footer" name="footer"><small>${formatTanggal(komen.date)} | ${komen.present ? "Hadir" : "Tidak hadir"}</small></p>`;


            listKomentar.appendChild(div);
        }
    }
    // trigger
    loadComments();


    /* submit form */
    form.addEventListener("submit", async function (e) {
        e.preventDefault();


        const name = form.querySelector('input[name="guestName"]');
        const comment = form.querySelector('textarea[name="comment"]');
        const present = form.querySelector('select[name="status"]');


        const data = {
            secretKey,
            guestName: name.value,
            comment: comment.value,
            status: present.value
        };


        const response = await fetch("https://apinya-pais.vercel.app/api/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });


        const responseJson = await response.json();
        if (response !== 201 || responseJson.error) {
            /* handle error here */
        }


        /* Reset form input value */
        name.value = "";
        comment.value = "";


        /* Alert? */
        Swal.fire({
            title: "Pesan Terkirim :D",
            html: `Terimakasih <b>${jeneng}</b>`,
            timer: 2000,
            timerProgressBar: true,
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        // code here
        loadComments();
    });
});



// Musik
const jikaRotasi = document.getElementsByClassName('rotating');



const playButton = document.getElementById("tekanTombol");
    const pauseButton = document.getElementById("pause-btn");
    const audio1 = document.getElementById("audio1");
    const audio2 = document.getElementById("audio2");
    audio1.volume = 0.2;

    let isPlaying = false; // Menyimpan status apakah audio sedang diputar

    playButton.addEventListener("click", () => {
        // Jika audio sedang dimainkan, hentikan keduanya dan reset
        if (isPlaying) {
            stopAudio();
            playButton.textContent = "Play Audio";
            return;
        }

        // Mulai memutar audio 1 terlebih dahulu
        playButton.textContent = "Stop Audio";
        audio1.play();
        isPlaying = true;

        // Setelah audio 1 selesai, mulai audio 2 dalam mode loop
        audio1.onended = () => {
            audio2.play();
        };
    });

    pauseButton.addEventListener("click", () => {
        // Cek apakah audio sedang diputar
        if (isPlaying) {
            if (!audio1.paused) {
                audio1.pause();
            } else if (!audio2.paused) {
                audio2.pause();
            }
            isPlaying = false;
            pauseButton.classList.remove("rotating");
        } else {
            // Melanjutkan audio yang dipause
            if (audio1.paused && audio1.currentTime > 0 && !audio2.currentTime) {
                audio1.play();
            } else if (audio2.paused && audio1.ended) {
                audio2.play();
            }
            isPlaying = true;
            pauseButton.classList.add("rotating");
        }
    });


    function stopAudio() {
        audio1.pause();
        audio1.currentTime = 0;
        audio2.pause();
        audio2.currentTime = 0;
        isPlaying = false;
    }
