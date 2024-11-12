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
    const trigger = window.innerHeight / 5 * 4;

    anm.forEach((a) => {
        const boxTop = a.getBoundingClientRect().top;

        if (boxTop < trigger) {
            a.classList.add('show');
        }  else {
            a.classList.remove('show');
        }
    })
}

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
        days: { singular: 'hari', plural: 'hari' },
        hours: { singular: 'jam', plural: 'jam' },
        minutes: { singular: 'menit', plural: 'menit' },
        seconds: { singular: 'detik', plural: 'detik' }
    }
});

window.addEventListener("load", function() {
    const form = document.querySelector('.konfir');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
        method: 'POST',
        body: data,
    })
        .then(() => {
        const reload = confirm("Terimakasih Sudah Mengkonfirmasi Kehadiranmu. Apakah Anda ingin memuat ulang halaman untuk menampilkan pesan anda? (Ya/Tidak)");
                    if (reload) {
                        window.location.reload();
                    }
                })
                .catch(error => console.error('Error posting data:', error));
        })
    });

// Connect API to GSheet
// document.addEventListener("DOMContentLoaded", function() {
//     fetch("https://sheet.best/api/sheets/9cff6333-bd1e-455d-8c30-0125785bc209")
//         .then(response => response.json())
//         .then(data => {
//             const tbody = document.getElementById('data-tbody');
//             data.forEach(item => {
//                 const row = document.createElement('div');
//                 row.innerHTML = `
//                     <p>${item.tanggal}</p>
//                     <p>${item.Nuama}</p>
//                     <p>${item.jumlahHadir}</p>
//                     <p>${item.status}</p>
//                     <p>${item.komentar}</p>
//                 `;
//                 row.classList.add('data-komen');
//                 tbody.appendChild(row);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// });