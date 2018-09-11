/**
 * Created by dell on 2018/7/22.
 */

//慢慢移动上来的文字
$(function () {
    var starttime = new Date("2018/11/10");
    var timer;
    clearInterval(timer);
    intervalTime();
    timer = setInterval(intervalTime, 1000);
    function intervalTime() {
        var nowtime = new Date();
        var time = starttime - nowtime;
        var day = Math.floor(time / 1000 / 60 / 60 / 24);
        var hour = Math.floor(time / 1000 / 60 / 60 % 24);
        var minute = Math.floor(time / 1000 / 60 % 60);
        var seconds = Math.floor(time / 1000 % 60);
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $('.day').html(day);
        $('.hour').html(hour);
        $('.minute').html(minute);
        $('.second').html(seconds);
    }

    //$(".scrollWords").animate({"height":"346px","top":"360px"},8000).next().animate({"width":"881px"},8000);

    $(".scrollWords").animate({"height": "346px", "top": "360px"}, 6000, function () {
        $(".schedule").animate({"width": "881px"}, 5000);
    });
    $(".tittle").animate({"top": "177px", "left": "-37px"}, 800, function () {
        $(this).animate({"top": "147px"}, 300);
    });
    $(".timer>span").fadeIn(1000);

});
