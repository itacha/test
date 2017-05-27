$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("#nav").css({"position":"fixed"});
		}else{
			$("#nav").css({"position":"absolute"});
		}
	});
	
})

$(function(){
	$(".nav-menu").click(function(){
		$(this).parent().next().slideToggle(500);
	})
})

$(function(){
	var num=0;
	$(".ban-btn li").click(function(){
		num=$(this).index()+1;
		anim(num);
	}).eq(0).click();
	function anim(num){
		var str="img/bg-"+num+".jpg";
		$(".bg").css("background-image","url("+str+")");
		$(".bg-"+num).slideDown(900).siblings().slideUp(900);
		$(".bg-"+num).find("h3").addClass("bgchg").end().siblings().find("h3").removeClass("bgchg");
		$(".bg-"+num).find("h4").addClass("bgchg").end().siblings().find("h4").removeClass("bgchg");
		$(".ban-btn li").eq(num-1).css("background","rgba(225,225,225,0.6)").siblings().css("background","rgba(0,0,0,0.6)");
	}
	function a(){
		if(num>4){
			num=1;
		}else{
			num++;
		}
		anim(num);
	}
	setInterval(a,6000);	
});

$(function(){
	$(".list>li").mouseenter(function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$(".cont-r>ul").eq($(this).index()).addClass('selected').siblings('ul').removeClass('selected');
	})
})

$(function(){
	var p1=$("#p1");
	p1.hover(function(){
		$("#qr1").css("display","block")
		$(".con-right").addClass("in")
	},function(){
		$("#qr1").css("display","none")
		$(".con-right").removeClass('in')
	})
	var p2=$("#p2");
	p2.hover(function(){
		$("#qr2").css("display","block")
		$(".con-right").addClass("in")
	},function(){
		$("#qr2").css("display","none")
		$(".con-right").removeClass('in')
	})
})

$(function(){
    $('#dowebok').fullpage({
        afterLoad:function(link,index){
            $('.section').removeClass('current');
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);
    		
        }
    });
});