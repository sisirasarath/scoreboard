fetch("SCOREBOARD.xlsx")

.then(response => response.arrayBuffer())

.then(data => {


    let workbook = XLSX.read(data, {

        type:"array"

    });


    let sheet =
    workbook.Sheets[
        workbook.SheetNames[0]
    ];


    let players =
    XLSX.utils.sheet_to_json(sheet);


    // SORT HIGHEST POINTS FIRST

    players.sort(
        (a,b) =>
        b["TOTAL"] - a["TOTAL"]
    );



    // TOP 3

    let top = [
        "first",
        "second",
        "third"
    ];


    document.getElementById("first-name").innerText =
        players[0]["NAME"];

    document.getElementById("first-dept").innerText =
        players[0]["DEPARTMENT (S4LB)"];

    document.getElementById("first-points").innerText =
        players[0]["TOTAL"] + " Points";



    document.getElementById("second-name").innerText =
        players[1]["NAME"];

    document.getElementById("second-dept").innerText =
        players[1]["DEPARTMENT (S4LB)"];

    document.getElementById("second-points").innerText =
        players[1]["TOTAL"] + " Points";



    document.getElementById("third-name").innerText =
        players[2]["NAME"];

    document.getElementById("third-dept").innerText =
        players[2]["DEPARTMENT (S4LB)"];

    document.getElementById("third-points").innerText =
        players[2]["TOTAL"] + " Points";



    // FULL TABLE

    let body =
    document.getElementById(
        "leaderboard"
    );


    players.forEach((player,index)=>{


        body.innerHTML += `

        <tr>

            <td class="rank">
                ${index+1}
            </td>

            <td>
                ${player["NAME"]}
            </td>

            <td>
                ${player["DEPARTMENT (S4LB)"]}
            </td>

            <td>
                ${player["TOTAL"]}
            </td>

        </tr>

        `;


    });


});