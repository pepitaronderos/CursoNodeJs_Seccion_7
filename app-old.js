import http from 'http';

//Esto crea el servidor y pasa dos parametros: Request es lo que estan solicitando por parte del cliente, los header y toda la info que nos solicitan, Response es lo que el servidor le va a responder al cliente
http.createServer((request, response) => {
	/* response.writeHead(200, { "Content-Type": "application/json" });
	const persona = {
		id: 1,
		nombre: "Julieta"
	}
	response.write(JSON.stringify(persona)); */

	/* response.setHeader("Content-Disposition", "attachment: filename=lista.csv");
	response.writeHead(200, { "Content-Type": "application/csv" });
	response.write("id, nombre\n");
	response.write("1, Julieta\n");
	response.write("2, Fernando\n");
	response.write("3, Juan\n");
	response.write("4, Pedro\n"); */

	response.write("Hola mundo");
	response.end(); //esto es para decirle a node termine de escribir la respuesta
}).listen(8080);

console.log("Escuchando el puerto", 8080);