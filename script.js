document.getElementById("withdrawButton").addEventListener("click", function() {
    const withdrawInput = document.getElementById("withdrawInput").value;
    const withdrawCode = document.getElementById("withdrawCode").value;
    const withdrawAmount = parseInt(document.getElementById("withdrawAmount").value.replace(/[^0-9]/g, ''));

    // Foydalanuvchi kiritgan kodni tekshirish
    if (withdrawCode === "") {
        alert("Iltimos, yechib olish kodi kiritilsin.");
        return;
    }

    if (withdrawInput > withdrawAmount) {
        alert("Siz kiritgan summa yechib olish mumkin bo'lgan summadan katta.");
    } else {
        alert("Pul muvaffaqiyatli yechib olindi: " + withdrawInput + " UZS. Yechib olish kodi: " + withdrawCode);
        // Bu yerda, yechib olish jarayonini amalga oshirish uchun kod qo'shishingiz mumkin.
    }
});

document.getElementById("depositButton").addEventListener("click", function() {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositCode = document.getElementById("depositCode").value;

    if (depositCode === "") {
        alert("Iltimos, depozit kodi kiritilsin.");
        return;
    }

    alert("Depozit muvaffaqiyatli qo'shildi: " + depositAmount + " UZS. Depozit kodi: " + depositCode);
    // Bu yerda, depozit qo'shish jarayonini amalga oshirish uchun kod qo'shishingiz mumkin.
});

document.getElementById("taskButton").addEventListener("click", function() {
    const taskCode = document.getElementById("taskCode").value;

    if (taskCode === "") {
        alert("Iltimos, vazifa bajarish kodi kiritilsin.");
        return;
    }

    alert("Vazifa muvaffaqiyatli bajarildi. Vazifa bajarish kodi: " + taskCode);
    // Bu yerda, vazifalarni bajarish jarayonini amalga oshirish uchun kod qo'shishingiz mumkin.
});