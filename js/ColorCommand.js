class ColorCommand extends Command {
	static PRETO = "preto";
	static AZUL = "azul";
	static VERDE = "verde";

	constructor(player, color) {
		super();
		this.player = player;
		this.color = color;
		this.anterior = this.player.style.filter;
	}

	execute() {
		switch (this.color) {
			case ColorCommand.PRETO:
				this.player.style.filter = "grayscale(100%)";
				break;
			case ColorCommand.AZUL:
				this.player.style.filter = "hue-rotate(180deg)";
				break;
			case ColorCommand.VERDE:
				this.player.style.filter = "hue-rotate(120deg)";
				break;
		}
	}

	undo() {
		this.player.style.filter = this.anterior;
	}
}
