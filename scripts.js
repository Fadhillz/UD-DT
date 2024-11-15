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


