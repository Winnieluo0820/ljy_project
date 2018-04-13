/* 
* @Author: Marte
* @Date:   2018-04-09 15:17:57
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-09 18:02:51
*/
require(['config'],function(){
    require(['jquery','ljyBanner'],function($){
        //轮播图（利用插件）
        let $banner_cont=$('.banner_cont');
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
                }
                ];
        let $banner_side=$('.banner_side');
        //城市门店列表
        let $ul_city=$('<ul/>');
        $ul_city.addClass('city');
        for(let i=0;i<arr.length;i++){
            let $li=$('<li/>');
            $li.text(arr[i]);
            $li.appendTo($ul_city);
        }
        $ul_city.appendTo($banner_side);
        $ul_city.children().eq(1).addClass('active');
        //门店图片
        let $ul_img=$('<ul/>');
        $ul_img.addClass('img');
        let $li=$('<li/>');
        let $img1=$('<img/>');
        $img1.attr('src',imgs[1].img1);
        let $img2=$('<img/>');
        $img2.attr('src',imgs[1].img2);
        $img1.appendTo($li);
        $img2.appendTo($li);
        $li.appendTo($ul_img);
        $ul_img.appendTo($banner_side);
        //门店地址
        let $addr=$('<div/>');
        $addr.addClass('addr');
        let $p_phone=$('<p/>');
        $p_phone.text(imgs[1].phone);
        $p_phone.addClass('phone');
        let $p_ad=$('<p/>');
        $p_ad.text(imgs[1].addr);
        $p_ad.addClass('ad');
        $p_phone.appendTo($addr);
        $p_ad.appendTo($addr);
        $addr.appendTo($banner_side);
    });
});