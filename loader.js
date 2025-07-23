window.addEventListener("DOMContentLoaded", async () => {
  if (document.getElementById("userList")) {
    const res = await fetch("/json/dangeruser.json");
    const users = await res.json();
    renderUserList(users);
  }

  if (document.getElementById("serverList")) {
    const res = await fetch("/json/dangerserver.json");
    const servers = await res.json();
    renderServerList(servers);
  }

  if (document.getElementById("banBotList")) {
    const res = await fetch("/json/banbot.json");
    const bots = await res.json();
    renderBotBanList(bots);
  }
});

function renderUserList(users) {
  const target = document.getElementById("userList");
  target.innerHTML = users.map(u => `
    <div class="card">
      <strong>${u.username}</strong> (${u.id})<br>
      <em>${u.reason}</em><br>
      危険度: ★${u.severity}<br>
      証拠: ${u.proof.map(p => `<a href="${p}" target="_blank">画像</a>`).join(', ')}
    </div>
  `).join('');
}

function render
