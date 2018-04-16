/* 
* @Author: Marte
* @Date:   2018-04-09 15:17:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-15 17:12:44
*/
require(['config'],function(){
    require(['jquery','ljyBanner','common'],function($){
        //轮播图（利用插件）
        let $banner_cont=$('.banner_cont');
        let $banner_side=$('.banner_side');
        $banner_cont.banner({
            width:670,//宽
            height:455,//高
            index:0,//默认显示图片索引
            duration:2000,//轮播间隔时间
            type:'horizontal', 
            page:true,
            seamless:true,
            imgs:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg','img/banner6.jpg']
        });
        //门店切换
        var arr=['广州越秀','广州越秀','广州海珠','广州荔湾','北京海淀','北京朝阳','成都青羊','成都武侯','上海徐汇','上海浦东','上海静安','济南店','杭州店','西安店','南京店','昆明店','武汉雪松','武汉江汉','天津店','无锡店','重庆店','福州店','南宁店','沈阳店','深圳店','湛江店','中山店','厦门店','佛山店','汕头店',];
        var imgs=[{
                img1:'img/gzyx1-01.jpg',
                img2:'img/gzyx1-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx2-01.jpg',
                img2:'img/gzyx2-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/zh-01.jpg',
                img2:'img/zh-02.jpg',
                phone:'020-84302866,020-84263051 ',
                addr:'广州市海珠区工业大道中路255-257号首层自编04A（广州市海珠区工业大道与南泰路..'
                },{
                img1:'img/gzlw-01.jpg',
                img2:'img/gzlw-02.jpg',phone:'020-81809319',
                addr:'广州市荔湾区明心路7号（脑科医院正对面）'
                },{
                img1:'img/gzyx1-01.jpg',
                img2:'img/gzyx1-02.jpg',phone:'010-56295383',
                addr:'北京市海淀区复兴路甲38号A2-6'
                },{
                img1:'img/gzyx2-01.jpg',
                img2:'img/gzyx2-02.jpg',
                phone:'020-87613558',
                addr:'北京市朝阳区广渠路28号205号楼1层205-北126'
                },{
                img1:'img/zh-01.jpg',
                img2:'img/zh-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzlw-01.jpg',
                img2:'img/gzlw-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx1-01.jpg',
                img2:'img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx2-01.jpg',
                img2:'img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/zh-01.jpg',
                img2:'img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzlw-01.jpg',
                img2:'img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx1-01.jpg',
                img2:'img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx2-01.jpg',
                img2:'img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/zh-01.jpg',
                img2:'img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzlw-01.jpg',
                img2:'img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx1-01.jpg',
                img2:'img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx2-01.jpg',
                img2:'img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/zh-01.jpg',
                img2:'img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzlw-01.jpg',
                img2:'img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx1-01.jpg',
                img2:'img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx2-01.jpg',
                img2:'img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/zh-01.jpg',
                img2:'img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzlw-01.jpg',
                img2:'img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx1-01.jpg',
                img2:'img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'img/gzyx2-01.jpg',
                img2:'img/gzyx2-02.jpg',phone:'0759-2232989',
                addr:'广东省湛江市霞山区人民大道南61号3栋综合大楼南边起第一、二门面（即湛江四建对面）'
                },{
                img1:'img/zh-01.jpg',
                img2:'img/zh-02.jpg',phone:'0760-88820607',
                addr:'中山市石岐区莲塘路1号乐陶苑商住楼7-8卡（市人民医院斜对面，市第一幼儿园对面）'
                },{
                img1:'img/gzlw-01.jpg',
                img2:'img/gzlw-02.jpg',phone:'0592-2121922,0592-2121663',
                addr:'厦门市思明区湖滨南路140号'
                },{
                img1:'img/gzyx1-01.jpg',
                img2:'img/gzyx1-02.jpg',phone:'0757-83103800',
                addr:'广东省佛山市禅城区影荫路玫瑰大街13号1铺（医保定点）'
                },{
                img1:'img/gzyx2-01.jpg',
                img2:'img/gzyx2-02.jpg',phone:'0754-88579078',
                addr:'汕头市金平区汕樟路6号之一（中心医院对面，红星宾馆旁）'
                }
                ];
        //城市门店列表
        let $ul_city=$('<ul/>');
        $ul_city.addClass('clearfix');
        $ul_city.addClass('city');
        for(let i=0;i<arr.length;i++){
             let $li=$(`<li data-id="${i}"/>`);
            $li.text(arr[i]);
            $li.appendTo($ul_city);
        }
        $ul_city.appendTo($banner_side);
        $ul_city.children().eq(1).addClass('active');
        let $market_info=$('<div/>');
        $market_info.addClass('market_info');
        //门店图片
        let $ul_img=$('<ul/>');
        let $a_le=$('<a/>');
        $a_le.addClass('a_le');
        let $a_ri=$('<a/>');
        $a_ri.addClass('a_ri');
        $a_le.appendTo($ul_img);
        $a_ri.appendTo($ul_img);
        let $li1=$('<li/>');
        let $li2=$('<li/>');
        let $img1=$('<img/>');
        let $img2=$('<img/>');
        $img1.attr('src',imgs[2].img1);
        $img2.attr('src',imgs[2].img2);
        $img1.appendTo($li1);
        $img2.appendTo($li2);
        $li1.appendTo($ul_img);
        $li2.appendTo($ul_img);
        $li2.addClass('hide');
        $ul_img.appendTo($market_info);
        //门店地址
        let $addr=$('<div/>');
        $addr.addClass('addr');
        let $p_phone=$('<p/>');
        $p_phone.text(imgs[2].phone);
        $p_phone.addClass('phone');
        let $p_ad=$('<span/>');
        $p_ad.html('<i></i>'+imgs[2].addr);
        $p_ad.addClass('ad');
        $p_phone.appendTo($addr);
        $p_ad.appendTo($addr);
        $addr.appendTo($market_info);
        $market_info.appendTo($banner_side);
        $ul_city.on('mouseenter','li',function(){
            for(let i=0;i<$ul_city.children().length;i++){
                $ul_city.children().eq(i).removeClass('active');
            }
            $(this).addClass('active');
            $img1.attr('src',imgs[$(this).data('id')].img1);
            $img2.attr('src',imgs[$(this).data('id')].img2);
            $p_phone.text(imgs[$(this).data('id')].phone);
            $p_ad.html('<i></i>'+imgs[$(this).data('id')].addr);
        })
        //点击更换图片以及信息
        $ul_img.on('click','a',function(){
            if($li1.hasClass('hide')){
                $li1.attr('class','show');
                $li2.attr('class','hide');
            }else if($li2.hasClass('hide')){
                $li1.attr('class','hide');
                $li2.attr('class','show');
            }
        })
        //切换
        var goods_top_le=document.querySelector('.goods_top_le');
        var details=document.querySelector('.details');
        var lis=goods_top_le.children[0].children;
        var details_lis=details.children;
        lis[0].classList.add('active');
        let details2s_0=details_lis[0].children[1].children;
        let li2s_0=details_lis[0].children[0].children;
        li2s_0[0].classList.add('active');
        for(let n=0;n<details2s_0.length;n++){
            if(n>0){
                details2s_0[n].classList.add('hide');
            }
            li2s_0[n].onmouseenter = function(){
                for(let m=0;m<li2s_0.length;m++){
                    li2s_0[m].classList.remove('active');
                    details2s_0[m].classList.remove('show');
                    details2s_0[m].classList.add('hide');
                }
                li2s_0[n].classList.add('active');
                details2s_0[n].classList.remove('hide');
                details2s_0[n].classList.add('show');
            }
        }
        for(let n=0;n<details2s_0.length;n++){
            if(n>0){
                details2s_0[n].classList.add('hide');
            }
        }
        for(let i=0;i<details_lis.length;i++){
            if(i>0){
                details_lis[i].classList.add('hide');
            }
            lis[i].onmouseenter = function(){
                var idx;
                var index=i;
                for(let j=0;j<lis.length;j++){
                    if(lis[j] === this){
                        idx = j;
                    }
                    lis[j].classList.remove('active');
                    details_lis[j].classList.remove('show');
                    details_lis[j].classList.add('hide');
                    var details2s=details_lis[index].children[1].children;
                    var li2s=details_lis[index].children[0].children;
                    li2s[0].classList.add('active');
                    for(let n=0;n<details2s.length;n++){
                        if(n>0){
                            details2s[n].classList.add('hide');
                        }
                        li2s[n].onmouseenter = function(){
                            for(let m=0;m<li2s.length;m++){
                                li2s[m].classList.remove('active');
                                details2s[m].classList.remove('show');
                                details2s[m].classList.add('hide');
                            }
                            li2s[n].classList.add('active');
                            details2s[n].classList.remove('hide');
                            details2s[n].classList.add('show');
                        }
                    }
                }
                this.classList.add('active');
                details_lis[idx].classList.remove('hide');
                details_lis[idx].classList.add('show');
            }
        }
        //tab 切换1
        var usual_cont_ri=document.querySelector('.usual_cont_ri');
        var cont1=usual_cont_ri.querySelector('.cont');
        var lis1=usual_cont_ri.children[1].children[0].children;
        var conts1=cont1.children;
        lis1[0].classList.add('orange');
        for(var i=0;i<conts1.length;i++){
            if(i>0){
                conts1[i].style.display = 'none';
            }
            lis1[i].onmouseover = function(){
                var idx;
                for(var i=0;i<lis1.length;i++){
                    if(lis1[i] === this){
                        idx = i;
                    }
                    lis[i].classList.remove('orange');
                    conts1[i].style.display = 'none';
                }
                this.classList.add('orange');
                conts1[idx].style.display = 'block';
            }
        }
        //tab 切换2
        var spec_cont_ri=document.querySelector('.spec_cont_ri');
        var cont2=spec_cont_ri.querySelector('.cont');
        var lis2=spec_cont_ri.children[1].children[0].children;
        var conts2=cont2.children;
        for(var i=0;i<conts2.length;i++){
            if(i>0){
                conts2[i].style.display = 'none';
            }
            lis2[i].onmouseover = function(){
                var idx;
                for(var i=0;i<lis2.length;i++){
                    if(lis2[i] === this){
                        idx = i;
                    }
                    lis2[i].classList.remove('green');
                    conts2[i].style.display = 'none';
                }
                this.classList.add('green');
                conts2[idx].style.display = 'block';
            }
        }
        //轮播动画
        // let buy_ul=document.querySelector('.buy_img').children[0];
        // let target=buy_ul.offsetWidth;
        // console.log(target);
        // animate(buy_ul,{left:-target});
    });
});