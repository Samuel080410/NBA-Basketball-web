const buttons = document.querySelectorAll(".conf-btn");
const switchBox = document.querySelector(".conference-switch");

const eastTeams = document.querySelector(".east-teams");
const westTeams = document.querySelector(".west-teams");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // active button
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // slider + teams
        if (btn.classList.contains("west")) {
            switchBox.classList.add("west-active");

            eastTeams.classList.remove("active");
            westTeams.classList.add("active");

        } else {
            switchBox.classList.remove("west-active");

            eastTeams.classList.add("active");
            westTeams.classList.remove("active");
        }
    });
});

const teamLinks = {
    "Chicago Bulls": "bulls",
    "Boston Celtics": "celtics",
    "Philadelphia 76ers": "sixers",
    "Toronto Raptors": "raptors",
    "New York Knicks": "knicks",
    "Brooklyn Nets": "nets",
    "Miami Heat": "heat",
    "Golden State Warriors": "warriors",
    "Dallas Mavericks": "mavericks",
    "Los Angeles Lakers": "lakers",
    "San Antonio Spurs": "spurs",
    "Oklahoma City Thunder": "thunder",
    "Portland Trail Blazers": "blazers",
    "Houston Rockets": "rockets"
};

const teamCards = document.querySelectorAll(".team");

teamCards.forEach(card => {
    card.addEventListener("click", () => {
        const teamName = card.querySelector("p").textContent.trim();
        const teamKey = teamLinks[teamName];

        if (teamKey) {
            window.location.href = "team.html?team=" + teamKey;
        }
    });
});








