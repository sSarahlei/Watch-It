/**
 * Created by Tzofia on 20/12/2016.
 */
myApp.controller('menCtrl',function ($scope) {
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');

    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getWatchesMen", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            $scope.WatchesListMen = JSON.parse(xmlhttp.responseText);
           // var arr=JSON.parse(xmlhttp.responseText);
            $scope.$apply();

        }
    }
    
    $scope.singleWatch=function (id) {
        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        xmlhttp.open("GET","http://localhost:3000/getSingle"+id, true);

        xmlhttp.send();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //$scope.WatchesListMen = JSON.parse(xmlhttp.responseText);


            }
        }
    }

});