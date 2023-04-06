

let websocket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
websocket.onopen=function(e)
{
    console.log("[open] Connection established");
    console.log("sending to server");
    websocket.send("My name Anand");
}

websocket.onmessage=function(e)
{
console.log(`[message] data is receive ${e.data}`);
}

websocket.onclose=function(e)
{
    if(e.wasClean)
    {
        console.log(`[close] connection is closed code ${e.code} reason=${e.reason}`);
    }
    else{
        console.log("[close]");
    }
}
websocket.onerror=function(e)
{
    console.log(`[error]`);
}
