/* 
* @Author: Marte
* @Date:   2018-04-10 15:37:09
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-12 16:14:19
*/
require(['config'],function(){
    require(['jquery','ljyBanner','common'],function($){
        let goodslist=document.querySelector('.main_cont_goods');
        let page_txt=document.querySelector('.page').children[0];
        let page_numbers=document.querySelector('.page_numbers');
        let pro_ri_ri1=document.querySelectorAll('.pro_ri_ri')[0];
        let pro_ri_ri2=document.querySelectorAll('.pro_ri_ri')[1];
        let to_page1=document.querySelectorAll('.to_page')[0];
        let to_page2=document.querySelectorAll('.to_page')[1];
        let rank_saleQty=document.querySelector('.rank').children[1].children[0];
        let rank_date=document.querySelector('.rank').children[2].children[0];
        let xhr=new XMLHttpRequest();
        let status=[200,304];
        //每页的商品个数
        let qty=28;
        let page_num=page_txt.innerHTML;
        xhr.onload=function(){
            if(status.includes(xhr.status)){
                let res=eval('('+xhr.responseText+')');
                let ul=document.createElement('ul');
                ul.className="clearfix";
                ul.innerHTML=res.data.map(item=>{
                    return `
                            <li data-id="${item.id}">
                                <div class="pic">
                                    <img src="${item.imgurl}"/>
                                </div>
                                <h4><a>${item.goods_name}</a></h4>
                                <p>￥&nbsp;${item.price}<span class="fr">在售</span></p>
                                <div class="bot clearfix">
                                    <input type="text" value="1">
                                    <span class="fl">
                                        <a class="add"></a>
                                        <a class="decrease"></a>
                                    </span>
                                    <div class="addToCart fl">
                                        <a>加入购物车</a>
                                    </div>
                                    <div class="buy fr">
                                        <a>立即购买</a>
                                    </div> 
                                </div>
                            </li>
                            `
                }).join('');
                goodslist.innerHTML='';
                goodslist.appendChild(ul);
                //根据数据库表中的记录总数得出总商品数以及分页数
                let pages=Math.ceil(res.total_qty/res.qty);
                pro_ri_ri1.children[0].children[0].innerHTML=res.total_qty;
                pro_ri_ri1.children[1].children[1].innerHTML=pages;
                pro_ri_ri2.children[0].children[0].innerHTML=res.total_qty;
                pro_ri_ri2.children[1].children[1].innerHTML=pages;
                page_numbers.innerHTML='';
                //生成页码
                for(let i=0;i<pages;i++){
                    let link=document.createElement('a');
                    link.href="#";
                    link.innerText=i+1;
                    if(res.page==i+1){
                        link.className='active';
                    }
                    page_numbers.appendChild(link);
                }
                //点击商品跳转到详情页（传递id）
                for(let i=0;i<goodslist.children[0].children.length;i++){
                    goodslist.children[0].children[i].onclick=function(){
                        location.href='../html/goodsdetail.html?id='+this.dataset.id;
                    }
                }
            }
        };
        xhr.open('get','../api/goodslist.php?qty='+qty+'&page='+page_num,true);
        xhr.send();
        //点击页数高亮当前页，显示对应商品
        page_numbers.onclick=function(e){
            if(e.target.tagName.toLowerCase()==='a'){
                let _page=e.target.innerText*1;
                //更改相应地方的页数
                pro_ri_ri1.children[1].children[0].innerHTML=_page;
                pro_ri_ri2.children[1].children[0].innerHTML=_page;
                xhr.open('get','../api/goodslist.php?qty='+qty+'&page='+_page,true);
                xhr.send();
            }
        }
        //输入框填入页数时（上面），点击确定按钮，显示对应商品
        to_page1.onclick=function(e){
            if(e.target.tagName.toLowerCase()==='a'){
                let _input=e.target.previousElementSibling.value*1;
                let pages=pro_ri_ri1.children[1].children[1].innerHTML*1;
                if(typeof _input==='number'&&_input>=1&&_input<=pages){
                    pro_ri_ri1.children[1].children[0].innerHTML=_input;
                    pro_ri_ri2.children[1].children[0].innerHTML=_input;
                    xhr.open('get','../api/goodslist.php?qty='+qty+'&page='+_input,true);
                    xhr.send();
                }
                else{
                    return;
                }
            }
        }
        //输入框填入页数时（下面），点击确定按钮，显示对应商品
        to_page2.onclick=function(e){
            if(e.target.tagName.toLowerCase()==='a'){
                let _input=e.target.previousElementSibling.value*1;
                let pages=pro_ri_ri1.children[1].children[1].innerHTML*1;
                if(typeof _input==='number'&&_input>=1&&_input<=pages){
                    pro_ri_ri1.children[1].children[0].innerHTML=_input;
                    pro_ri_ri2.children[1].children[0].innerHTML=_input;
                    xhr.open('get','../api/goodslist.php?qty='+qty+'&page='+_input,true);
                    xhr.send();
                }
                else{
                    return;
                }

            }
        }
        //同步上下两个输入框中的页数
        let input1=to_page1.children[0];
        let input2=to_page2.children[0];
        input1.onblur=function(){
            input2.value=this.value;
        }
        input2.onblur=function(){
            input1.value=this.value;
        }
        //点击销量排序
        rank_saleQty.onclick=function(){
            rank_date.className='desc';
            let rank_type='sale_qty';
            let rank;
            if(rank_saleQty.className==='desc'){
                rank_saleQty.className='active_desc';
                rank='desc';
            }else if(rank_saleQty.className==='active_desc'){
                rank_saleQty.className='active_asc';
                rank='asc';
            }else if(rank_saleQty.className==='active_asc'){
                rank_saleQty.className='active_desc';
                rank='desc';
            }
            xhr.open('get','../api/goodslist.php?qty='+qty+'&page='+page_num+'&rank_type='+rank_type+'&rank='+rank,true);
            xhr.send();
        }
        //点击最新排序
        rank_date.onclick=function(){
            rank_saleQty.className='desc';
            let rank_type='recode_date';
            let rank;
            if(rank_date.className==='desc'){
                rank_date.className='active_desc';
                rank='desc';
            }else if(rank_date.className==='active_desc'){
                rank_date.className='active_asc';
                rank='asc';
            }else if(rank_date.className==='active_asc'){
                rank_date.className='active_desc';
                rank='desc';
            }
            xhr.open('get','../api/goodslist.php?qty='+qty+'&page='+page_num+'&rank_type='+rank_type+'&rank='+rank,true);
            xhr.send();
        }
        //城市门店
        var arr=['广州越秀店1','广州越秀店2','广州海珠店','广州荔湾店','北京海淀店','北京朝阳店','成都青羊店','成都武侯店','上海徐汇店','上海浦东店','上海静安店','济南店','杭州店','西安店','南京店','昆明店','武汉雪松店','武汉江汉店','天津店','无锡店','重庆店','福州店','南宁店','沈阳店','深圳店','湛江店','中山店','厦门店','佛山店','汕头店'];
        var imgs=[{
                imgurl:'../img/market1.jpg',
                phone:'广州越秀店1：020-87613558',
                addr:'地址：广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },
                {
                imgurl:'../img/market2.jpg',
                phone:'广州越秀店2：020-87613558',
                addr:'地址：广东省广州市越秀区先烈南路21号之一（中山大学肿瘤医院斜对面）'
                },{
                imgurl:'../img/market3.jpg',
                phone:'广州海珠店：020-84302866，020-84263051 ',
                addr:'地址：广州市海珠区工业大道中路255-257号首层自编04A（广州市海珠区工业大道与南泰路..'
                },{
                imgurl:'../img/market4.jpg',
                phone:'广州荔湾店：020-81809319 ',
                addr:'地址：广州市荔湾区明心路7号（脑科医院正对面）'
                },{
                imgurl:'../img/market5.jpg',
                phone:'北京海淀店：010-56295383',
                addr:' 地址：北京市海淀区复兴路甲38号A2-6'
                },{
                imgurl:'../img/market6.jpg',
                phone:'北京朝阳店：010-57106044，010-58637320 ',
                addr:'地址：北京市朝阳区广渠路28号205号楼1层205-北126'
                },{
                imgurl:'../img/market7.jpg',
                phone:'成都青羊店：028-86723398，028-86725308',
                addr:'地址：成都市青羊区一环路西二段4号一层（四川省人民医院门诊大门出门右转200米）'
                },{
                imgurl:'../img/market8.jpg',
                phone:'成都武侯店：028-85033975 ',
                addr:'地址：成都市武侯区玉林北街1号附7、8号玉林品上1层商铺。（一环路九茹村好又多背面）'
                },{
                imgurl:'../img/market9.jpg',
                phone:'上海徐汇店：021-33685859 ',
                addr:'地址：上海市徐汇区虹桥路808号B103室（距离地铁虹桥路站400米）'
                },{
                imgurl:'../img/market10.jpg',
                phone:'上海浦东店：021-60752616 ',
                addr:'地址：上海市浦东新区杨高南路2875号102-1室（靠近成山路）'
                },{
                imgurl:'../img/market11.jpg',
                phone:'上海静安店：021-62116175',
                addr:'地址：上海静安区武定路970号'
                },{
                imgurl:'../img/market12.jpg',
                phone:'济南店：0531-55707708，0531-55707709 ',
                addr:'地址：济南市槐荫区经七路纬十二路兴盛小区1号楼2号商铺'
                },{
                imgurl:'../img/market13.jpg',
                phone:'杭州店：0571-86684585，0571-87634789',
                addr:' 地址：杭州市下城区建国北路55号'
                },{
                imgurl:'../img/market14.jpg',
                phone:'西安店：029-85238986，85238862',
                addr:'地址：西安市西京医院对面向西100米（第四军医大学口腔医院正对面）'
                },{
                imgurl:'../img/market15.jpg',
                phone:'南京店：025-83729931，025-83722721',
                addr:'地址：南京市玄武区北京东路8号'
                },{
                imgurl:'../img/market16.jpg',
                phone:'昆明店：0871-68252737',
                addr:'地址：昆明市西山区昆州路135号'
                },{
                imgurl:'../img/market17.jpg',
                phone:'武汉雪松店：027-82803266，82819093，82819526',
                addr:'地址：武汉市江汉区雪松路13号'
                },{
                imgurl:'../img/market18.jpg',
                phone:'武汉江汉店：027-82803266，027-82819093',
                addr:'地址：武汉市江汉区常青一路站北二村239号学林华府1栋1-2层6号'
                },{
                imgurl:'../img/market19.jpg',
                phone:'天津店：022-27821381，022-27821383 ',
                addr:'地址：天津市和平区卫津路99号（鞍山道与卫津路交口右转100米）'
                },{
                imgurl:'../img/market20.jpg',
                phone:'无锡店：0510-85856699 ',
                addr:'地址：无锡市梁溪区学前东路59-B'
                },{
                imgurl:'../img/market21.jpg',
                phone:'重庆店：023-68611609，023-68622993',
                addr:'地址：重庆市九龙坡区奥体路1号附31号（轻轨站2号线袁家岗站下车A出口...'
                },{
                imgurl:'../img/market22.jpg',
                phone:'福州店：0591-87888537，0591-87880905',
                addr:'地址：福建省福州市鼓楼区五一北路101号'
                },{
                imgurl:'../img/market23.jpg',
                phone:'南宁店：0771-5326077，0771-5326277 ',
                addr:'地址：南宁市青秀区双拥路9-8号明湖花园B座一层7号（广西医科大学正门对面）'
                },{
                imgurl:'../img/market24.jpg',
                phone:'沈阳店：024-31040592，024-31048556',
                addr:'地址：沈阳市铁西区艳粉街68号3门（中国医大盛京医院滑翔分院西门南行350米）'
                },{
                imgurl:'../img/market25.jpg',
                phone:'深圳店：0755-82674700，0755-82674780',
                addr:'地址：深圳市罗湖区华丽路翠华花园30栋底层商场A2062号'
                },{
                imgurl:'../img/market26.jpg',
                phone:'湛江店：0759-2232989 ',
                addr:'地址：广东省湛江市霞山区人民大道南61号3栋综合大楼南边起第一、二门面（即湛江四建对面）'
                },{
                imgurl:'../img/market27.jpg',
                phone:'中山店：0760-88820607',
                addr:'地址：中山市石岐区莲塘路1号乐陶苑商住楼7-8卡（市人民医院斜对面，市第一幼儿园对面）'
                },{
                imgurl:'../img/market28.jpg',
                phone:'厦门店：0592-2121922，0592-2121663',
                addr:'地址：厦门市思明区湖滨南路140号'
                },{
                imgurl:'../img/market29.jpg',
                phone:'佛山店：0757-83103800 ',
                addr:'地址：广东省佛山市禅城区影荫路玫瑰大街13号1铺（医保定点）'
                },{
                imgurl:'../img/market30.jpg',
                phone:'汕头店：0754-88579078，0754-88579079 ',
                addr:'地址：汕头市金平区汕樟路6号之一（中心医院对面，红星宾馆旁）'
                }
                ];
        let $market=$('.market');
        //城市门店列表
        let $ul_city=$('<ul/>');
        $ul_city.addClass('clearfix');
        $ul_city.addClass('city');
        for(let i=0;i<arr.length;i++){
            let $li=$(`<li data-id="${i}"/>`);
            $li.text(arr[i]);
            $li.appendTo($ul_city);
        }
        $ul_city.appendTo($market);
        $ul_city.children().eq(1).addClass('active');
        let $market_info=$('<div/>');
        $market_info.addClass('market_info');
        //门店图片
        let $img=$('<img/>');
        $img.attr('src',imgs[1].imgurl);
        $img.appendTo($market_info);
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
        $addr.appendTo($market_info);
        $market_info.appendTo($market);
        $ul_city.on('mouseenter','li',function(){
            for(let i=0;i<$ul_city.children().length;i++){
                $ul_city.children().eq(i).removeClass('active');
            }
            $(this).addClass('active');
            $img.attr('src',imgs[$(this).data('id')].imgurl);
            $p_phone.text(imgs[$(this).data('id')].phone);
            $p_ad.text(imgs[$(this).data('id')].addr);
        })
        //导航(点击显示二级导航)
        let $sortlist=$('.sortlist');
        $sortlist.on('click','.a1',function(e){
            let $i=$(this).children('i');
            console.log($(this));
            if($i.attr('class')==='add'){
                $i.attr('class','de');
            }else if($i.attr('class')==='de'){
                $i.attr('class','add');
            }
            let $nav2=$(this).next('.nav2');
            if($nav2.hasClass('hide')){
                $nav2.removeClass('hide');
                $nav2.addClass('show');
            }else if($nav2.hasClass('show')){
                $nav2.removeClass('show');
                $nav2.addClass('hide');
            }
        })
        $sortlist.on('click','ul .li2>a',function(e){
            let $i=$(this).children('i');
            if($i.attr('class')==='li2_add'){
                $i.attr('class','li2_de');
            }else if($i.attr('class')==='li2_de'){
                $i.attr('class','li2_add');
            }
            let $nav3=$(this).next('.nav3');
            if($nav3.hasClass('hide')){
                $nav3.removeClass('hide');
                $nav3.addClass('show');
            }else if($nav3.hasClass('show')){
                $nav3.removeClass('show');
                $nav3.addClass('hide');
            }  
        })
    });
});