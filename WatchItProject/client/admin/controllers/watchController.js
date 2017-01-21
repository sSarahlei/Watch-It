/**
 * Created by Tzofia on 15/01/2017.
 */


myAppAdmin.controller('watchController', function($scope) {

    function companies_name(arr) {
        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        var companies =new Array();

        xmlhttp.open("GET", "http://localhost:3000/getCompanies", true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var result = JSON.parse(xmlhttp.responseText);
                for (property in result) {

                    companies.push(result[property].name);

                }

                $scope.companies = companies;


            }



        }




    }


    $scope.message = 'שעונים';
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getWatches", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            $scope.watchesList=JSON.parse(xmlhttp.responseText);
            $scope.$apply();
        }

    }


//tzofia
    $scope.deleteWatch=function(id) {
        var res=$scope.watchesList.filter(function (item,index,nums) {
            return item._id==id;
        })
        if(confirm('האם אתה בטוח שהינך מעוניין למחוק את ההזמנה זו ')){

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.open("GET","http://localhost:3000/deleteWatch/"+id, true);

            xmlhttp.send();

            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    //alert(xmlhttp.responseText);
                    $scope.watchesList=JSON.parse(xmlhttp.responseText);
                    $scope.$apply();
                }

            }
        }
    }
    //receiving all companies in select

$scope.getName=function () {
    companies_name();
}


//end of generating companies

    $scope.category = ["גברים", "נשים"];
    $scope.stock = ["זמין", "לא זמין"];
    $scope.type = ["דיגיטלי", "אוטומט","כרונוגרף","אנלוגי"];
    companies_name();

    $scope.$apply();




    $scope.updateCategory=function(selected) {

        $scope.selectedCategory = selected;
    }
    $scope.updateStock=function(selected) {

        $scope.selectedStock = selected;
    }
    $scope.updateType=function(selected) {

        $scope.selectedType = selected;
    }

    $scope.insertWatch = function (form) {
        if (form.$valid) {

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            var document =
                {
                    "model": $scope.model,
                    "priceList": $scope.priceList,
                    "endPrice": $scope.endPrice,
                    "inStock": $scope.selectedStock,
                    "type": $scope.selectedType,
                    "details": $scope.details,
                    "image": $scope.image,
                    "category":$scope.selectedCategory
                };

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.watchesList = JSON.parse(xmlhttp.responseText);
                    $scope.$apply();


                }
            }
            xmlhttp.open('POST', 'http://localhost:3000/insertWatch');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        }


    }



});