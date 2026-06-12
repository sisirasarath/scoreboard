fetch("LEADERBOARD.xlsx")
.then(res => res.arrayBuffer())
.then(data => {

    const workbook = XLSX.read(data);

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const rows = XLSX.utils.sheet_to_json(sheet);

    rows.sort((a,b) => b.TOTAL - a.TOTAL);

    const tbody = document.querySelector("#leaderboard tbody");

    rows.forEach((row,index) => {

        tbody.innerHTML += `
            <tr>
                <td>${index+1}</td>
                <td>${row.NAME}</td>
                <td>${row.TOTAL}</td>
            </tr>
        `;
    });

});