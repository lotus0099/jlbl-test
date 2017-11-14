(function(){
    var $navLi = $('.navLis .nav-li');
    init();
    run();
    function init(){
        var iData = data.navData;
        for (var i = 0; i < iData.length; i++) {
            if( iData[i].length )
            {
                var $ulHide = $('<ul class="hideLis"></ul>');
                for (var j = 0; j < iData[i].length; j++) {
                    $ulHide.append('<li>'+
                                        '<a href="#">'+
                                            '<span class="l-arrow"></span>'+
                                            '<span class="hide-a-txt">'+iData[i][j]+'</span>'+
                                            '<span class="r-arrow"><span></span></span>'+
                                        '</a>'+
                                    '</li>')
                }
                $navLi.eq(i).append($ulHide);
            }
        }
    };
    function run(){
        var $hideLi = $('.nav-li .hideLis .hideLi');
        $hideLi.hover(function(){
            $(this).find('a').stop().animation(function(){
                paddingLeft : '10px';
                paddingRight : '15px';
            },200);
            $(this).find('.r-arrow span').stop().animation(function(){
                left : '5px';
                opacity : 1;
            },200);
        },function(){
            paddingLeft : '15px';
            paddingRight : '10px';
            $(this).find('.r-arrow span').stop().animation(function(){
                left : '30px';
                opacity : 0;
            },200);
        });
    }
})();


(function(){
    var $bMain = $('#b-main');
    var $picUl = $('#b-main .pic .p-ul');
    var $more = $('#b-main .more');
    var $tabLi = $('.tab .t-ul .tabList');
    var index = 0;
    var timer = null;
     $tabLi.hover(function(){
         $(this).addClass('hover');
     },function(){
        $(this).removeClass('hover');
     }).click(function(){
        index = $(this).index();
        move();
    })
    auto();
    $bMain.hover(function(){
			clearInterval( timer );
            $more.fadeIn(200);
		},function(){
			auto();
            $more.fadeOut(200);
		})
    function auto(){
        timer = setInterval(function(){
            index ++;
             index %= $tabLi.length;
            move();
        },1000)
    }
    function move(){
        $tabLi.eq(index).addClass('on').siblings().removeClass('on');
		$picUl.stop().animate({
			marginLeft : -440*index + 'px'
		},200,function(){
            if(index == $tabLi.length){
                	$picUl.css('marginLeft', 0)
                now = 0;
                console.log(index);
            }
        });
    }
})();
