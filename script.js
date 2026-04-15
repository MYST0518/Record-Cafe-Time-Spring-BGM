const tracks = [
    { name: "-恋のレコードカフェ〜bittersweet-love", artist: "Xme", file: "-恋のレコードカフェ〜bittersweet-love_Xme.mp3" },
    { name: "A Spring Left on the Table", artist: "2525Family", file: "A Spring Left on the Table_2525Family.wav" },
    { name: "Acoustic Morning Dew", artist: "ANZLY", file: "Acoustic Morning Dew_ANZLY.wav" },
    { name: "Amber Silence - 琥珀の静寂", artist: "golio_13", file: "Amber Silence - 琥珀の静寂_golio_13.wav" },
    { name: "Amber Time", artist: "グリニッジfromカラフル☆ドールズ - 藍野シアン", file: "Amber Time_グリニッジfromカラフル☆ドールズ - 藍野シアン.wav" },
    { name: "Blooming After Morning", artist: "YEN - jizomae", file: "Blooming After Morning_YEN - jizomae.wav" },
    { name: "Cafe_du_Printemps", artist: "Hizuru Saito", file: "Cafe_du_Printemps_Hizuru Saito.wav" },
    { name: "Cherry Blossom Static", artist: "ももももももももものうち弁当 465円", file: "Cherry Blossom Static_ももももももももものうち弁当 465円.mp3" },
    { name: "Céilí Orbit", artist: "VIREL", file: "Céilí Orbit_VIREL.wav" },
    { name: "Faint Breath Syndrome", artist: "Ωdim⁷", file: "Faint Breath Syndrome_Ωdim⁷.wav" },
    { name: "Gentle Air柔らかな風の中で", artist: "Liam", file: "Gentle Air柔らかな風の中で_Liam.flac" },
    { name: "Haru Jazz", artist: "TAITAKU 🎧", file: "Haru Jazz_TAITAKU 🎧.mp3" },
    { name: "If Springtime", artist: "HMatsui", file: "If Springtime_HMatsui.wav" },
    { name: "Le Souffle du Printemps -Record Cafe Time- (feat. Lucie Fernandez)", artist: "mens brief factory", file: "Le Souffle du Printemps -Record Cafe Time- (feat. Lucie Fernandez)_mens brief factory.wav" },
    { name: "MIDNIGHT PORCH", artist: "Val", file: "MIDNIGHT PORCH_Val.wav" },
    { name: "On Spring Weekdays", artist: "owl_digitalart", file: "On Spring Weekdays_owl_digitalart.mp3" },
    { name: "On s’asseyait près de la fenêtre", artist: "Jack_Ashinaga", file: "On s’asseyait près de la fenêtre_Jack_Ashinaga.mp3" },
    { name: "SEKISHUN〜惜春〜", artist: "AI収益化ログ", file: "SEKISHUN〜惜春〜_AI収益化ログ.mp3" },
    { name: "Sakura", artist: "Ryuu", file: "Sakura - Ryuu.wav" },
    { name: "Sommeil léger.", artist: "AinN3gRaM", file: "Sommeil léger._AinN3gRaM.mp3" },
    { name: "Spinning", artist: "深海魚", file: "Spinning_深海魚.wav" },
    { name: "Spring Café on Record", artist: "夜更カシ症候群", file: "Spring Café on Record_夜更カシ症候群.wav" },
    { name: "Spring Letters on the Breeze", artist: "TA KA", file: "Spring Letters on the Breeze_TA KA.wav" },
    { name: "Spring Light Memory ", artist: "J-popの館（J-popMuseum）", file: "Spring Light Memory _J-popの館（J-popMuseum）.mp3" },
    { name: "Spring Morning_s Reverie", artist: "MAYA", file: "Spring Morning_s Reverie_MAYA.wav" },
    { name: "Spring Needle 〜湯気の向こうのメロディ〜", artist: "🪐YB🌟", file: "Spring Needle 〜湯気の向こうのメロディ〜_🪐YB🌟.mp3" },
    { name: "Spring Pastorale", artist: "鈴木憂一(Highdrama)", file: "Spring Pastorale_鈴木憂一(Highdrama).wav" },
    { name: "Spring, Stay", artist: "Ryoccom", file: "Spring, Stay_Ryoccom.wav" },
    { name: "Springdust", artist: "大吟醸【JP】", file: "Springdust_大吟醸【JP】.wav" },
    { name: "Springtime has come", artist: "Four Leaf Clover", file: "Springtime has come_Four Leaf Clover.mp3" },
    { name: "TiME MACHiNE", artist: "みずたまりんご", file: "TiME MACHiNE_みずたまりんご.wav" },
    { name: "a Record, a Cafe, and Time", artist: "GOKIGEN Tiger", file: "a Record, a Cafe, and Time_GOKIGEN Tiger.wav" },
    { name: "onemorecuponarainyday", artist: "結音", file: "onemorecuponarainyday_結音.mp3" },
    { name: "「ととのう」遠野叶　ハワイアン×島唄×ジャズ風", artist: "おさるなもんきち", file: "「ととのう」遠野叶　ハワイアン×島唄×ジャズ風_おさるなもんきち.wav" },
    { name: "うつろい", artist: "∫varts", file: "うつろい_∫varts.wav" },
    { name: "かおり、めぶき、こだま。", artist: "DeVoche - DeVoche a.k.a. monyop", file: "かおり、めぶき、こだま。_DeVoche - DeVoche a.k.a. monyop.mp3" },
    { name: "さよならの未来", artist: "関西方麺", file: "さよならの未来_関西方麺.wav" },
    { name: "そのStylus、春を告げる", artist: "Strix8", file: "そのStylus、春を告げる_Strix8.mp3" },
    { name: "それでいい", artist: "haizancore", file: "それでいい_haizancore.wav" },
    { name: "やわらかな時間-～mellow-time～", artist: "vareal", file: "やわらかな時間-～mellow-time～_vareal.mp3" },
    { name: "コーヒーを淹れようか", artist: "でもん", file: "コーヒーを淹れようか_でもん.wav" },
    { name: "ブラックコーヒー", artist: "MakotoAI", file: "ブラックコーヒー_MakotoAI.wav" },
    { name: "ログハウス カフェ", artist: "RYU_GiN", file: "ログハウス カフェ_RYU_GiN.mp3" },
    { name: "午後のカフェにて - Record Cafe Remix", artist: "Fmm66", file: "午後のカフェにて - Record Cafe Remix_Fmm66.wav" },
    { name: "思い出は午後三時", artist: "Stingray Tokyoska", file: "思い出は午後三時_Stingray Tokyoska.mp3" },
    { name: "想い出のコーヒー", artist: "茶トラ-Brown tiger cat music-", file: "想い出のコーヒー_茶トラ-Brown tiger cat music-.wav" },
    { name: "旅のはじまり", artist: "しらたま", file: "旅のはじまり_しらたま.mp3" },
    { name: "春のノスタルジック・カフェ", artist: "旧雅之", file: "春のノスタルジック・カフェ_旧雅之.mp3" },
    { name: "春の木漏れ陽", artist: "Yu_My_Love", file: "春の木漏れ陽_Yu_My_Love.mp3" },
    { name: "春の芽吹き", artist: "菅野愛", file: "春の芽吹き_菅野愛.mp3" },
    { name: "春よ", artist: "Bianca", file: "春よ_Bianca.wav" },
    { name: "春を待つ君へ (Instrumental Arrangement)", artist: "ELEMAYU", file: "春を待つ君へ (Instrumental Arrangement)_ELEMAYU.wav" },
    { name: "春を待つ蕾", artist: "シオン🔥🐲ドラゴニュートP", file: "春を待つ蕾_シオン🔥🐲ドラゴニュートP.wav" },
    { name: "木漏れ日Cafe", artist: "NonLeo", file: "木漏れ日Cafe_NonLeo.wav" },
    { name: "桃の日向 ", artist: "オオタカ三鷹", file: "桃の日向 _オオタカ三鷹.mp3" },
    { name: "桜がきれいだよ", artist: "でんでろ３", file: "桜がきれいだよ_でんでろ３.wav" },
    { name: "琥珀色の春の午後", artist: "みつじ", file: "琥珀色の春の午後_みつじ.mp3" },
    { name: "笑顔路", artist: "AIVID", file: "笑顔路_AIVID.m4a" },
    { name: "過ぎ去りし日々に口笛を", artist: "真夜中のラジオ", file: "過ぎ去りし日々に口笛を_真夜中のラジオ.mp3" },
    { name: "遠い日の花吹雪", artist: "天汐香弓", file: "遠い日の花吹雪_天汐香弓.mp3" }
];

