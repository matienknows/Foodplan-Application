

class AuthenticationSerivce{

    registerSuccesfulLogin(username,password){
        console.log("register succesful login")
        sessionStorage.setItem('authentictedUser', username);
    }

    logout(){
        sessionStorage.removeItem('authentictedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authentictedUser')
        if (user == null){
            return false;
        }else{
            return true;
        }
        
    }
}
export default new AuthenticationSerivce()