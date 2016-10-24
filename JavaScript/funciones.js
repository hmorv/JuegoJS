function batalla(pj,enemigo) {
	do {
		var turno = Math.floor(Math.random() + 1);

		if (turno == 1) {
			var daño1 = pj.Atacar();
			enemigo.Hp -= daño1;
			document.write("Al " + enemigo.Nombre + " le quedan " + enemigo.Hp + " ptos de vida!<br/>");

			document.write("<br/>");

			var daño2 = enemigo.Atacar();
			pj.Hp -= daño2;
			document.write("Te quedan " + pj.Hp + " ptos de vida!<br/>");

			document.write("<br/>");

			alert("Tus Hp : " + pj.Hp + "\n Enemigo Hp : " + enemigo.Hp);
		} else {
			var daño2 = enemigo.Atacar();
			pj.Hp -= daño2;
			document.write("Te quedan " + pj.Hp + " ptos de vida!<br/>");

			document.write("<br/>");

			var daño1 = pj.Atacar();
			enemigo.Hp -= daño1;
			document.write("Al " + enemigo.Nombre + " le quedan " + enemigo.Hp + " ptos de vida!<br/>");

			document.write("<br/>");	

			alert("Tus Hp : " + pj.Hp + "\n Enemigo Hp : " + enemigo.Hp);			
		}
	} while (pj.Hp > 0 && enemigo.Hp > 0);	

	if (enemigo.Hp <= 0) {
		var exp = Math.floor((Math.random() * 100) + 1);
		document.write("Enhorabuena has ganado tu batalla contra un " + enemigo.Nombre + "\n" + "Ganas " + exp  + "ptos de Exp");

		pj.Exp += exp;
	}

	if (pj.Hp <= 0) {
		document.write("Tu aventura ha llegado a su fin \n" + "GRACIAS POR JUGAR");
		window.close();
	}
}