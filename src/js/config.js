/* 
* @Author: Marte
* @Date:   2018-04-09 15:19:01
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-11 19:23:14
*/
require.config({
    paths:{
        jquery:'../lib/jquery-3.2.1',
        ljyBanner:'../lib/jquery-ljyBanner/jquery.ljyBanner',
        zoom:'../lib/jquery-ljyZoom/jquery.ljyZoom',
        common:'common'
    },
    shim:{
        ljyBanner:['jquery'],
        zoom:['jquery']
    }
});
