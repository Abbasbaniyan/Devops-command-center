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

const terminal=document.getElementById("terminal");

const openBtn=document.getElementById("openTerminal");

const closeBtn=document.getElementById("closeTerminal");

const terminalBody=document.getElementById("terminalBody");

const commands=[

"$ git pull",

"Receiving objects... Done",

"$ docker build -t devops-app .",

"Successfully built image",

"$ terraform apply",

"Infrastructure up-to-date",

"$ ssh ubuntu@server",

"Connected",

"$ sudo systemctl restart nginx",

"Restarted nginx",

"",

"✅ Deployment Successful",

"🌍 Production is LIVE"

];

openBtn.onclick=function(e){

e.preventDefault();

terminal.style.display="flex";

terminalBody.innerHTML="";

let i=0;

function type(){

if(i>=commands.length) return;

const p=document.createElement("p");

p.innerText=commands[i];

terminalBody.appendChild(p);

terminalBody.scrollTop=terminalBody.scrollHeight;

i++;

setTimeout(type,700);

}

type();

}

closeBtn.onclick=function(){

terminal.style.display="none";

}
function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function updateMetrics(){

    const cpu=random(20,75);
    const ram=random(35,85);
    const disk=random(25,65);
    const network=random(50,120);

    cpuBar.style.width=cpu+"%";
    ramBar.style.width=ram+"%";
    diskBar.style.width=disk+"%";
    networkBar.style.width=(network/120*100)+"%";

    cpuValue.innerText=cpu+"%";
    ramValue.innerText=ram+"%";
    diskValue.innerText=disk+"%";
    networkValue.innerText=network+" Mbps";

}

updateMetrics();

setInterval(updateMetrics,3000);