var axios = require('axios');

//Export the file to be used in other components
module.exports = {
  Login: function(that, result){

    that.setState({showModal: false});
    var saveRef = that;

    var data = {username: that.state.username, password: that.state.password};

      axios.post('/login',data).then(function (response) {
      result = JSON.stringify(response.data);
      result = result.substring(1, result.length-1);
      console.log("RESPONSE: "+JSON.stringify(response.config.data));
      console.log("RESULT: "+result);

      if(result === "Logging in") {

        saveRef.setState({ isLoggedIn: true	});
        saveRef.setState({ loginText: "Logout "+saveRef.state.username});

      }

      else if(result === "No user found" || result === "Wrong password") {
        alert("Error: " + result);
      } else {
	  	alert("Error: " + result);
	  }

	return result;
    }).catch(function (error) {
      console.log(error);
    });


  }
};
