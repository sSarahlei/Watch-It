/**
 * Created by Tzofia on 18/01/2017.
 */
/**
 * Created by Tzofia on 16/01/2017.
 */
var arrComp=new Array();
myApp.controller('comparisonCtrl',function ($scope,$routeParams){

    sessionStorage.setItem('timeC',"first");
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');

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
            if(sessionStorage.getItem('timeC')=="first") {
                arrComp.push(item[0]);
                sessionStorage.setItem('timeC', '!first');
            }

            $scope.comp=arrComp;
            $scope.$apply();


        }
    }
    $scope.removeItem=function (id) {

        var arr=$scope.comp;
        arr.forEach(function(item, index, nums) {
            if(item._id==id)
                arr.splice(index,1);
        } );


        $scope.comp=arr;
        $scope.$apply();

    }
});