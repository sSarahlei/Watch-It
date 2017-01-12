
myAppAdmin.controller('companyCtrl',function ($scope) {
    alert("hhh");

    $scope.message = 'חברה';

    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET", "http://localhost:3000/getCompanies", true);

    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            $scope.companyList = JSON.parse(xmlhttp.responseText);
            $scope.$apply();


        }
    }
    //sarah:
    $scope.submitForm = function(form){
        alert("form is not valid");
        if(!form.$valid) {
            alert("form is not valid");
        }
    };
    $scope.insert = function() {

        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         var document=
        {
            "name":$scope.name,
            "image" :$scope.image,
            "percentCalc" :$scope.percentCalc,
            "percentProfit" :$scope.percentProfit,
            "details" :$scope.details
        };


        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                $scope.companyList = JSON.parse(xmlhttp.responseText);
                $scope.$apply();



        }
    }
            xmlhttp.open('POST', 'http://localhost:3000/insertCompany');
            xmlhttp.setRequestHeader("Content-Type","application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));




        }
    //tzofia
    $scope.deleteCompany=function(id) {
        var res=$scope.companyList.filter(function (item,index,nums) {
            return item._id==id;
        })
        if(confirm('האם אתה בטוח שהינך מעוניין למחוק את החברה '+res[0].name+" ?")){

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            console.log(id);
            xmlhttp.open("GET","http://localhost:3000/deleteCompany/"+id, true);

            xmlhttp.send();

            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    //alert(xmlhttp.responseText);
                    $scope.companyList=JSON.parse(xmlhttp.responseText);
                    $scope.$apply();
                }

            }
        }
    }

});
myAppAdmin.controller('ordersController', function($scope) {
    $scope.message = 'הזמנה';
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getOrders", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            $scope.ordersList=JSON.parse(xmlhttp.responseText);

            $scope.$apply();
        }

    }


//tzofia
    $scope.deleteOrder=function(id) {
        var res=$scope.ordersList.filter(function (item,index,nums) {
            return item._id==id;
        })
        if(confirm('האם אתה בטוח שהינך מעוניין למחוק את ההזמנה זו ')){

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.open("GET","http://localhost:3000/deleteOrders/"+id, true);

            xmlhttp.send();

            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    //alert(xmlhttp.responseText);
                    $scope.ordersList=JSON.parse(xmlhttp.responseText);
                    $scope.$apply();
                }

            }
        }
    }



});
myAppAdmin.controller('rightsController', function($scope) {
    $scope.message = 'הרשאות';
});
myAppAdmin.controller('watchController', function($scope) {
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



});