let currentTrackIndex = 0;
let isPlaying = false;
const audio = new Audio();

const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const playlistContent = document.getElementById('playlist-content');
const disk = document.getElementById('disk');

// Initialize Playlist
function initPlaylist() {
    playlistContent.innerHTML = '';
    tracks.forEach((track, index) => {
        const item = document.createElement('div');
        item.className = `track-item ${index === currentTrackIndex ? 'active' : ''}`;
        item.innerHTML = `
            <div class="track-index">${(index + 1).toString().padStart(2, '0')}</div>
            <div class="track-details">
                <div class="track-name">${track.name}</div>
                <div class="track-artist">${track.artist}</div>
            </div>
            <div class="track-duration">--:--</div>
        `;
        item.addEventListener('click', () => loadTrack(index, true));
        playlistContent.appendChild(item);
    });
}

const BASE_URL = 'https://pub-8e280363fb0b4b6390ba4e9befe14244.r2.dev/'; // Updated to R2 bucket URL

function loadTrack(index, autoPlay = false) {
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];
    // Encode filename to handle special characters like spaces, #, and emojis
    const encodedFile = encodeURIComponent(track.file);
    audio.src = `${BASE_URL}${encodedFile}`;
    trackName.textContent = track.name;
    trackArtist.textContent = track.artist;

    // Update Playlist UI
    document.querySelectorAll('.track-item').forEach((item, i) => {
        item.classList.toggle('active', i === currentTrackIndex);
    });

    if (autoPlay) {
        playTrack();
    } else {
        pauseTrack();
    }
}

function playTrack() {
    isPlaying = true;
    audio.play().catch(e => console.log("Auto-play blocked or file missing"));
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    disk.classList.add('playing');
}

function pauseTrack() {
    isPlaying = false;
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    disk.classList.remove('playing');
}

function togglePlay() {
    if (isPlaying) pauseTrack();
    else playTrack();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex, true);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex, true);
}

function updateProgress() {
    const { duration, currentTime } = audio;
    if (isNaN(duration)) return;
    const progressPercent = (currentTime / duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
}

function setProgress(e) {
    const width = progressBar.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function formatTime(time) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
}

// Security: Disable Right Click
document.addEventListener('contextmenu', e => e.preventDefault());

// Event Listeners
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextTrack);
progressBar.addEventListener('click', setProgress);
volumeSlider.addEventListener('input', (e) => audio.volume = e.target.value);

// Keyboard Controls
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    }
});

// Init
initPlaylist();
loadTrack(currentTrackIndex);
