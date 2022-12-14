import express from 'express';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = 8080;

/* app.get('/', (req, res) => {
	res.send('Home Page')
});

app.get('/hola-mundo', (req, res) => {
	res.send('Hola Mundo')
});

app.get('*', (req, res) => {
	res.send('404 | Page not found');
}); */

//Servir contenido estatico, dentro de static va el nombre de la carpeta en donde esta el contenido. Siempre va a tener prioridad el use por sobre el get, si encunetra el path, el get para ese mismo path no se ejecutaría.
app.use(express.static("public"));

app.get('*', (req, res) => {
	res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})