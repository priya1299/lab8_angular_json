var app = angular.module("myApp", []);
app.controller("roaster_ctrl",function($scope,$http)
{
    $http.get(" https://priya1299.github.io/lab8_angular_json/Lab8_wsd.json")
    .then(function(response)
    {
        $scope.r_list = response.data.roaster;
        $scope.rowlimit = 7;
    });
});

app.filter("name",function()
{
    return function(input)
    {
        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});


app.filter("unit",function()
{
    return function(input)
    {
        return input + " yrs";
    }
});

