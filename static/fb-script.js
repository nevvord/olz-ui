function fbSDKLaded() {
    FB.getLoginStatus(function(response) {
        // statusChangeCallback(response);
        console.log(response);

        if(response.status == "unknown") {
            FB.login( resp => {
                console.log("resp:", resp);
                
            })
        }
        
    });
}