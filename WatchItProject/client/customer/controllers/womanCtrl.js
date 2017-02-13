/**
 * Created by Tzofia on 20/12/2016.
 */
var p=9;
var WatchesWomen=new Array();
var len;
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

            WatchesWomen = JSON.parse(xmlhttp.responseText);
            $scope.getCompanies();
            $scope.foundOne = true;
            len=parseInt((WatchesWomen.length)/p);
            if(parseInt((WatchesWomen.length)% p)!=0)
                len+=1;
            //alert(len);
            console.log(WatchesWomen.length);
            var pages=new Array(len);
            for(i=0;i<len;i++) {
                pages[i] = i + 1;
            }
            $scope.pages=pages;

            $scope.WatchesListWomen = WatchesWomen;
            $scope.WatchesListWomanToView = $scope.WatchesListWomen.slice(0,p);
            $scope.showPageNums=true;
            $scope.filterMessage= " ";


        }
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
            $scope.showPageNums=false;
            $scope.filterMessage= "מציג שעוני " + company;
            // $scope.$apply();
        },
        $scope.getWatchesByType=function(type,title){
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
            $scope.showPageNums=false;
            $scope.filterMessage="מציג שעוני " + title ;
            //$scope.$apply();

        },

        $scope.getWatchesByPrice=function(minPrice, maxPrice){
            $scope.foundOne = false;
            var viewWatches= {};
            var counter = 0;
            for(var key in $scope.WatchesListWomen){
                if ($scope.WatchesListWomen.hasOwnProperty(key)) {
                    if ((minPrice == 2000 && parseInt($scope.WatchesListWomen[key].endPrice) >= 2000) || parseInt($scope.WatchesListWomen[key].endPrice) >= minPrice && parseInt($scope.WatchesListWomen[key].endPrice) <= maxPrice){
                        viewWatches[counter]=$scope.WatchesListWomen[key];
                        counter++;
                        $scope.foundOne = true;
                    }
                }
            }
            $scope.WatchesListWomanToView = viewWatches;
            $scope.showPageNums=false;
            $scope.filterMessage="מציג שעונים שמחירם בין " + minPrice + " שח ל " + maxPrice + " שח";
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
    $scope.replaceWatches=function (page) {

        $scope.WatchesListWomanToView = WatchesWomen.slice(p*parseInt(page-1),parseInt(p*parseInt(page-1)+p));


        $(".active").removeClass('active');
        $("#li"+page).addClass('active');
        $scope.foundOne = true;
        $scope.showPageNums=true;
        $scope.filterMessage= " ";
    }

});