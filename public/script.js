const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', () => {});

async function ResponseServer() { //> это функция для отправки запроса на сервер
    const response = await fetch('/api', {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({message: 'Hello World'})
    })
}
