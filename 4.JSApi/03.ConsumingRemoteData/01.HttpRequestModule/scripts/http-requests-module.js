/// <reference path="../1.http-requests-module.html" />
(function () {
    this.httpRequest = (function () {
        function getHttpRequest() {
            var xmlHttpFactories = [
              function () {
                  return new XMLHttpRequest();
              },
              function () {
                  return new ActiveXObject("Msxml3.XMLHTTP");
              },
              function () {
                  return new ActiveXObject("Msxml2.XMLHTTP.6.0");
              },
              function () {
                  return new ActiveXObject("Msxml2.XMLHTTP.3.0");
              },
              function () {
                  return new ActiveXObject("Msxml2.XMLHTTP");
              },
              function () {
                  return new ActiveXObject("Microsoft.XMLHTTP");
              }
            ];

            var xmlFactory, i, len;
            for (i = 0, len = xmlHttpFactories.length; i < len; i += 1) {
                xmlFactory = xmlHttpFactories[i];
                try {
                    return xmlFactory();
                } catch (error) {
                    return null;
                }
            }
        }

        function makeRequest(options) {
            var deferred = Q.defer(),
                newHttpRequest = getHttpRequest(),
                requestType = options.requestType || 'GET',
                resourceUrl = options.resourceUrl || null,
                contentType = options.contentType || 'text/plain',
                data = JSON.stringify(options.data) || null;

            newHttpRequest.open(requestType, resourceUrl, true);
            newHttpRequest.setRequestHeader('Content-Type', contentType);
            newHttpRequest.send(data);

            newHttpRequest.onreadystatechange = function () {
                if (newHttpRequest.readyState === 4) {
                    switch (Math.floor(newHttpRequest.status / 100)) {
                        case 2:
                            deferred.resolve(JSON.parse(newHttpRequest.responseText));
                            break;
                        default:
                            error(newHttpRequest.responseText);
                    }
                }
            };

            return deferred.promise;
        }

        function getJSON(resourceUrl) {
            makeRequest(
                {
                    resourceUrl: resourceUrl,
                    contentType: 'application/json'
                });
        }

        function postJSON(resourceUrl, data) {
            makeRequest(
                {
                    requestType: 'POST',
                    resourceUrl: resourceUrl,
                    contentType: 'application/json',
                    data: data
                });
        }

        return {
            makeRequest: makeRequest,
            getJSON: getJSON,
            postJSON: postJSON
        };
    }());

}).call(this);