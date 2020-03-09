window.fbAsyncInit = function() {
FB.init({
    appId      : '661486947949676',
    cookie     : true,
    xfbml      : true,
    version    : 'v6.0'
});
    
FB.AppEvents.logPageView();
// FB.getLoginStatus(function(response) {
//     // statusChangeCallback(response);
//     console.log(response);

//     if(response.status == "unknown") {
//         // FB.login( resp => {
//         //     console.log("resp:", resp);
            
//         // })
//     }
    
// });

    
};
// vue.use(FB)




(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// window.fbAsyncInit = function() {
// FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//     console.log(response);
    
// // });
// }
