/**
 * Created by Tzofia on 15/01/2017.
 */
myAppAdmin.controller('ordersController', function($scope) {
    var arrList;
    $scope.showBtn=false;
    $scope.showDivPayment=false
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

    $scope.insertOrder = function(form) {
        if(form.$valid) {

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            var document=
                {
                    "client" :$scope.customerId,
                    "watch" :$scope.watchId,
                    "payment" :$scope.payment,
                    "dateOrder" :"999"
                };

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.orderList = JSON.parse(xmlhttp.responseText);

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
      // alert($scope.paymentToShow.wId);
    }
    $scope.closePayment=function () {
        $scope.showDivPayment=false;
    }

});