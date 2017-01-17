/**
 * Created by Tzofia on 16/01/2017.
 */
var arr=new Array();
myApp.controller('cartCtrl',function ($scope,$routeParams){
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');
    // if(localStorage.getItem('cart')!=undefined) {
    //         arr =JSON.parse(localStorage.getItem('cart'));
    // }
    // for(i=0;i<arr.length;i++)
    //     arr[i]=JSON.parse(arr[i]);

    var id=$routeParams.id;
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open("GET","http://localhost:3000/getWatchesOrdering/"+id, true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var item=JSON.parse(xmlhttp.responseText);
            arr.push(item);
           // $scope.cart=arr;
            $scope.cart=item;
            $scope.$apply();


        }
    }
});