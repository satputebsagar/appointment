import React from "react";
import Profile from "./components/Profile/Profile";
import Googlelogin from "./components/GoogleL/GoogleLogin";



class App extends React.Component{

  state={
    isLoggedIn:false,
    userProfile:null,
  };

  login=(userData)=>{
    this.setState({
      isLoggedIn:true,
      userProfile:userData.user,
    });
  };


  logout=()=>{
    this.setState({
      isLoggedIn:false,
      userProfile:null,
    });
  };

  render(){
    return(
      <>
      {
        this.state.isLoggedIn ?(
        <Profile user={this.state.userProfile}/>
        ):(
          <Googlelogin login ={this.login}/>
        )
      }
      
      </>
    )
  }


}


export default App;