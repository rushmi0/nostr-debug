const WebSocket = require('ws');

const data = {
    id: "c39f6d202586cf2a681be13d538c6db4221da1167a046ffe72c130c00a002c25",
    pubkey: "d759eb0340d5ebd639b17d2796e8a416be9bbb9b5c56a0104e9b623aa86ef603",
    content: "ให้ลาบก้อย เยียวยา\n\nhttps://youtu.be/qOznMgZVSZ4?si=euTlinG8d-wfxfy2",
    kind: 1,
    created_at: 1715339538,
    tags: [],
    sig: "c5222b4e76c8303dd05d32ced3e8be6562a9263afda00ddc839d45768f6a251ae685461ae0b830d5428b60ca3031183bad7014bee8aa0a72341b07e19129783f"
};

const payload = JSON.stringify(["EVENT", data]);

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
    for (let i = 0; i < 5; i++) {
        ws.send(payload);
    }
});

ws.on('message', function incoming(data) {
    console.log(data);
});

ws.on('error', function error(err) {
    console.error('WebSocket error: ', err);
});
