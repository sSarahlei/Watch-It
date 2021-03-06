/**
 * Created by Tzofia on 15/01/2017.
 */
myAppAdmin.controller('companyCtrl',function ($scope,$location) {

    var i=localStorage.getItem('loaded');

    if(i==0|| i==1) {
        if (auth2.isSignedIn.get() == false) {
            $location.path('/');
            localStorage.setItem('loaded',0);
        }
    }
    $scope.message = 'חברה';
    var time=true;
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
            // console.log(id);
            xmlhttp.open("GET","http://localhost:3000/deleteCompany/"+id, true);

            xmlhttp.send();

            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    $scope.companyList=JSON.parse(xmlhttp.responseText);
                    $scope.$apply();
                }

            }
        }
    }
    //chedva
    $scope.update = function(form) {
        if(form.$valid) {

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            var document =
                {
                    "id":$scope.itemToEdit._id,
                    "name": $scope.itemToEdit.name,
                    "percentCalc": $('#percentCalc').val(),
                    "percentProfit": $('#percentProfit').val(),
                    "details":  $('#update_details').val()
                };

            xmlhttp.onreadystatechange = function () {

                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.companyList = JSON.parse(xmlhttp.responseText);
                    $scope.$apply();


                }
            }

            xmlhttp.open('POST', 'http://localhost:3000/updateCompany');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        }



    }


    $scope.insertCompany = function(form) {
        if(form.$valid) {
            var companyNames;
			 //   //validation for no duplicate companies:
            var companyString = JSON.stringify($scope.companyList);
             for(var i=0; i<($scope.companyList).length; i++) {
                 companyNames+=$scope.companyList[i]["name"];
             }


             var n = companyNames.indexOf($scope.name);

            if (n > 0) {
                alert("חברה זו קיימת כבר במאגר!");
            }
            //if company does not exist yet
            else {

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            var document =
                {
                    "name": $scope.name,
                    "percentCalc": JSON.stringify($scope.percentCalc),
                    "percentProfit":JSON.stringify( $scope.percentProfit),
                    "details": $scope.details
                };

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.companyList = JSON.parse(xmlhttp.responseText);
                    $scope.$apply();


                }
            }
            xmlhttp.open('POST', 'http://localhost:3000/insertCompany');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        }
		}



    }


    $scope.findItem=function (id) {
        var res=$scope.companyList.filter(function (item,index,nums) {
            return item._id==id;
        })

        $scope.itemToEdit=res[0];
        $scope.image=res[0].image;
        console.log(res[0].percentCalc);
        $scope.percentCalc=res[0].percentCalc;

        $scope.percentProfit=res[0].percentProfit;
        $scope.details=res[0].details;


    }

});