/**
 * Created by Tzofia on 20/12/2016.
 */
var WatchesMen=new Array();
var len;
var p=9;
myApp.controller('menCtrl',function ($scope) {
    $scope.foundOne = true;
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
            WatchesMen=JSON.parse(xmlhttp.responseText);
            $scope.getCompanies();
            len=parseInt((WatchesMen.length)/p);
            if(parseInt((WatchesMen.length)% p)!=0)
                len+=1;
            //alert(len);
            console.log(WatchesMen.length);
            var pages=new Array(len);
            for(i=0;i<len;i++) {
                pages[i] = i + 1;
            }
            $scope.foundOne = true;
            $scope.pages=pages;
            $scope.WatchesListMen = WatchesMen.slice(0,p);
            //$("#li1").addClass('active');
            // $scope.WatchesListMen = JSON.parse(xmlhttp.responseText);
            $scope.WatchesListMenToView = $scope.WatchesListMen;
            $scope.$apply();


        }
    }
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
        },
        $scope.replaceWatches=function (page) {

            $scope.WatchesListMen = WatchesMen.slice(p*parseInt(page-1),parseInt(p*parseInt(page-1)+p));

            $(".active").removeClass('active');
            $("#li"+page).addClass('active');
        },


        $scope.getWatchesByCat=function(){
            $scope.foundOne = true;
            $scope.WatchesListMenToView = $scope.WatchesListMen;
            console.log( $scope.WatchesListMenToView );
            //$scope.$apply();

        },

        $scope.getWatchesByCompany=function(company){

            $scope.foundOne = false;
            var viewWatches= {};
            var counter =0;
            for(var key in $scope.WatchesListMen){
                if ($scope.WatchesListMen.hasOwnProperty(key)) {
                    if($scope.WatchesListMen[key].company.localeCompare(company)==0)
                    {
                        viewWatches[counter]=$scope.WatchesListMen[key];
                        counter++;
                        $scope.foundOne = true;
                    }
                }
            }
            $scope.WatchesListMenToView = viewWatches;
            console.log( $scope.WatchesListMenToView );
            // $scope.$apply();
        },

        $scope.getWatchesByType=function(type){
            $scope.foundOne = false;
            var viewWatches= {};
            var counter =0;
            for(var key in $scope.WatchesListMen){
                if ($scope.WatchesListMen.hasOwnProperty(key))
                {
                    if($scope.WatchesListMen[key].type.localeCompare(type)==0)
                    {
                        viewWatches[counter]=$scope.WatchesListMen[key];
                        counter++;
                        $scope.foundOne = true;
                    }
                }
            }
            $scope.WatchesListMenToView = viewWatches;
            console.log( $scope.WatchesListMenToView );
            //$scope.$apply();

        },

        $scope.getWatchesByPrice=function(minPrice, maxPrice){
            $scope.foundOne = false;
            var viewWatches= {};
            var counter =0;
            for(var key in $scope.WatchesListMen){
                if ($scope.WatchesListMen.hasOwnProperty(key)) {
                    if ((minPrice == 2000 && parseInt($scope.WatchesListMen[key].endPrice) >= 2000) ||parseInt($scope.WatchesListMen[key].endPrice) >= minPrice && parseInt($scope.WatchesListMen[key].endPrice) <= maxPrice){
                        viewWatches[counter]=$scope.WatchesListMen[key];
                        counter++;
                        $scope.foundOne = true;
                    }
                }
            }
            $scope.WatchesListMenToView = viewWatches;
            console.log( $scope.WatchesListMenToView );
            //$scope.$apply();
        }


    $scope.$watch('WatchesListMenToView', function (){
        //  $scope.$apply();
    });


});
