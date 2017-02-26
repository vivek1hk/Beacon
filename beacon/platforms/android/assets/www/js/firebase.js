var providersData = [];
    var seekersData = [];
    var providersSeekersData = [];
      function test(data) {
        getDataByName("Anand");
        getDataByTag("Physics Tutor");
      }
      function getProviderByTag(param){
            console.log(providersData);
            var result = [];
            for(var i = 0; i < providersData.length; i++){
                var tags = providersData[i]["Tags"];
                if(tags.toLowerCase().match(param.toLowerCase())){
                    result.push(providersData["full_name"]);
                }
            }
            return result;
      }
      function getProviderByName(param){
            console.log(providersData);
            var result = [];
            for(var i = 0; i < providersData.length; i++){
                var fullName = providersData[i]["full_name"].toLowerCase();
                if(fullName.toLowerCase().match(param.toLowerCase())){
                    result.push(providersData[i]);
                }
            }
            return result;
      }
      function putProvidersData(data){
            console.log(data["-KdqwvMIKRw1ZnpaMC5b"]);
            for(var i = 0; i < data["-KdqwvMIKRw1ZnpaMC5b"].length; i++){
                providersData.push(data["-KdqwvMIKRw1ZnpaMC5b"][i])
            }
            console.log(getProviderByName("Brandon"));
            console.log(getProviderByTag("Physics Tutor"));
      }
      function putSeekersData(data){
            console.log(data["-Kdr251ZcXy0qHi-h9CU"]);
            for(var i = 0; i < data["-Kdr251ZcXy0qHi-h9CU"].length; i++){
                seekersData.push(data["-Kdr251ZcXy0qHi-h9CU"][i])
            }
      }
      function putProvidersSeekersData(data){
            console.log(data["-KdqxNN2HKiyMZp5VUQV"]);
            for(var i = 0; i < data["-KdqxNN2HKiyMZp5VUQV"].length; i++){
                providersSeekersData.push(data["-KdqxNN2HKiyMZp5VUQV"][i])
            }
      }

      function ajaxCall(){
        $.ajax({url: "https://beacon-440ca.firebaseio.com/providers.json", success: function(result){
            putProvidersData(result);
        }});
        $.ajax({url: "https://beacon-440ca.firebaseio.com/seekers.json", success: function(result){
            putSeekersData(result);
        }});
        $.ajax({url: "https://beacon-440ca.firebaseio.com/seekers_providers.json", success: function(result){
            putProvidersSeekersData(result);
        }});
      }
