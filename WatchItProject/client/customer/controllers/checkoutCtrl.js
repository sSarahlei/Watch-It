/**
 * Created by Tzofia on 20/12/2016.
 */
var sum=0;
myApp.controller('checkoutCtrl',function ($scope,$routeParams) {
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');

    var id=$routeParams.id;
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    console.log(id);
    xmlhttp.open("GET","http://localhost:3000/getWatchesOrdering/"+id, true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            $scope.singleWatch = JSON.parse(xmlhttp.responseText);
            for(i=0;i<$scope.singleWatch.length;i++){
                sum+=$scope.singleWatch[i].endPrice;
            }
            $scope.totalSum=sum;

            $scope.$apply();

        }
    }
});