/* 
* @Author: Marte
* @Date:   2018-04-03 11:09:53
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-15 17:10:06
*/
//插件形式:封装对象方法插件，扩展原型对象方法
//在jquery中fn===prototype
jQuery.fn.banner=function(opts){
    //this指向实例，在这里指向$box(jquery对象)  
};
//避免插件内部的$冲突，请传递jQuery($并不是总等于jQuery，另外其他js框架也可能使用$)
;(function($){
    $.fn.banner=function(opts){
        //默认参数
        let defaults={
            width:400,//宽
            height:200,//高
            index:0,//默认显示图片索引
            duration:2000,//轮播间隔时间
            autoPlay:true,//是否自动播放
            type:'vertical',//horizontal,fade  默认垂直轮播/水平轮播/淡入淡出
            seamless:false,//是否无缝轮播
            page:true, //是否有页码
            has_btn:true
            // imgs:[],保存图片路径
        };
        // let opt=Object.assign({},defaults,opts);合并/扩展对象
        //$.extend([d],target,obj1,obj2,…,[objN]) //扩展对象或jQuery对象本身
        //用obj1-objN对象来扩展target对象
        // 只有一个参数时，用来扩展jQuery全局函数：$.extend({‘hobby’:’撸串’})
        // $.extend({ 
            // add:function(a,b){return a+b;}, 
            // minus:function(a,b){return a-b}, 
            // multiply:function(a,b){return a*b;}, 
            // divide:function(a,b){return Math.floor(a/b);} 
            // }); 
        // var sum = $.add(3,5)+$.minus(3,5)+$.multiply(3,5)+$.divide(5,7); 
        // $.ajax,$.map,$.each
        // d:是否深拷贝,布尔类型（true,false）
        //使用this.each()迭代元素,为了实现多个调用
        //this表示jquery对象（类数组），其中每一个都表示的是DOM节点
        return this.each(function(){
            //遍历(迭代jquery对象时)，这里的this表示DOM节点，若要调用jquery方法，必须转换成jquery对象
            $self=$(this);
            let opt = $.extend(true,{},defaults,opts);//深复制
            opt.len=opt.imgs.length;//图片数量
            // 上一张图处索引值
            let lastIndex = opt.index;
            let $ul;
            let $page;
            //初始化：创建/获取元素，绑定事件
            let init=()=>{
                $self.addClass('banner');//给div.box加上样式
                $self.width(opt.width);//给div.box设置宽高
                $self.height(opt.height);
                $ul=$('<ul/>');//创建ul元素
                //$.map(arr|obj,callback)：根据现有数组生成一个新的数组，新数组的元素为callback内return的值
                //opt.imgs存放图片路径的数组
                //遍历生成li
                let $res=$.map(opt.imgs,function(item,idx){
                    let $li=$('<li/>');
                    let $img=$('<img/>')
                    $img.attr('src',item);
                    $img.appendTo($li);
                    return $li;
                });
                $ul.append($res);
                $ul.appendTo($self);
                if(opt.has_btn){
                    $btn_le=$('<div/>');
                    $btn_le.addClass('banner_arrow_le');
                    $btn_ri=$('<div/>');
                    $btn_ri.addClass('banner_arrow_ri');
                    $btn_le.appendTo($self);
                    $btn_ri.appendTo($self);
                }
                if(opt.page){
                    $page=$('<div/>');
                    $page.addClass('page');
                    for(let i=0;i<opt.len;i++){
                        let $span=$('<span/>');
                        $span.text(i+1);
                        $span.addClass('ver');//默认垂直滚动，页码垂直摆放
                        $span.appendTo($page);
                    }
                    $page.appendTo($self);
                }
                //高亮默认图片对应的数字
                if(opt.page){
                    $page.children().eq(opt.index).addClass('active');
                }
                $ul.css({top:-opt.height*opt.index});
                if(opt.type==='horizontal'){//水平轮播必须设置ul的宽度
                    $page.children().removeClass('ver');
                    $page.children().addClass('hor');
                    $ul.addClass('horizontal');//设置浮动样式
                    $ul.width(opt.width*opt.len);
                    $ul.css({left:-opt.width*opt.index,top:0});
                }else if(opt.type==='fade'){//淡入淡出
                    $ul.addClass('fade');
                    $ul.css({
                        width:opt.width,
                        height:opt.height
                    });
                    $ul.css({top:0});
                    //把除了默认显示的图片(opt.index),其他图片的透明度为0
                    $ul.children('li').eq(opt.index).siblings('li').css('opacity',0);
                }
                if(opt.seamless&&opt.type!='fade'){
                    $ul.children().first('li').clone().appendTo($ul);
                    opt.len=$ul.children().length;
                    if(opt.type==='horizontal'){
                        $ul.width(opt.width*opt.len);
                    }  
                } 
                // 移入移出
                $self.on('mouseenter',()=>{
                    if(opt.has_btn){
                        $btn_le.css({display:'block'});
                        $btn_ri.css({display:'block'});
                    }
                    clearInterval($self.timer);
                }).on('mouseleave',()=>{
                    if(opt.has_btn){
                        $btn_le.css({display:'none'});
                        $btn_ri.css({display:'none'});
                    }
                    move();
                })  
                // 点击页码
                $self.on('mouseenter','.page span',function(){
                    opt.index=$(this).text()-1;
                    show();
                });
                $('.banner_arrow_le').on('click',function(){
                    let idx;
                    for(let i=0;i<$page.children().length;i++){
                        if($page.children().eq(i).hasClass('active')){
                            idx=i;
                            break;
                        }
                    }
                    opt.index=idx;
                    if(opt.index >= opt.len){
                        opt.index = 0;
                    }else if(opt.index <=1){
                        opt.index = opt.len-1;
                    }else{
                        opt.index--;
                    }
                    show();
                });
                $('.banner_arrow_ri').on('click',function(){
                    let idx;
                    for(let i=0;i<$page.children().length;i++){
                        if($page.children().eq(i).hasClass('active')){
                            idx=i;
                            break;
                        }
                    }
                    opt.index=idx;
                    if(opt.index >=opt.len-2||opt.index <0){
                        return;
                    }else{
                        opt.index++;
                    }
                    show();
                });
                if(opt.autoPlay){
                    move();
                }
            }
            let seamless=function(){
                let obj = {};
                if(opt.index>=opt.len){
                    if(opt.type === 'vertical'){
                        $ul.css({top:0});
                        opt.index = 1;
                        if(opt.page){
                            $page.children().eq(opt.index).addClass('active');
                        }
                        obj.top = -opt.height*opt.index;
                        $ul.animate(obj);
                    }
                    else if(opt.type === 'horizontal'){
                        $ul.width(opt.width*opt.len);
                        $ul.css({left:0});
                        opt.index = 1;
                        if(opt.page){
                            $page.children().eq(opt.index).addClass('active');
                        }
                        obj.left = -opt.width*opt.index;
                        $ul.animate(obj);
                    }  
                }else{
                    if(opt.type === 'vertical'){
                        if(opt.index===opt.len-1){
                            if(opt.page){
                                $page.children().eq(0).addClass('active');
                            }   
                        }
                        else{
                            if(opt.page){
                                $page.children().eq(opt.index).addClass('active');
                            }
                        }
                        obj.top = -opt.height*opt.index;
                        $ul.animate(obj);
                    }else if(opt.type === 'horizontal'){
                        if(opt.index===opt.len-1){
                            if(opt.page){
                                $page.children().eq(0).addClass('active');
                            }
                        }
                        else{
                            if(opt.page){
                                $page.children().eq(opt.index).addClass('active');
                            }
                        }
                        // $page.children().eq(opt.index).addClass('active');
                        obj.left = -opt.width*opt.index;
                        $ul.animate(obj);   
                    }
                }
            }
            //显示
            let show = function(){
                if(opt.page){
                    $page.children().filter('.active').removeClass('active');
                }
                if(!opt.seamless){
                   if(opt.index >= opt.len){
                        opt.index = 0;
                    }else if(opt.index < 0){
                        opt.index = opt.len-1;
                    } 
                }
                let obj = {};
                if(opt.type === 'vertical'){
                    if(opt.seamless){
                        seamless();
                    }else{
                        if(opt.page){
                            $page.children().eq(opt.index).addClass('active');
                        }
                        obj.top = -opt.height*opt.index;
                        $ul.animate(obj);
                    }
                }else if(opt.type === 'horizontal'){
                    if(opt.seamless){
                        seamless();
                    }else{
                        if(opt.page){
                            $page.children().eq(opt.index).addClass('active');
                        }
                        obj.left = -opt.width*opt.index;
                        $ul.animate(obj); 
                    }     
                }else if(opt.type === 'fade'){
                    if(opt.index >= opt.len){
                        opt.index = 0;
                    }else if(opt.index < 0){
                        opt.index = opt.len-1;
                    } 
                    if(opt.page){
                        $page.children().eq(opt.index).addClass('active');
                    }
                    // 改变li的opacity
                    $ul.children('li').eq(opt.index).animate({opacity:1},function(){
                        lastIndex = opt.index;
                    });
                    
                    $ul.children('li').eq(lastIndex).animate({opacity:0},function(){
                        lastIndex = opt.index;
                    });
                }
            };
            // 运动
            let move = ()=>{
                $self.timer = setInterval(()=>{
                    opt.index++;
                    show();
                },opt.duration);
            };
            init();
        });
    }
})(jQuery);
//所有的方法或插件必须用分号结尾，避免出问题,为了保证插件的安全性，也可以在插件开始的地方加分号