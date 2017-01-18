/**
 * Created by Tzofia on 16/01/2017.
 */
var arrCart=new Array();
myApp.controller('cartCtrl',function ($scope,$routeParams){

    sessionStorage.setItem('time',"first");
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');
    // if(localStorage.getItem('cart')!=undefined) {
    //         arr =JSON.parse(localStorage.getItem('cart'));
    // }
    // for(i=0;i<arr.length;i++)
    //     arr[i]=JSON.parse(arr[i]);

    var id=$routeParams.id;
    if(id=='0')
    {
      $scope.cart=JSON.parse(localStorage.getItem('cart'));

    }
    else
    {
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open("GET","http://localhost:3000/getWatchesOrdering/"+id, true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var item = JSON.parse(xmlhttp.responseText);
            if (sessionStorage.getItem('time') == "first") {
                arrCart.push(item[0]);
                //localStorage.setItem('numOfProducts', parseInt(localStorage.getItem('numOfProducts')) + 1);
                sessionStorage.setItem('time', '!first');
            }
            // $scope.cart=arr;
            $scope.cart = arrCart;
            localStorage.setItem('cart',JSON.stringify(arrCart) );

            $scope.$apply();


        }
    }
    }
    $scope.removeItem=function (id) {
       // localStorage.setItem('numOfProducts',parseInt(localStorage.getItem('numOfProducts'))-1);
        var arr=$scope.cart;
        arr.forEach(function(item, index, nums) {
           if(item._id==id)
               arr.splice(index,1);
        } );


        $scope.cart=arr;
        localStorage.setItem('cart',JSON.stringify(arr));
        $scope.$apply();

    }
});