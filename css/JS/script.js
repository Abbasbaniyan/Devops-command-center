const logs = [
    "✓ GitHub Push Received",
    "✓ Jenkins Pipeline Started",
    "✓ Installing Dependencies",
    "✓ Running Tests",
    "✓ Docker Image Built",
    "✓ Pushing Docker Image",
    "✓ Connecting to Ubuntu Server",
    "✓ Deploying Application",
    "✓ Restarting Nginx",
    "✓ Production is LIVE 🚀"
];

const container = document.getElementById("deploymentLogs");

let index = 0;

function addLog(){

    if(index >= logs.length) return;

    const div = document.createElement("div");

    div.className = "log";

    div.innerText = logs[index];

    container.appendChild(div);

    index++;

    setTimeout(addLog,1000);

}

window.onload=addLog;