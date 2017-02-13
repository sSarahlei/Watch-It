/**
 * Created by Tzofia on 15/01/2017.
 */
myAppAdmin.controller('uploadCtrl', function($scope,$location) {
    // alert(auth2.isSignedIn.get());
    function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
    /* jQuery < 1.7 */
    $(document).bind("keydown", disableF5);
    /* OR jQuery >= 1.7 */
    $(document).on("keydown", disableF5);
    if(auth2.isSignedIn.get()==false){
        $location.path('/');
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

//alert($scope.idWatch);



    }
    $scope.findCompanyItem=function (id) {

        var res=$scope.companyList.filter(function (item,index,nums) {
            return item._id==id;
        })

        $scope.itemToEditC=res[0];



    }
});