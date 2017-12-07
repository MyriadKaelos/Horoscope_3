var aquarius = ["aquarius","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/glowing-green-neon-icons-culture/111299-glowing-green-neon-icon-culture-astrology1-aquarius-sc37.png",01,20,02,18,"You will find yourself at an intersection that will change your life."];
var pisces = ["pisces","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glowing-green-neon-icons-culture/111311-glowing-green-neon-icon-culture-astrology1-pisces-sc37.png",02,18,03,19, "You will face your fears today."];
var aries = ["aries","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/glowing-green-neon-icons-culture/111288-glowing-green-neon-icon-culture-astrology-aries.png",03,20,04,19, "Things you won't be able to explain will fall in your path."];
var taurus = ["taurus","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glowing-green-neon-icons-culture/111297-glowing-green-neon-icon-culture-astrology-taurus.png",04,20,05,20, "You will experience true clarity."];
var gemini = ["gemini","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/glowing-green-neon-icons-culture/111291-glowing-green-neon-icon-culture-astrology-gemini.png",05,21,06,20, "You will cross paths with an old friend today."];
var cancer = ["cancer","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/glowing-green-neon-icons-culture/111289-glowing-green-neon-icon-culture-astrology-cancer.png",06,21,07,22, "You will make a friend that you will keep forever today."];
var leo = ["leo","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glowing-green-neon-icons-culture/111292-glowing-green-neon-icon-culture-astrology-leo.png",07,23,08,22, "You will be tested by a stranger today."];
var virgo = ["virgo","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/glowing-green-neon-icons-culture/111298-glowing-green-neon-icon-culture-astrology-virgo.png",08,23,09,22, "Your future is open and undetermined."];
var libra = ["libra","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glowing-green-neon-icons-culture/111309-glowing-green-neon-icon-culture-astrology1-libra-sc37.png",09,23,10,22, "Your thoughts will wonder at an inopportune time."];
var scorpio = ["scorpio","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/glowing-green-neon-icons-culture/111315-glowing-green-neon-icon-culture-astrology1-scorpio-sc37.png",10,23,11,21, "You will tend to lash out at those who anger you."];
var sagittarius = ["sagittarius","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glowing-green-neon-icons-culture/111295-glowing-green-neon-icon-culture-astrology-sagittarius.png",11,22,12,21, "Time will be hard to follow for you today, keep your watch on you."];
var capricorn = ["capricorn","http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/glowing-green-neon-icons-culture/111290-glowing-green-neon-icon-culture-astrology-capricorn.png",12,22,01,19, "Only you know what this day has in store for you."];
var signs = [aquarius,pisces,aries,taurus,gemini,cancer,leo,virgo,libra,scorpio,sagittarius,capricorn];
$("document").ready(function() {
    console.log("ready");
    $("#go").click(function() {
        if($("#date").val() !== "") {
            var date0 = $("#date").val();
            var month = parseInt(date0.slice(5, 7));
            var day = parseInt(date0.slice(-2));
            var year = date0.slice(0, 4);
            for (var i = 0; i < signs.length; i++) {
                    if (signs[i][4] === month) {
                        if (signs[i][5] < day) {
                            if (i > 11) {
                                i = -1;
                            }
                            var zodiac = signs[i + 1];
                            break;
                        } else {
                            var zodiac = signs[i];
                            break;
                        }
                    }
                }//iterates the zodiac checking what matches the input and returns to the value, "zodiac"
            console.log(zodiac);
            report(zodiac);
        } else {
            alert("You need to put in a birth date to get your horoscope!");
        }
    });
});
function report(zodiac) {
    console.log(zodiac[0]);
    $("#zodiacInfo").slideDown("slow");
    $("#zodiacInfo").css("display","block");
    $("#zodiacName").text("You are a " + zodiac[0] + "!");
    $("#horoscope").text(zodiac[6]);
    var horoImg = "<img src='" + zodiac[1] + "' width='200' height='200'>";
    $("#horoImg").html(horoImg);
}