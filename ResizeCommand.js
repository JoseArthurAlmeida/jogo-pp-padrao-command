class ResizeCommand extends Command {
    
    static PEQUENO = "pequeno";
    static MEDIO = "medio";
    static GRANDE = "grande";

    constructor(player, tipo) {
        super();
        this.player = player;
        this.tipo = tipo;
        this.anterior = this.player.className;
    }
    execute() {
        this.player.className = this.tipo;
    }
    undo() {
        this.player.className = this.anterior;
    }
}