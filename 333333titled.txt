// script.js
async function withdraw() {
    const amount = document.getElementById('withdrawAmount').value;
    const userId = 'user1'; // O'zgaruvchilarni dinamik ravishda qo'llang

    const response = await fetch('/api/withdraw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, amount: Number(amount) })
    });

    const data = await response.json();
    alert(data.message);
}

// Foydalanuvchi ma'lumotlarini ko'rsatish
function displayUserInfo() {
    const userId = 'user1'; // O'zgaruvchilarni dinamik ravishda qo'llang
    const userInfoDiv = document.getElementById('userInfo');
    
    // API orqali foydalanuvchi ma'lumotlarini olish (misol uchun)
    userInfoDiv.innerHTML = `Depozit: 100000 UZS<br> Vazifalar: 0<br>`;
}

displayUserInfo();