import express from 'express';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = 8080;

//De esta manera removemos el .html de las url y servimos el contenido estatico, para ello es necesario quitar los .html en las url en los archivos html y en el caso del index poner solamente una /
app.use(express.static(__dirname + 'public', {
	extensions: ['html']
}));


app.get('*', (req, res) => {
	res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});