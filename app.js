import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import * as url from 'url';
import hbs from 'hbs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
//pasamos el dato guardado en una variable de entorno, esto es muy importante para cuando vamos a hostear el sitio en un servidor, porque nos van a pasar el puerto de manera automatica
const port = process.env.PORT;

//Para llamar handlerbars en express
app.set('view engine', 'hbs');

//Registrar partials de handlebars
hbs.registerPartials(__dirname + '/views/partials');

//Servimos el contenido estatico
app.use(express.static("public"));

//Con esto renderizamos la vista de handlebars guardada en views, se puede pasar argumentos como un objeto literal y podemos poner todas las que necesitamos, en render va el render de handlebars que querramos llamar
app.get('/', (req, res) => {
	res.render("home", {
		nombre: "Pepita Ronderos",
		titulo: "Curso Node"
	});
});

app.get('/elements', (req, res) => {
	res.render("elements", {
		nombre: "Pepita Ronderos",
		titulo: "Curso Node"
	});
});

app.get('/generic', (req, res) => {
	res.render("generic", {
		nombre: "Pepita Ronderos",
		titulo: "Curso Node"
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});