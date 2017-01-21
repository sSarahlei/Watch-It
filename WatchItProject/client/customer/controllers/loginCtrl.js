/**
 * Created by Tzofia on 20/12/2016.
 */

myApp.controller('loginCtrl',function ($scope, $http) {
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');

    $scope.insertUser = function(form) {
        alert("in registernctrl");
        console.log("!!!in register controller");
        //if(form.$valid) {

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
            if(document!=undefined) {
                alert("whats in here?" + document);
            }

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.userList = JSON.parse(xmlhttp.responseText);
                    $scope.$apply();


                }
            }
            xmlhttp.open('GET', 'http://localhost:3000/insertUser');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        //}



    }
    $scope.login = function () {
        if ($scope.myForm.$invalid)
            return;

        $scope.result = {};
        $scope.result.isLogged = false;
        $http.post('/auth/login', $scope.user)
            .success(function (response) {
                $scope.result = response;
                if (response.isLogged == true) {
                    window.location.reload();
                    if (response.user.isManager)
                        window.location.replace('admin/index');
                    else
                        window.location.replace('#index');
                }
                else
                    $scope.result.class = "errMessage";


                console.log('after login');
                console.log($scope.result);

            })
            .error(function (error) {
                console.log('Error: ' + error);
                console.log('HTTP: ' + $http);

            });
        console.log('after post');

    }




});