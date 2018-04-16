/* 
* @Author: Marte
* @Date:   2018-04-13 10:21:50
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-13 17:52:56
*/
require(['config'],function(){
    require(['jquery','ljyBanner','common'],function($){
        var cart_main_cont = document.getElementsByClassName('cart_main_cont')[0];
        var goodslist;
        render();
        function render(){
            goodslist = Cookie.get('goodslist');
            if(goodslist.length === 0){
                goodslist = [];
            }else{
                goodslist = JSON.parse(goodslist);
            }
            var ul=document.createElement('ul');
            var str='';
            for(var i=0;i<goodslist.length;i++){
                str+='<li data-id="'+goodslist[i].id+'">'+
                        '<ul class="ul2 clearfix">'+
                            '<li><input type="checkbox" checked/></li>'+
                            '<li><img src="'+goodslist[i].imgurl+'"/></li>'+
                            '<li><h4>'+goodslist[i].name+'</h4><p>规格：'+goodslist[i].specifications+'</p></li>'+
                            '<li><p>￥<i>'+goodslist[i].price+'</i></p></li>'+
                            '<li><a class="de"></a><input type="txt" value="'+goodslist[i].qty+'" class="qty"/><a class="add"></a></li>'+
                            '<li><p>省<span> 0 </span>元</p></li>'+
                            '<li><p>'+goodslist[i].weight+'千克</p></li>'+
                            '<li><p class="total_price"></p></li>'+
                            '<li><a class="del">删除<a></li>'+
                        '</ul>'+
                    '</li>';
            }
            ul.innerHTML=str;
            cart_main_cont.innerHTML='';
            cart_main_cont.appendChild(ul);
            var total_price=document.getElementsByClassName('total_price');
            var sum=0;
            var sum_qty=0;
            for(var i=0;i<total_price.length;i++){
                var qty=total_price[i].parentNode.parentNode.children[4].getElementsByTagName('input')[0];
                sum_qty+=parseInt(qty.value);
                var price=total_price[i].parentNode.parentNode.children[3].getElementsByTagName('i')[0].innerHTML;
                var t_price=Number(price)*Number(qty.value);
                t_price=t_price.toFixed(2);
                total_price[i].innerHTML='￥'+t_price;
                sum+=Number(price)*Number(qty.value);
            }
            var summary=document.createElement('div');
            summary.className="clearfix sum";
            var str_li=
                    `
                    <div class="fl le">
                        <a>删除选中的商品</a><span>共选中<i></i>种商品</span>
                    </div>
                    <div class="fr ri">
                        <p>共<span>${sum_qty}</span>件商品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总计：<span>${sum.toFixed(2)}</span>元</p>
                        <p>还差<span></span>元包邮<a>去凑单></a></p>
                    </div>
                    `;
            summary.innerHTML=str_li;
            cart_main_cont.appendChild(summary);
        }
        //点击修改商品数量
        cart_main_cont.onclick=function(e){
            e=e||window.event;
            var target=e.target||e.srcElement;
            if(target.className==='add'){
                target.previousElementSibling.value++;
                var id =target.parentNode.parentNode.parentNode.getAttribute('data-id');
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty=target.previousElementSibling.value*1;
                        break;
                    }
                }
                Cookie.set('goodslist',JSON.stringify(goodslist));
                render(); 
                check();
            }else if(target.className==='de'){
                if(Number(target.nextElementSibling.value)<=1){
                    target.nextElementSibling.value=1;
                }
                else{
                    target.nextElementSibling.value--;
                }
                var id =target.parentNode.parentNode.parentNode.getAttribute('data-id');
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty=target.nextElementSibling.value*1;
                        break;
                    }
                }
                Cookie.set('goodslist',JSON.stringify(goodslist));
                render(); 
                check();
            }else if(target.className==='del'){
                // 删除商品，重新写入cookie以及html结构
                var idx=target.parentNode.parentNode.parentNode.getAttribute('data-id');
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === idx){
                        goodslist.splice(i,1);
                        break;
                    }
                } 
                Cookie.set('goodslist',JSON.stringify(goodslist));
                render();
                check();
            }
        } 
        //输入框的值改变时（手动输入）
        cart_main_cont.onchange=function(e){
            e=e||window.event;
            var target=e.target||e.srcElement;
            if(target.className==='qty'){
                var id =target.parentNode.parentNode.parentNode.getAttribute('data-id');
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty=target.value*1;
                        break;
                    }
                }
                Cookie.set('goodslist',JSON.stringify(goodslist));
                render(); 
                check();
            }
        } 
        //全选
        check();
        function check(){
            let all=document.querySelector('.all');
            let ul2=document.querySelectorAll('.ul2');
            let sum=document.querySelector('.sum');
            let sum_price=sum.querySelector('.ri').children[0].children[1];
            let checked_qty=sum.querySelector('.le').getElementsByTagName('i')[0];
            if(all.checked){
                for(let i=0;i<ul2.length;i++){
                    ul2[i].querySelector('input').checked=true;
                }
                checked_qty.innerHTML=ul2.length;
            }
            all.onclick=function(){
                if(!all.checked){
                   let ul2=document.querySelectorAll('.ul2');
                    for(let i=0;i<ul2.length;i++){
                        ul2[i].querySelector('input').checked=false;
                    }  
                    sum_price.innerHTML=0.00;
                    checked_qty.innerHTML=0;
                }
                else if(all.checked){
                    let ul2=document.querySelectorAll('.ul2');
                    for(let i=0;i<ul2.length;i++){
                        ul2[i].querySelector('input').checked=true;
                    }
                    let sum_p=0;
                    for(let i=0;i<ul2.length;i++){
                        sum_p+=ul2[i].querySelectorAll('li')[7].children[0].innerHTML.slice(1)*1;
                        sum_price.innerHTML=sum_p.toFixed(2);
                    }
                    checked_qty.innerHTML=ul2.length;
                }
            }
        } 
        // let ul2=document.querySelectorAll('.ul2');
        // let sum=document.querySelector('.sum');
        // let n=0;
        // let checked_qty=sum.querySelector('.le').getElementsByTagName('i')[0];
        // for(let i=0;i<ul2.length;i++){
        //     ul2[i].onclick=function(){
        //         if(ul2[i].querySelector('input').checked){
        //             n++;
        //         }
        //     }
        // } 
        // checked_qty.innerHTML=n;
        // if(n===ul2.length){
        //     let all=document.querySelector('.all');
        //     all.checked=true;
        // } 

    })
})