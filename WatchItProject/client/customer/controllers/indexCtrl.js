/**
 * Created by Tzofia on 20/12/2016.
 */

myApp.controller('indexCtrl',function ($scope) {
   // if(localStorage.getItem('numOfProducts')==undefined)
   // {
   //     $scope.numOfProducts=0;
   //     localStorage.setItem('numOfProducts',0);
   // }
   // if(localStorage.getItem('totalPrice')==undefined)
   // {
   //     $scope.totalPrice=0;
   //     localStorage.setItem('totalPrice',0);
   // }

    var my_class=$("#index_banner").attr('class');

    if(!(my_class.localeCompare("men_banner"))){

        $("#index_banner").removeClass('men_banner');
        $("#index_banner").addClass('banner');
    }
});