// Foydalanuvchi ma'lumotlari
let depositAmount = 0; // Foydalanuvchi kiritgan depozit
let completedTasks = 0; // Foydalanuvchi bajarilgan vazifalar soni
let requiredTasks = 5; // Har 100,000 UZS uchun 5 ta vazifa
let profitPerTask = 1000; // Har bir vazifa uchun olinadigan foyda
let totalProfit = 0; // Umumiy foyda

// Tasodifiy YouTube havolalari
const youtubeLinks = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=3fumBcKC6RE",
    "https://www.youtube.com/watch?v=L_jU8zBzTgA",
    "https://www.youtube.com/watch?v=U2Rj8cVg4YI",
    "https://www.youtube.com/watch?v=9bZkp7q19f0"
];

// Vazifa bajarish funktsiyasi
function updateTaskStatus() {
    let remainingTasks = requiredTasks - completedTasks;
    let taskStatus = document.getElementById('taskStatus');
    
    // Vazifa holatini yangilash
    taskStatus.innerHTML = `
        <p>Bajargan vazifalar soni: ${completedTasks}</p>
        <p>Qolgan vazifalar soni: ${remainingTasks}</p>
    `;
}

// Depozit kiritish
function makeDeposit() {
    let amount = parseInt(document.getElementById('depositAmount').value);
    
    if (amount > 0) {
        depositAmount += amount; // Depozitni yangilash
        alert(`Mablag' 9860 2466 0286 8639 hisob raqamiga ${amount} UZS o'tkazildi.`);
        updateDepositDisplay();
    } else {
        alert('Iltimos, to\'g\'ri summani kiriting.');
    }
}

// Foydani yechib olish
function withdrawProfit() {
    let account = document.getElementById('withdrawAccount').value;
    let withdrawAmount = parseInt(document.getElementById('withdrawAmount').value);
    
    if (withdrawAmount <= totalProfit && withdrawAmount > 0) {
        totalProfit -= withdrawAmount; // Foydadan yechib olish
        alert(`Yechib olish so'rovi yuborildi. ${account} hisob raqamiga ${withdrawAmount} UZS o'tkaziladi.`);
        document.getElementById('totalProfit').innerText = totalProfit + " UZS";
    } else {
        alert('Yechib olish summasi noto‘g‘ri yoki sizda yetarlicha foyda yo‘q.');
    }
}

// Vazifani bajarish
function completeTask() {
    if (completedTasks < requiredTasks) {
        completedTasks++;
        totalProfit += profitPerTask; // Foyda hisoblash
        
        // Tasodifiy YouTube havolasini olish
        const randomIndex = Math.floor(Math.random() * youtubeLinks.length);
        const randomLink = youtubeLinks[randomIndex];
        document.getElementById('randomLink').innerHTML = `<p>Vazifa: <a href="${randomLink}" target="_blank">Bu havolaga bosing</a></p>`;
        
        updateTaskStatus();
        document.getElementById('totalProfit').innerText = totalProfit + " UZS";
    } else {
        alert('Siz barcha vazifalarni bajardingiz!');
    }
}

// Dastlabki holatni yangilash
updateTaskStatus();

function updateDepositDisplay() {
    document.getElementById('depositAmount').innerText = depositAmount + " UZS";
}