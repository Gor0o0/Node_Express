// -=-=-=|Модульный js|=-=-=-
import express from 'express' 
import path from 'path'
import { fileUrlToPath } from 'url'

const __filename = fileUrlToPath(import.meta.url)
const __dirname = path.dirname(__filename)



const app = express()
const port = 3000;

app.use(express.json()); //> это для парсинга JSON-тела запроса
app.use(express.urlencoded({ extended: true })); //> это для парсинга URL-кодированных тела запроса | extended true - для парсинга вложенных объектов
app.use(express.static('public')); //> это для предоставления статических файлов из директории public

app.get('/', (req, res) => {
  res.sendFile(__dirname, '/public/index.html') //> это для отправки файла index.html или другого указаного
});

app.post('/api', (req, res) => {
  const {message} = req.body
  console.log(`${message}`);
  nextTick();
});

app.put('/api', (req, res) => {

});

app.delete('/api', (req, res) => {
  res.send('Delete World')
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})