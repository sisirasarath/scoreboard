const excelFile = "LEADERBOARD.xlsx";

fetch(excelFile)
    .then(res => res.arrayBuffer())
    .then(data => {

        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Sort by TOTAL marks (highest first)
        jsonData.sort((a, b) => b.TOTAL - a.TOTAL);

        const tbody = document.getElementById("leaderboard-body");
        tbody.innerHTML = "";

        jsonData.forEach((row, index) => {

            let cls = "";
            if (index === 0) cls = "gold";
            else if (index === 1) cls = "silver";
            else if (index === 2) cls = "bronze";

            tbody.innerHTML += `
                <tr class="${cls}">
                    <td>${index + 1}</td>
                    <td>${row.NAME}</td>
                    <td>${row["DEPARTMENT (S4LB)"] || ""}</td>
                    <td>${row.TOTAL}</td>
                </tr>
            `;
        });

    })
    .catch(err => console.error("Error loading Excel:", err));