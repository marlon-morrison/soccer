function soccerTeam(params) {
    var ages = []; 
    var jLeague = 0;
    var iLeague = 0;
    var sLeague = 0;
    var score = true;
    var verify = document.getElementById("verify").innerHTML
    ages = prompt("Enter players ages. Ex:1,2,3,... ").split(",");

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] <= 7) {
            jLeague++
        } else if (ages[i] <= 11) {
            iLeague++
        } else if (ages[i] <= 15) {
            sLeague++
        }
        
        if (ages[i] < 4 || ages[i] > 15) {
            verify = verify + "<tr><td>You have listed a player age that is not qualified!</td>";
            document.getElementById("verify").innerHTML = verify
            score = false;
        }
    }
    if (score) {
        verify = verify + "<tr><td><h3>Senior League: " + sLeague + " Players</h3></td></tr><br><tr><td><h3>Intermediate League: " + iLeague + " Players</h3></td></tr><br><tr><td><h3>Junior League: " + jLeague + " Players</h3></td>";
        document.getElementById("verify").innerHTML = verify
    }
}