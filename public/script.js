const logInput = document.getElementById('input-login').value;
const passInput = document.getElementById('input-pass').value;

const logInBtn = document.getElementById('logInBtn');
logInBtn.addEventListener('click', () => {});

async function ResponseServer() { //> это функция для отправки запроса на сервер
    const res = await fetch('api/', {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({message: 'Hello World'})
    });
}


async function singIn(){
    
}

async function singUp(){
    const res = await fetch('api/register', {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({login:login, password: password})
    });
}