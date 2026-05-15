const params = new URLSearchParams(window.location.search);
const teamName = params.get("team");
const team = teams[teamName];

document.title = team.name;
document.documentElement.style.setProperty("--main-color", team.color);

document.querySelector(".team-name").textContent = team.name;
document.querySelector(".team-subtitle").textContent = "Founded " + team.founded + " - " + team.arena + " - " + team.city;
document.querySelector(".logo").src = team.logo;
document.querySelector(".arena").textContent = team.arena;
document.querySelector(".championships").textContent = team.championships;
document.querySelector(".conference").textContent = team.conference;
document.querySelector(".division").textContent = team.division;
document.querySelector(".history-text").textContent = team.history;
document.querySelector(".history-image").src = team.historyImage;

let trophiesHTML = "<div class='trophy-summary'><span class='number'>" + team.championships + "</span><strong>NBA CHAMPIONS</strong></div>";
trophiesHTML += "<div class='trophy-grid'>";

team.trophies.years.forEach(year => {
    trophiesHTML += "<div class='trophy-item'>";
    trophiesHTML += "<img src='images/others/NBA_Trophy.webp' alt='Trophy'>";
    trophiesHTML += "<span>" + year + "</span>";
    trophiesHTML += "</div>";
});

trophiesHTML += "</div>";
document.querySelector(".trophies-content").innerHTML = trophiesHTML;

let playersHTML = "";
team.players.forEach(player => {
    playersHTML += "<div class='player-card'>";
    playersHTML += "<img src='" + player.image + "' alt='" + player.name + "'>";
    playersHTML += "<div class='player-info'>";
    playersHTML += "<h3>" + player.name + "</h3>";
    playersHTML += "<p>" + player.number + " / " + player.position + "</p>";
    playersHTML += "</div></div>";
});
document.querySelector(".players-grid").innerHTML = playersHTML;

let statsHTML = "";
const colors = ["bg-black", "bg-red", "bg-darkbrown"];

team.stats.forEach((player, index) => {
    statsHTML += "<div class='stat-card " + colors[index] + "'>";
    statsHTML += "<div class='rank'>" + (index + 1) + "</div>";
    statsHTML += "<div class='details'>";
    statsHTML += "<h4>" + player.name + "</h4>";
    statsHTML += "<p>Points: " + player.points + "<br>Assists: " + player.assists + "<br>Rebounds: " + player.rebounds + "<br>Steals: " + player.steals + "</p>";
    statsHTML += "</div></div>";
});
document.querySelector(".stats-list").innerHTML = statsHTML;

let allTimeHTML = "";
team.allTimeStats.forEach(record => {
    allTimeHTML += "<div class='all-time-row'>";
    allTimeHTML += "<div class='col-name'>" + record.name + "</div>";
    allTimeHTML += "<div class='col-value'>" + record.value + "</div>";
    allTimeHTML += "<div class='col-player'>" + record.player + "</div>";
    allTimeHTML += "</div>";
});
document.querySelector(".all-time-table").innerHTML = allTimeHTML;

let galleryHTML = "";
team.gallery.forEach(image => {
    galleryHTML += "<img src='" + image + "' class='gallery-img' alt='Team photo'>";
});
document.querySelector(".gallery-grid").innerHTML = galleryHTML;

