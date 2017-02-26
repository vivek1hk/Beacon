function getProviderByTag(param){
            return ajaxCallProvidersForTag(param);
      }
      function getProviderByName(param){
            return ajaxCallProvidersForName(param);
      }
      function putProvidersData(data){
            //console.log("Here : ",data["-KdqwvMIKRw1ZnpaMC5b"]);
            for(var i = 0; i < data["-KdqwvMIKRw1ZnpaMC5b"].length; i++){
                providersData.push(data["-KdqwvMIKRw1ZnpaMC5b"][i]);
            }
      }
      function ajaxCallProvidersForTag(param){
        $.ajax({url: "https://beacon-440ca.firebaseio.com/providers.json", success: function(result){
            var returnVal = [];
            for(var i = 0; i < result["-KdqwvMIKRw1ZnpaMC5b"].length; i++){
                var tags = result["-KdqwvMIKRw1ZnpaMC5b"][i]["Tags"];
                if(tags.toLowerCase() == param.toLowerCase()){
                    returnVal.push(result["-KdqwvMIKRw1ZnpaMC5b"][i]);
                }
            }
            console.log(returnVal);
            return returnVal;
        }});
      }

      function ajaxCallProvidersForName(param){
        $.ajax({url: "https://beacon-440ca.firebaseio.com/providers.json", success: function(result){
            var resultVal = [];
            for(var i = 0; i < result["-KdqwvMIKRw1ZnpaMC5b"].length; i++){
                var fullName = result["-KdqwvMIKRw1ZnpaMC5b"][i]["full_name"].toLowerCase();
                if(fullName == param.toLowerCase()){
                    resultVal.push(result["-KdqwvMIKRw1ZnpaMC5b"][i]);
                }
            }
            return resultVal;
        }});
      }
