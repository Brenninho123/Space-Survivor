// discord_rpc_desktop.js
const RPC = require('discord-rpc');

const clientId = 'SEU_CLIENT_ID_DISCORD'; // Substitua pelo seu Client ID do Discord
const rpc = new RPC.Client({ transport: 'ipc' });

let startTime = Date.now();

rpc.on('ready', () => {
    console.log('Discord RPC conectado!');

    // Atualiza a cada 15s
    setInterval(() => {
        setActivity();
    }, 15_000);

    // Primeira atualização imediata
    setActivity();
});

function setActivity() {
    if (!rpc) return;

    rpc.setActivity({
        details: 'Jogando Space Survivor',
        state: 'No espaço sideral',
        startTimestamp: startTime,
        largeImageKey: 'space_survivor_icon', // ícone configurado no Discord Dev Portal
        largeImageText: 'Space Survivor',
        smallImageKey: 'small_icon',          // opcional
        smallImageText: 'Space Survivor',
        instance: false
    });
}

// Conectar
rpc.login({ clientId }).catch(console.error);