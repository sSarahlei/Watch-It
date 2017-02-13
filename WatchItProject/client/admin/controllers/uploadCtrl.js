/**
 * Created by Tzofia on 15/01/2017.
 */
myAppAdmin.controller('uploadCtrl', function($scope,$location) {
    var i=localStorage.getItem('loaded_3');

    if(i==0|| i==1) {
        if (auth2.isSignedIn.get() == false) {
            $location.path('/');
            localStorage.setItem('loaded_3',0);
        }
    }
    $scope.message = 'ניהול תמונות';
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getWatches", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            $scope.WatchesList = JSON.parse(xmlhttp.responseText);

            $scope.getCompanies();
            $scope.apply();




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

    }
    $scope.findItem=function (id) {

        var res=$scope.WatchesList.filter(function (item,index,nums) {
            return item._id==id;
        })

        $scope.itemToEdit=res[0];
        $scope.idWatch=res[0]._id;


    }
    $scope.findCompanyItem=function (id) {

        var res=$scope.companyList.filter(function (item,index,nums) {
            return item._id==id;
        })

        $scope.itemToEditC=res[0];



    }



    $scope.uploadImage=function () {
        var id=$scope.itemToEdit._id;
        var wId=$scope.itemToEdit.wId;
        var nameFile = $("#imgU").val();
        var image = nameFile.substring(nameFile.lastIndexOf('\\') + 1, nameFile.length);


        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        var document =
            {
                "id": id,
                "image": image,

            };

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                $("#btnSubmit").css('visibility','visible');


            }
        }
        xmlhttp.open('POST', 'http://localhost:3000/updatetWatch');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xmlhttp.send(JSON.stringify(document));
    }
    $scope.uploadImageC=function () {
        var id=$scope.itemToEditC._id;

        var nameFile = $("#imgUC").val();
        var image = nameFile.substring(nameFile.lastIndexOf('\\') + 1, nameFile.length);


        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        var document =
            {
                "id": id,
                "image": image,

            };

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                $("#btnSubmitC").css('visibility','visible');


            }
        }
        xmlhttp.open('POST', 'http://localhost:3000/updateCompany');
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xmlhttp.send(JSON.stringify(document));
    }
});