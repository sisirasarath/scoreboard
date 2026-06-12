// Sample data (replace later with Excel integration if needed)
const data = [
    { name: "Rahul", points: 55 },
    { name: "Arjun", points: 42 },
    { name: "Vishnu", points: 38 },
    { name: "Amina", points: 30 },
    { name: "Neha", points: 25 }
];

// Sort highest points first
data.sort((a, b) => b.points - a.points);

const tbody = document.getElementById("leaderboard-body");

data.forEach((user, index) => {

    let rowClass = "";
    
    if (index === 0) rowClass = "gold";
    else if (index === 1) rowClass = "silver";
    else if (index === 2) rowClass = "bronze";

    const row = `
        <tr class="${rowClass}">
            <td class="rank">${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.points}</td>
        </tr>
    `;

    tbody.innerHTML += row;
});