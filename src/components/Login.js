import React from 'react';


class Login extends React.Component{


    render(){
        return (
            <>
            <div>
            <form action="#" method='POST'>
                <input type = 'email' placeholder='ingresar mail'  defaultValue=''/>
                <input type = 'password' placeholder='ingresar clave'  defaultValue=''/>
                <input type='submit' value="submit"/>
            </form> 
            </div>
            </>
        )

    }

}

export default Login;