/**
 * Created by dell on 2018/7/15.
 */

//banner �ֲ�ͼ
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
    //������ƶ���ͼƬ��ʱ�����ʱ�����뿪ͼƬʱ������ʱ��
    $(".contentCenter>img").mouseover(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer =setInterval(autoplay,1000);
    });
});

//banner tab�л�
$(function(){
    $("#bNews>li>a").mouseenter(function(){
       $(this).next().removeClass("hide");
        $(this).parent().siblings().children("ul").addClass("hide");
        $(this).addClass("bColor").parent().siblings().children("a").removeClass("bColor");
    });
});

//Ӣ�������л�
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

//����tab�л�
$(function(){
    $(".weaopnInfos>ul>li>a").click(function(){
       $(this).next().removeClass("hide").parent().siblings().children("ul").addClass("hide");
        $(this).addClass("weaponBg").parent().siblings().children("a").removeClass("weaponBg");
    });
});

//��������
$(function(){
   $(".gameInfo>ul>li>a").click(function(){
       $(this).next().show().parent().siblings().children("div").hide();
       $(this).addClass("gameBg").parent().siblings().children("a").removeClass("gameBg");
   });
});

//��������
$(function(){
    $(".stratgyInfo>ul>li>a").click(function(){
        $(this).next().show().parent().siblings().children("ul").hide();
        var num =$(this).parent().index();
        //console.log(num);
        //�жϵ��ͼƬ������ֵ
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

    //��Ƶ����
    $("#s1>li").mouseover(function(){
        $(this).children("ul").show().parent().siblings().children("ul").hide();
    });
    //  ���Կ���
    $("#s3>li").mouseover(function(){
        $(this).children("ul").show().parent().siblings().children("ul").hide();
    });
});
//ר������
$(function(){
    $(".specialInfo>ul>li").click(function(){
        $(this).children("ul").show().parent().siblings().children("ul").hide();
        $(this).removeClass("deepColor").addClass("lightColor").siblings().removeClass("lightColor").addClass("deepColor");
    });
    });
//��Ϸ��ɫ
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