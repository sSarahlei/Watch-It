var companies =new Array();
myAppAdmin.controller('watchController', function($scope) {

    function companies_name(arr) {
        if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");


        xmlhttp.open("GET", "http://localhost:3000/getCompanies", true);
        xmlhttp.send();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var result = JSON.parse(xmlhttp.responseText);
                for (property in result) {

                    companies.push(result[property].name);

                }

                $scope.companies = companies;


            }



        }




    }


    $scope.message = 'שעונים';
    if (window.XMLHttpRequest)
        var xmlhttp = new XMLHttpRequest();
    else
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://localhost:3000/getWatches", true);

    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            $scope.watchesList=JSON.parse(xmlhttp.responseText);
            $scope.$apply();
        }

    }


//tzofia
    $scope.deleteWatch=function(id) {
        var res=$scope.watchesList.filter(function (item,index,nums) {
            return item._id==id;
        })
        if(confirm('האם אתה בטוח שהינך מעוניין למחוק את ההזמנה זו ')){

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            xmlhttp.open("GET","http://localhost:3000/deleteWatch/"+id, true);

            xmlhttp.send();

            xmlhttp.onreadystatechange = function(){
                if (xmlhttp.readyState==4 && xmlhttp.status==200){
                    //alert(xmlhttp.responseText);
                    $scope.watchesList=JSON.parse(xmlhttp.responseText);
                    $scope.$apply();
                }

            }
        }
    }
    //receiving all companies in select

// $scope.getName=function () {
//     companies_name();
// }


//end of generating companies

    $scope.category = ["גברים", "נשים"];
    $scope.stock = ["זמין", "לא זמין"];
    $scope.type = ["אנלוגי","דיגיטלי","כרונוגרף"];
    companies_name();


    $scope.updateCompany=function(selected) {
        $scope.selectedCompany = selected;


    }
    $scope.updateCategory=function(selected) {

        $scope.selectedCategory = selected;


    }
    $scope.updateStock=function(selected) {

        $scope.selectedStock = selected;

    }
    $scope.updateType=function(selected) {

        $scope.selectedType = selected;

    }
    $scope.findItem=function (id) {
        var res=$scope.watchesList.filter(function (item,index,nums) {
            return item._id==id;
        })

        console.log(res[0].type-1);
        $scope.selectedOptionType=$scope.type[(res[0].type)-1];
        var ind;
        if(res[0].inStock==true)
            ind=0;
        else
            ind=1;
        $scope.selectedOptionInStock=$scope.stock[ind];
        $scope.selectedOptionCategory=$scope.category[res[0].category-1];
        console.log(companies[0]);
        var indComp=companies.forEach(function(item, index, nums) {
            if(item==res[0].company)
                $scope.selectedOptionCompany = item;


        } );


        $scope.itemToEdit=res[0];


    }

    $scope.insertWatch = function (form) {
        if (form.$valid) {
            switch ($scope.selectedType)
            {
                case 'אנלוגי':  $scope.my_type='1';break;
                case 'דיגיטלי':  $scope.my_type='2';break;
                case 'כרונוגרף':  $scope.my_type='3';break;

                default: ;break;
            }
            switch ($scope.selectedStock)
            {
                case 'זמין': $scope.my_inStock='true';break;
                case 'לא זמין': $scope.my_inStock='false';break;

            }
            switch ($scope.selectedCategory)
            {
                case 'גברים': $scope.my_category='1';break;
                case 'נשים': $scope.my_category='2';break;

            }

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            var document =
                {
                    "wId":$scope.myModel,
                    "model": $scope.model,
                    "company": $scope.selectedCompany,
                    "priceList": $scope.priceList,
                    "endPrice": $scope.endPrice,
                    "inStock": $scope.my_inStock,
                    "type": $scope.my_type,
                    "details": $scope.details,
                    "image": $scope.image,
                    "category":$scope.my_category
                };

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.watchesList = JSON.parse(xmlhttp.responseText);
                    $scope.$apply();


                }
            }
            xmlhttp.open('POST', 'http://localhost:3000/insertWatch');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        }


    }

    $scope.updateWatch = function (form) {
        if (form.$valid) {
            switch ($scope.selectedType)
            {
                case 'אנלוגי':  $scope.my_type='1';break;
                case 'דיגיטלי':  $scope.my_type='2';break;
                case 'כרונוגרף':  $scope.my_type='3';break;

                default: ;break;
            }
            switch ($scope.selectedStock)
            {
                case 'זמין': $scope.my_inStock='true';break;
                case 'לא זמין': $scope.my_inStock='false';break;

            }
            switch ($scope.selectedCategory)
            {
                case 'גברים': $scope.my_category='1';break;
                case 'נשים': $scope.my_category='2';break;

            }

            if (window.XMLHttpRequest)
                var xmlhttp = new XMLHttpRequest();
            else
                var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

            var document =
                {
                    "id":$scope.itemToEdit._id,
                    "wId":$('#wId').val(),
                    "model": $('#model').val(),
                    "company": $scope.selectedCompany,
                    "priceList": $('#priceList').val(),
                    "endPrice": $('#endPrice').val(),
                    "inStock": $scope.my_inStock,
                    "type": $scope.my_type,
                    "details": $('#details').val(),
                    "image": $('#image').val(),
                    "category":$scope.my_category
                };

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    $scope.watchesList = JSON.parse(xmlhttp.responseText);
                    $scope.$apply();


                }
            }
            xmlhttp.open('POST', 'http://localhost:3000/updatetWatch');
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xmlhttp.send(JSON.stringify(document));
        }


    }
    $scope.findItem=function (id) {
        var res=$scope.companyList.filter(function (item,index,nums) {
            return item._id==id;
        })
        $scope.itemToEdit=res[0];

    }

});