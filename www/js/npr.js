function updatenpr(pos) {
    lat=pos.coords.latitude;
    lon=pos.coords.longitude;
    url='http://api.npr.org/stations?lat='+lat+'&lon='+lon+'&apiKey=MDEwNjA4MTIxMDEzNTYwNjg2NTM1YmNhOQ001';
    
    $.ajax({
            url: url,
            beforeSend: function() { $("#updating").text("Updating..."); },
            complete: function() { $("#updating").text(""); }
    }).done(function(data) {
        // Some crappy vestigal code in here. Meh, it works.
        var s=new Array();
        $(data).find("station").each(function(i) {
            s[i] = $(this).find("frequency").text() + " " + $(this).find("band").text() + "??" +
                       $(this).find("network").text();
        });
        other="";
        for (i=0; i<s.length; i++) {
            if ((i > 0) && (i < 4)) { other=other + s[i].split("??")[0] + "<br>"; }
        }
        $("#mainstation").text(s[0].split("??")[0]);
        $("#stationname").text(s[0].split("??")[1]);
        $("#otherstations").html(other);
    });
}

$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updatenpr);
    } 
});
