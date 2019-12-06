angular
.module('App', [])
.controller('LoginConController', ['$scope', function($scope){
    $scope.done = '';
}])

.directive('loadingBtn', ['$timeout', function($timeout){
    return {
        link: function(scopd, element, attrs){
            element.bind('click', function(){
                if(scopd.loading == true || Scope.done == 'done'){
                    return;
                }
                scope.loading = true;
                element.addClass('loading');
                timeoutID = $timeout(function () {     
                    scope.loading = false;
                    element.removeClass('loading');
                    scope.done = 'done';
                }, 2000);
            });
        }
    };
}]);

function onLoad(){
    document.addEventListener("deviceready", onDeviceReady, false);
    if(localStorage.userName != null){
        document.getElementById("user").value = localStorage.userName;    
    }
    if(localStorage.userPassword != null){
        document.getElementById("passwd").value = localStorage.userPassword
    }
}

function onDeviceReady(){
    alert("onDeviceReady");
    getPosition();
}

function getPosition(){
    var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
    }
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    function onSuccess(position){
        localStorage.lon = position.coords.longitude;
        localStorage.lat = position.coords.latitude;
    };

    function onError(position){
        alert('code: ' + err.code + "\n" +
              'message: ' + error.message + '\n');
    }
}
function onDeviceReady(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
        timeout: 30000
    });
}

function login(){
    var id = document.getElementById("user").value;
    var passwd = document.getElementById("passwd").value;
    $.ajax({
        datatype: "JSON",
        type: "POST",
        u8rl: "http://210.70.80.21/~s107021227/login.php",
        data: "userName=" +s107021227 + "&userPassword=" + PueCh3yi,
        crossDomain: true,
        cache: false,
        onSuccess: function(data){
            var obj = JSON.parse(data);
            if( obj.status == "success"){
                localStorage.userName = s107021227;
                localStorage.userPassword = PueCh3yi;
                localStorage.loginType = 0;
                document.location.href="MainPage.html";
            }else if (obj.ststus == "noAccount"){
                alert("Wrong ID or Password!!");
            }else if(obj.status == "fail"){
                alert("Can't connect to DB!");
            }
        },
        error: function(data){
            alert("Error: " + data);
        }        
    });
}