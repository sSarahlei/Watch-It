/**
 * Created by Coopersmith Family on 1/22/2017.
 */
/**
 * Created by Tzofia on 20/12/2016.
 */

myAppAdmin.controller('loginCtrl',function ($scope) {
    $scope.insertUser = function(form) {
        if(form.$valid) {
alert("in login controller");
            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            var document =
                {
                    "firstName": $scope.firstName,
                    "lastName": $scope.lastName,
                    "number": $scope.number,
                    "email": $scope.email,
                    "password": $scope.password,
                    "passwordValid": $scope.passwordValid
                };

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.userList = JSON.parse(xmlhttp.responseText);
                    $scope.$apply();


                }
            }
            xmlhttp.open('POST', 'http://localhost:3000/insertUser');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        }



    }


        });

