const btPequeno = document.getElementById("bt-pequeno");
const btmedio = document.getElementById("bt-medio");
const btGrande = document.getElementById("bt-grande");

const btUndo = document.getElementById("btUndo");
const btRedo = document.getElementById("btRedo");

const player = document.getElementById("player");

const comandosExecutados = [];
const comandosRedo = [];

btPequeno.onclick = () => {
    let comando = new ResizeCommand(player, ResizeCommand.PEQUENO);
    comando.execute();
    comandosExecutados.push(comando);
}

btmedio.onclick = () => {
    let comando = new ResizeCommand(player, ResizeCommand.MEDIO);
    comando.execute();
    comandosExecutados.push(comando);
}
btGrande.onclick = () => {
    let comando = new ResizeCommand(player, ResizeCommand.GRANDE);
    comando.execute();
    comandosExecutados.push(comando);
}

btUndo.onclick = () => {
    let comando = comandosExecutados.pop();

    if (comando != undefined) {
        comando.undo();
        comandosRedo.push(comando);
    }
}
btRedo.onclick = () => {
    let comando = comandosRedo.pop();
     if (comando != undefined) {
        comando.execute();
        comandosExecutados.push(comando);
    }
}