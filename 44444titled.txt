// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Foydalanuvchilar ma'lumotlari
let users = {
    'user1': { 
        deposit: 100000, 
        tasksCompleted: 0, 
        lastTaskUpdate: Date.now(), 
        dailyProfit: 0 
    },
    'user2': { 
        deposit: 500000, 
        tasksCompleted: 0, 
        lastTaskUpdate: Date.now(), 
        dailyProfit: 0 
    },
};

// Vazifalarni yangilash mexanizmi
setInterval(() => {
    for (let userId in users) {
        users[userId].tasksCompleted = 0; // Vazifalarni reset qilish
    }
}, 24 * 60 * 60 * 1000); // 24 soat

// Foydalanuvchilar uchun vazifalarni bajarish
app.post('/api/complete-task', (req, res) => {
    const userId = req.body.userId;

    // Foydalanuvchining oxirgi vazifa yangilanish vaqti
    let lastUpdate = users[userId].lastTaskUpdate;

    // Agar 24 soatdan ko'proq vaqt o'tgan bo'lsa
    if (Date.now() - lastUpdate >= 24 * 60 * 60 * 1000) {
        users[userId].tasksCompleted++;
        users[userId].lastTaskUpdate = Date.now();
        users[userId].dailyProfit += 5; // Foyda qo'shish (masalan, 5 UZS)

        res.json({ message: 'Vazifa bajarildi!', tasksCompleted: users[userId].tasksCompleted });
    } else {
        res.json({ message: 'Iltimos, vazifani bajarish uchun kuting!' });
    }
});

// Pul yechib olish
app.post('/api/withdraw', (req, res) => {
    const { userId, amount } = req.body;
    const user = users[userId];

    if (user.deposit >= amount) {
        user.deposit -= amount;
        res.json({ message: `${amount} UZS yechib olindi!`, deposit: user.deposit });
    } else {
        res.json({ message: 'Yetarli mablag\' yo\'q!' });
    }
});

// Foydalanuvchilar kunlik foydasini hisoblash
function calculateDailyProfit() {
    for (let userId in users) {
        let user = users[userId];
        
        if (user.tasksCompleted === 0) {
            console.log(`${userId} uchun kunlik foyda qo'shilmaydi.`);
        } else {
            console.log(`${userId} uchun kunlik foyda: ${user.dailyProfit} UZS`);
            user.dailyProfit = 0; // Kunlik foydani yangilash
            user.tasksCompleted = 0; // Vazifalarni reset qilish
        }
    }
}

// Kunlik foydani hisoblash har 24 soatda
setInterval(calculateDailyProfit, 24 * 60 * 60 * 1000); // 24 soat

app.listen(PORT, () => {
    console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});