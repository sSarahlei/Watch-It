/**
 * Created by Tzofia on 20/12/2016.
 */

myApp.controller('singleCtrl',function ($scope,$routeParams) {
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');

   var id=$routeParams.id;
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    console.log(id);
    xmlhttp.open("GET","http://localhost:3000/getSingle/"+id, true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            $scope.singleWatch = JSON.parse(xmlhttp.responseText);
            //sarah added
            $scope.watchModel=($scope.singleWatch[0]).model;
            $scope.watchCompany=($scope.singleWatch[0]).company;
            $scope.watchPrice=($scope.singleWatch[0]).endPrice;

            //
            $scope.$apply();

        }
    }


});