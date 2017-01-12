/**
 * Created by Tzofia on 20/12/2016.
 */

myApp.controller('indexCtrl',function ($scope) {
    var my_class=$("#index_banner").attr('class');

    if(!(my_class.localeCompare("men_banner"))){

        $("#index_banner").removeClass('men_banner');
        $("#index_banner").addClass('banner');
    }
});