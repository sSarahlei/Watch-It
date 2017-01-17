/**
 * Created by Tzofia on 20/12/2016.
 */
myApp.controller('loginCtrl',function ($scope, $http) {
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');

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