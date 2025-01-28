
function chargerTeamSuccess(data, text, jqXHR) {
    console.log("success !");

    $.each(data, function (index, team) {
        var row = '<tr><td>' + team.id + '</td><td>' + team.name + '</td></tr>';
        $('#tableClubs tbody').append(row);
    });
}

function chargerTeamError(jqXHR, text, error) {
    console.log("Error : " + error);
}


$(document).ready(function () {
    $.getScript("javascripts/services/servicesHttp.js", function () {
        console.log("servicesHttp.js loaded !");
        chargerTeam(chargerTeamSuccess, chargerTeamError);
    });


});

