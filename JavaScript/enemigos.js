function Goblin() {
	this.Nombre = "Goblin";
	this.Hp = 250;
	this.Arma = "Lanza Rota";

	this.Atacar = function() {
		var dmg = Math.floor((Math.random() * 100) + 1);
		document.write("El " + this.Nombre + " te ataca con su " + this.Arma + " y te hace " + dmg + " pts de daño!<br/>");
		return dmg;
	}
}

