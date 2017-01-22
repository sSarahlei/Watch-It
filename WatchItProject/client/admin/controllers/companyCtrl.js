/**
 * Created by Tzofia on 15/01/2017.
 */
myAppAdmin.controller('companyCtrl',function ($scope) {
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
    //add now


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
                    "image": $('#imageW').val(),
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

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            var document =
                {
                    "name": $scope.name,
                    "image": $scope.image,
                    "percentCalc": $scope.percentCalc,
                    "percentProfit": $scope.percentProfit,
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

    // $scope.detailsToUpdate=function () {
    //
    //     var textD= $(this).text();
    //     $(this).text('');
    //     var textBox=$("<input type='text'/>").text(textD).val(textD);
    //     $(this).append(textBox);
    //
    //
    //
    //
    // }
$scope.findItem=function (id) {
    var res=$scope.companyList.filter(function (item,index,nums) {
        return item._id==id;
    })
    $scope.itemToEdit=res[0];

}
});