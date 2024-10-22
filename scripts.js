const token = '7914972953:AAFzrI6um6GwamLDH1RkMUDYdXznyPONKXw';
const chatId = '514960128'; // Твій chat_id

function sendMessage(text) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    const data = {
        chat_id: chatId,
        text: text
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Message sent:', data);
        alert('Заявка надіслана!');
        document.getElementById('contactForm').reset(); // Скидання форми
    })
    .catch((error) => {
        console.error('Error sending message:', error);
        alert('Виникла помилка при надсиланні заявки.');
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє стандартне відправлення форми

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const fullMessage = `Ім'я: ${name}\nТелефон: ${phone}\nПовідомлення: ${message}`;
    sendMessage(fullMessage);
});
