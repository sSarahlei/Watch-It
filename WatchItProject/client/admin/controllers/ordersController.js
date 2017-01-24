/**
 * Created by Tzofia on 15/01/2017.
 */
myAppAdmin.controller('ordersController', function($scope) {
    var arrList;
    $scope.showBtn=false;
    $scope.showDivPayment=false;
    $scope.showDivCustomer=false;
    $scope.message = 'הזמנה';
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getOrders", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){

            arrList=JSON.parse(xmlhttp.responseText);
            $scope.ordersList=arrList.filter(function (item,index,nums) {
                return item.status!=4;
            });


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
    $scope.statusT = [" לא טופל","התקבל","הוזמן","נשלח ללקוח"];
    $scope.updateStatusT=function(selected) {
        $scope.selectedStatusT = selected;


    }

    $scope.insertOrder = function(form) {
        if(form.$valid) {
            switch ($scope.selectedStatusT)
            {
                case 'לא טופל':  $scope.my_stat='1';break;
                case 'הוזמן מהספק':  $scope.my_stat='2';break;
                case 'התקבל':  $scope.my_stat='3';break;
                case 'נשלח ללקוח':  $scope.my_stat='4';break;

                default: ;break;
            }

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            var document=
                {
                    clientName:$scope.clientName,
                    clientMail:$scope.clientMail,
                    clientPhone:$scope.clientPhone,
                    watchCompany:$scope.watchCompany,
                    watchModel:$scope.watchModel,
                    watchWId:$scope.watchWId,
                    dateOrder:$scope.example.value,
                    statusT: $scope.my_stat
                };

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                    $scope.ordersList = JSON.parse(xmlhttp.responseText);

                    $scope.$apply();



                }
            }
            xmlhttp.open('POST', 'http://localhost:3000/insertOrder');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        }



    }

    $scope.getOldOrders=function () {
        $scope.ordersList=arrList.filter(function (item,index,nums) {
            return item.status==4;
        });
        // $("#btnOld").hide;
        $scope.showBtn=true;


    }
    $scope.getNewOrders=function () {
        $scope.ordersList=arrList.filter(function (item,index,nums) {
            return item.status!=4;
        });
        // $("#btnOld").hide;
        $scope.showBtn=false;


    }
    $scope.getPayment=function(id) {

        $scope.showDivPayment=true;

        var res=arrList.filter(function (item,index,nums) {

            return item._id==id;
        });
        $scope.paymentToShow=res[0];
    }
    $scope.closePayment=function () {
        $scope.showDivPayment=false;
    }

    $scope.getCustomer=function(id) {

        $scope.showDivCustomer=true;

        var res=arrList.filter(function (item,index,nums) {

            return item._id==id;
        });
        $scope.customerToShow=res[0];

    }
    $scope.closeCustomer=function () {
        $scope.showDivCustomer=false;
    }



});