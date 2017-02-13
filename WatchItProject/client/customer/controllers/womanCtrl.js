/**
 * Created by Tzofia on 20/12/2016.
 */
myApp.controller('womanCtrl',function ($scope) {
    $scope.foundOne = true;
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');

    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getWatchesWomen", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            $scope.foundOne = true;
            $scope.WatchesListWomen = JSON.parse(xmlhttp.responseText);
            $scope.getCompanies();
            $scope.WatchesListWomanToView = $scope.WatchesListWomen;
            $scope.$apply();


        }
    },
        $scope.getWatchesByCat=function(){
            $scope.foundOne = true;
            $scope.WatchesListWomanToView = $scope.WatchesListWomen;
            //$scope.$apply();

        },
        $scope.getWatchesByCompany=function(company){
            $scope.foundOne = false;
            var viewWatches= {};
            var counter =0;
            for(var key in $scope.WatchesListWomen){
                if ($scope.WatchesListWomen.hasOwnProperty(key)) {
                    if($scope.WatchesListWomen[key].company.localeCompare(company)==0)
                    {
                        viewWatches[counter]=$scope.WatchesListWomen[key];
                        counter++;
                        $scope.foundOne = true;
                    }
                }
            }
            $scope.WatchesListWomanToView = viewWatches;
            // $scope.$apply();
        },
        $scope.getWatchesByType=function(type){
            $scope.foundOne = false;
            var viewWatches= {};
            var counter =0;
            for(var key in $scope.WatchesListWomen){
                if ($scope.WatchesListWomen.hasOwnProperty(key)) {
                    if($scope.WatchesListWomen[key].type.localeCompare(type)==0)
                    {
                        viewWatches[counter]=$scope.WatchesListWomen[key];
                        counter++;
                        $scope.foundOne = true;
                    }
                }
            }
            $scope.WatchesListWomanToView = viewWatches;
            //$scope.$apply();

        },

        $scope.getWatchesByPrice=function(minPrice, maxPrice){
            $scope.foundOne = false;
            var viewWatches= {};
            var counter =0;
            for(var key in $scope.WatchesListWomen){
                if ($scope.WatchesListWomen.hasOwnProperty(key)) {
                    if ((minPrice == 2000 && parseInt($scope.WatchesListMen[key].endPrice) >= 2000) ||parseInt($scope.WatchesListMen[key].endPrice) >= minPrice && parseInt($scope.WatchesListMen[key].endPrice) <= maxPrice){
                        viewWatches[counter]=$scope.WatchesListWomen[key];
                        counter++;
                        $scope.foundOne = true;
                    }
                }
            }
            $scope.WatchesListWomanToView = viewWatches;
            //$scope.$apply();
        },

        $scope.getCompanies=function () {
            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.open("GET","http://localhost:3000/getCompanies", true);

            xmlhttp.send();

            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    $scope.companyList=JSON.parse(xmlhttp.responseText);
                     $scope.$apply();
                }

            }
        },
        $scope.$watch('WatchesListWomanToView', function (){
            //$scope.$apply();
        });

});