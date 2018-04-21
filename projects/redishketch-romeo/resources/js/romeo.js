(function () {
    this.resources = function (resources) {
        var http = new XMLHttpRequest();
        var URL = resources.url;
        var method = resources.method;
        var data = resources.data;
        var el = resources.el;
        var param;
        if(el !== undefined){
            if (data !== undefined){
                param = new FormData(el);
                for (key in data){
                    param.append(key, data[key])
                }
            }else{
                param = new FormData(el);
            }
        }
        else {
            if (data !== undefined){
                param = new FormData();
                for (key in data){
                    param.append(key, data[key])
                }
            }else {
                param = new FormData();
            }
        }
        if (method == "POST" || method == "post"){
            http.open("POST", URL);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    var response = http.responseText;
                    resources.onSuccess(response);
                }
            };
            http.send(param);
        }
        if (method == "GET" || method == "get"){
            http.open("GET", URL);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    var response = http.responseText;
                    resources.onSuccess(response);
                }
            };
            http.send();
        }
    };
})();

module.exports = this.resources;