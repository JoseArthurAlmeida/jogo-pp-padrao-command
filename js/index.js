// Botões de redimensionamento
const btPequeno = document.getElementById("bt-pequeno");
const btmedio = document.getElementById("bt-medio");
const btGrande = document.getElementById("bt-grande");

// Botões de Undo e Redo de redimensionamento
const btUndo = document.getElementById("btUndo");
const btRedo = document.getElementById("btRedo");

const player = document.getElementById("player");

const comandosExecutados = [];
const comandosRedo = [];

// Botões de mudança de cor
const btPreto = document.getElementById("bt-preto");
const btAzul = document.getElementById("bt-azul");
const btVerde = document.getElementById("bt-verde");

const btUndoColor = document.getElementById("btUndoColor");
const btRedoColor = document.getElementById("btRedoColor");
const comandosExecutadosColor = [];
const comandosRedoColor = [];

// Botões de redimensionamento
btPequeno.onclick = () => {
	let comando = new ResizeCommand(player, ResizeCommand.PEQUENO);
	comando.execute();
	comandosExecutados.push(comando);
};

btmedio.onclick = () => {
	let comando = new ResizeCommand(player, ResizeCommand.MEDIO);
	comando.execute();
	comandosExecutados.push(comando);
};
btGrande.onclick = () => {
	let comando = new ResizeCommand(player, ResizeCommand.GRANDE);
	comando.execute();
	comandosExecutados.push(comando);
};

btUndo.onclick = () => {
	let comando = comandosExecutados.pop();

	if (comando != undefined) {
		comando.undo();
		comandosRedo.push(comando);
	}
};
btRedo.onclick = () => {
	let comando = comandosRedo.pop();
	if (comando != undefined) {
		comando.execute();
		comandosExecutados.push(comando);
	}
};


// Botões de mudança de cor
btPreto.onclick = () => {
	let comando = new ColorCommand(player, ColorCommand.PRETO);
	comando.execute();
	comandosExecutadosColor.push(comando);
};
btAzul.onclick = () => {
	let comando = new ColorCommand(player, ColorCommand.AZUL);
	comando.execute();
	comandosExecutadosColor.push(comando);
};
btVerde.onclick = () => {
	let comando = new ColorCommand(player, ColorCommand.VERDE);
	comando.execute();
	comandosExecutadosColor.push(comando);
};

btUndoColor.onclick = () => {
	let comando = comandosExecutadosColor.pop();
	if (comando != undefined) {
		comando.undo();
		comandosRedoColor.push(comando);
	}
};
btRedoColor.onclick = () => {
	let comando = comandosRedoColor.pop();
	if (comando != undefined) {
		comando.execute();
		comandosExecutadosColor.push(comando);
	}
};
