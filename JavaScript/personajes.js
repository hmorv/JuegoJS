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
		case "Nigromante":
			this.Hp = 350;
			this.Spells = ["Eclipse","Abismo","Pesadilla"];
			this.Arma = "Libro de las Almas Condenadas";
			this.Lvl = 1;
			this.Exp = 0;
		default:
			break;
	}
} 

function MostrarSpells(persj) {
	if (persj.Spells instanceof Array) {
		for (var i in persj.Spells) {
			document.write(persj.Spells[i] + "<br/>");	
		}
	} else {
		document.write(persj.Spells);
	}
}