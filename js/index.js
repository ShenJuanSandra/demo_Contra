/**
 * Created by dell on 2018/7/15.
 */

//banner 轮播图
$(function(){
    var index=0;
    var timer;
    $("#circle>li").mouseenter(function(){
        index=$(this).index();
        $(".contentCenter>img")[0].src="images/banner-0"+(index+1)+".jpg";
        $(this).removeClass("circleBg1").addClass("circleBg2").siblings().removeClass("circleBg2").addClass("circleBg1");
        clearInterval(timer);
    }).mouseleave(function(){
        timer =setInterval(autoplay,2000);
    });
    timer =setInterval(autoplay,2000);
    function autoplay(){
        index++;
        $(".contentCenter>img")[0].src="images/banner-0"+(index+1)+".jpg";
        if(index>2){
            index=0;
            $(".contentCenter>img")[0].src="images/banner-0"+(index+1)+".jpg";
        }
        $("#circle").children("li").eq(index).removeClass("circleBg1").addClass("circleBg2").siblings().removeClass("circleBg2").addClass("circleBg1");
    }
    //当鼠标移动到图片上时清除定时器，离开图片时开启定时器
    $(".contentCenter>img").mouseover(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer =setInterval(autoplay,1000);
    });
});

//banner tab切换
$(function(){
    $("#bNews>li>a").mouseenter(function(){
       $(this).next().removeClass("hide");
        $(this).parent().siblings().children("ul").addClass("hide");
        $(this).addClass("bColor").parent().siblings().children("a").removeClass("bColor");
    });
});

//英雄人物切换
$(function(){
    var idx;
    $("#heroSmallImg>li").mouseenter(function(){
        idx =$(this).index();
        console.log(idx);
        $(".infoRight>img").eq(idx).removeClass("hide").siblings().addClass("hide");
        $(".nameLeft>ul>li").eq(idx).removeClass("hide").siblings().addClass("hide");
        $(this).children("div").stop(true,false).show().animate({"top":"0","height":"87px"}).end();
    });
    $("#heroSmallImg>li").mouseleave(function(){
        $(this).children("div").stop(true,false).animate({"top":"87px","height":"0"}).hide();
    });
});

//武器tab切换
$(function(){
    $(".weaopnInfos>ul>li>a").click(function(){
       $(this).next().removeClass("hide").parent().siblings().children("ul").addClass("hide");
        $(this).addClass("weaponBg").parent().siblings().children("a").removeClass("weaponBg");
    });
});

//赛事中心
$(function(){
   $(".gameInfo>ul>li>a").click(function(){
       $(this).next().show().parent().siblings().children("div").hide();
       $(this).addClass("gameBg").parent().siblings().children("a").removeClass("gameBg");
   });
});

//攻略中心
$(function(){
    $(".stratgyInfo>ul>li>a").click(function(){
        $(this).next().show().parent().siblings().children("ul").hide();
        var num =$(this).parent().index();
        //console.log(num);
        //判断点击图片的索引值
        switch(num){
            case 0:
                $(this).parent().parent().children("li").eq(num).children().children("img").attr("src","images/h-link1.jpg");
                $(this).parent().parent().children("li").eq(num+1).children().children("img").attr("src","images/link2.jpg");
                $(this).parent().parent().children("li").eq(num+2).children().children("img").attr("src","images/link3.jpg");
                break;
            case 1:
                $(this).parent().parent().children("li").eq(num-1).children().children("img").attr("src","images/link1.jpg");
                $(this).parent().parent().children("li").eq(num).children().children("img").attr("src","images/h-link2.jpg");
                $(this).parent().parent().children("li").eq(num+1).children().children("img").attr("src","images/link3.jpg");
                break;
            case 2:
                $(this).parent().parent().children("li").eq(num-2).children().children("img").attr("src","images/link1.jpg");
                $(this).parent().parent().children("li").eq(num-1).children().children("img").attr("src","images/link2.jpg");
                $(this).parent().parent().children("li").eq(num).children().children("img").attr("src","images/h-link3.jpg");
                break;
        }
    });

    //视频中心
    $("#s1>li").mouseover(function(){
        $(this).children("ul").show().parent().siblings().children("ul").hide();
    });
    //  攻略课堂
    $("#s3>li").mouseover(function(){
        $(this).children("ul").show().parent().siblings().children("ul").hide();
    });
});
//专题中心
$(function(){
    $(".specialInfo>ul>li").click(function(){
        $(this).children("ul").show().parent().siblings().children("ul").hide();
        $(this).removeClass("deepColor").addClass("lightColor").siblings().removeClass("lightColor").addClass("deepColor");
    });
    });
//游戏特色
$(function(){
    var count=0;
   $(".left").click(function(){
       if(count==0){
           count=4;
       }
       count--;
        $(".uniqueInfo>img")[0].src ="images/las-"+(count+1)+".png";
   });
    $(".right").click(function(){
        if(count==4){
            count=0;
        }
        count++;
        if(count<4){
            $(".uniqueInfo>img")[0].src ="images/las-"+(count+1)+".png";
        }else{
            $(".uniqueInfo>img")[0].src ="images/las-"+(1)+".png";
        }
    });
    var timer;
    timer=setInterval(autoplay,2000);
    function autoplay(){
        $(".right").click();
    }
    $(".uniqueInfo>img").mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer=setInterval(autoplay,2000);
    });
});