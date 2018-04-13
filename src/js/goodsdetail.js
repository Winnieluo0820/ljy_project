/* 
* @Author: Marte
* @Date:   2018-04-11 11:58:41
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-12 18:03:01
*/
require(['config'],function(){
    require(['jquery','ljyBanner','zoom','common'],function($){
        let $img_cont=$('#kdl_detail_main').find('.show_box').children('img');
        let $name=$('.main_cont_detail_ce').children('h3');
        let $price=$('.price_num').children('.sp2');
        let $common_name=$('.goods_info').find('h4').eq(0);
        let $factory_house=$('.goods_info').find('h4').eq(1);
        let $approval_number=$('.goods_info').find('h4').eq(2);
        let $specifications=$('.goods_info').find('h4').eq(3);
        let $smallImgs=$('.smallImgs');
        ajax({
            url:'../api/goodsdetail.php'+location.search,
            success:function(data){
                let arr=data[0].imgurl_detail.split(',');
                $img_cont.attr('src',arr[0]);
                $name.text(data[0].goods_name);
                $price.text(data[0].price);
                $common_name.text(data[0].common_name);
                $factory_house.text(data[0].factory_house);
                $approval_number.text(data[0].approval_number);
                $specifications.text(data[0].specifications);
                let $ul=$('<ul/>');
                let html=arr.map(function(item){
                    return `
                            <li>
                                <img src="${item}">
                            </li>
                            `
                }).join('');
                $ul.html(html);
                $ul.appendTo($smallImgs);
                for(let i=0;i<arr.length;i++){
                    $ul.children().eq(i).on('mouseenter',function(){
                        for(let i=0;i<arr.length;i++){
                            $ul.children().eq(i).css({border:'1px solid #ddd'});
                        }
                        $(this).css({border:'1px solid #ff9696'});
                        $img_cont.attr('src',arr[i]);
                    //     $('.show_box').xZoom({
                    //     width:398,height:398
                    // })
                    })
                }
                //放大镜
                jQuery(function($){
                    // $('.show_box').shift(arr);
                    $('.show_box').xZoom({
                        width:398,height:398
                    })
                });
                
            }
        });
        var arr=['广州越秀','广州越秀','广州海珠','广州荔湾','北京海淀','北京朝阳','成都青羊','成都武侯','上海徐汇','上海浦东','上海静安','济南店','杭州店','西安店','南京店','昆明店','武汉雪松','武汉江汉','天津店','无锡店','重庆店','福州店','南宁店','沈阳店','深圳店','湛江店','中山店','厦门店','佛山店','汕头店',];
        var imgs=[{
                img1:'../img/gzyx1-01.jpg',
                img2:'../img/gzyx1-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx2-01.jpg',
                img2:'../img/gzyx2-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/zh-01.jpg',
                img2:'../img/zh-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzlw-01.jpg',
                img2:'../img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx1-01.jpg',
                img2:'../img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx2-01.jpg',
                img2:'../img/gzyx2-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/zh-01.jpg',
                img2:'../img/zh-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzlw-01.jpg',
                img2:'../img/gzlw-02.jpg',
                phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx1-01.jpg',
                img2:'../img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx2-01.jpg',
                img2:'../img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/zh-01.jpg',
                img2:'../img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzlw-01.jpg',
                img2:'../img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx1-01.jpg',
                img2:'../img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx2-01.jpg',
                img2:'../img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/zh-01.jpg',
                img2:'../img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzlw-01.jpg',
                img2:'../img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx1-01.jpg',
                img2:'../img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx2-01.jpg',
                img2:'../img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/zh-01.jpg',
                img2:'../img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzlw-01.jpg',
                img2:'../img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx1-01.jpg',
                img2:'../img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx2-01.jpg',
                img2:'../img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/zh-01.jpg',
                img2:'../img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzlw-01.jpg',
                img2:'../img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx1-01.jpg',
                img2:'../img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx2-01.jpg',
                img2:'../img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/zh-01.jpg',
                img2:'../img/zh-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzlw-01.jpg',
                img2:'../img/gzlw-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx1-01.jpg',
                img2:'../img/gzyx1-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                img1:'../img/gzyx2-01.jpg',
                img2:'../img/gzyx2-02.jpg',phone:'020-87613558',
                addr:'广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                }
                ];
        let $main_cont_detail_ri=$('.main_cont_detail_ri');
        //城市门店列表
        let $ul_city=$('<ul/>');
        $ul_city.addClass('clearfix');
        $ul_city.addClass('city');
        for(let i=0;i<arr.length;i++){
            let $li=$(`<li data-id="${i}"/>`);
            $li.text(arr[i]);
            $li.appendTo($ul_city);
        }
        $ul_city.appendTo($main_cont_detail_ri);
        $ul_city.children().eq(2).addClass('active');
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
        let $p_i=$('<i>');
        $p_i.appendTo($p_ad);
        $p_ad.text(imgs[2].addr);
        $p_ad.addClass('ad');
        $p_phone.appendTo($addr);
        $p_ad.appendTo($addr);
        $addr.appendTo($market_info);
        $market_info.appendTo($main_cont_detail_ri);
        $ul_city.on('mouseenter','li',function(){
            for(let i=0;i<$ul_city.children().length;i++){
                $ul_city.children().eq(i).removeClass('active');
            }
            $(this).addClass('active');
            $img1.attr('src',imgs[$(this).data('id')].img1);
            $img2.attr('src',imgs[$(this).data('id')].img2);
            $p_phone.text(imgs[$(this).data('id')].phone);
            $p_ad.text(imgs[$(this).data('id')].addr);
        })
        //点击更换图片
        $ul_img.on('click','a',function(){
            if($li1.hasClass('hide')){
                $li1.attr('class','show');
                $li2.attr('class','hide');
            }else if($li2.hasClass('hide')){
                $li1.attr('class','hide');
                $li2.attr('class','show');
            }
        })
    })
});