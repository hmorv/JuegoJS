function Personaje(tipo) {
	this.Clase = tipo;

	switch (tipo) {
		case "Mago":
			this.Hp = 300;
			this.Spells = ["Fuego","Hielo","Rayo"];
			this.Arma = "Bastón Retorcido";
			this.Lvl = 1;
			this.Exp = 0;
			break;
		case "Barbaro":
			this.Hp = 500;
			this.Spells = "Torbellino";
			this.Arma = "Mandoble de Hierro";
			this.Lvl = 1;
			this.Exp = 0;
			break;
		case "Nigromante":
			this.Hp = 350;
			this.Spells = ["Eclipse","Abismo","Pesadilla"];
			this.Arma = "Libro de las Almas Condenadas";
			this.Lvl = 1;
			this.Exp = 0;
			break;
		default:
			break;
	}

	this.Atacar = function() {
		var op = prompt("Atacaras con tu Arma o con tus Spells");

		if (op == "Arma") {
			var daño = Math.floor((Math.random() * 100) + 1);
			document.write("Atacas con tu " + this.Arma + " y haces " + daño + " ptos de daño!!<br/>");
			return daño;
		} else {
			if (this.Spells instanceof Array) {
				do {
					var spell = prompt("Elige el Spell que utilizaras: " + this.Spells[0] + " , " + this.Spells[1] + " , " + this.Spells[2]);

					if (spell == this.Spells[0]) {
						let daño = Math.floor((Math.random() * 200) + 1);
						document.write("Atacas con tu Spell: " + spell + " y haces " + daño + " ptos de daño!!<br/>");
						var check = true;
						return daño;
					} else if (spell == this.Spells[1]) {
						let daño = Math.floor((Math.random() * 200) + 1);
						document.write("Atacas con tu Spell: " + spell + " y haces " + daño + " ptos de daño!!<br/>");
						var check = true;
						return daño;
					} else if (spell == this.Spells[2]) {
						let daño = Math.floor((Math.random() * 200) + 1);
						document.write("Atacas con tu Spell: " + spell + " y haces " + daño + " ptos de daño!!<br/>");
						var check = true;
						return daño;
					} else {
						alert("No posees el Spell elegido");
						var check = false;
					}
				} while (!check) 
			} else {
				do {
					var spell = prompt("Elige el Spell que utilizaras: " + this.Spells);

					if (spell == this.Spells) {
						let daño = Math.floor((Math.random() * 200) + 1);
						document.write("Atacas con tu Spell: " + spell + " y haces " + daño + " ptos de daño!!<br/>"); 
						var check = true;
						return daño;
					} else {
						alert("No posees el Spell elegido");
						var check = false;
					}
				} while (!check)
			}	
		}
	}
} 

function MostrarSpells(persj) {
	document.write("Las habilidades de tu personaje son: <br/>");
	if (persj.Spells instanceof Array) {
		for (var i in persj.Spells) {
			document.write(persj.Spells[i] + "<br/>");	
		}
	} else {
		document.write(persj.Spells + "<br/>");
	}
}