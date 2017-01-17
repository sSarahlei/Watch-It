/**
 * Created by Tzofia on 20/12/2016.
 */
myApp.controller('singleCtrl',function ($scope,$routeParams) {
alert($routeParams.id);
    $("#index_banner").removeClass('banner');
    $("#index_banner").addClass('men_banner');

});