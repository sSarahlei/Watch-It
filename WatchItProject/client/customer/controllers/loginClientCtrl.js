
    /**
     * Created by Coopersmith Family on 1/20/2017.
     */

    myApp.controller('loginClientCtrl',function ($scope) {

        $scope.signing = function (form) {
            if (form.$valid) {

                if (window.XMLHttpRequest)
                    var xmlhttp = new XMLHttpRequest();
                else
                    var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                var document =
                    {
                        "name": $scope.name,
                        "password": $scope.password

                    };

                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        $scope.companyList = JSON.parse(xmlhttp.responseText);
                        $scope.$apply();


                    }
                }
                xmlhttp.open('POST', 'http://localhost:3000/signing');
                xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
                xmlhttp.send(JSON.stringify(document));
            }


        }
    });