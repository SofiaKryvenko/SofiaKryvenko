import React from 'react';
import {NavLink} from "react-router-dom"

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import LoginForm from "../../components/Forms/LoginForm"


interface ILoginProps {
	userLogin:({email:string,password:string})=>void;
	user:{
		submitting:boolean;
		error:string|null;

	}
}

const Login:React.Component<ILoginProps>=({userLogin,user})=>  {
	const userError = user.error;

	return(<Grid container justify="center">
				<div className="main-background"/>
				<Card className="p-15">
					<LoginForm  onSubmit={userLogin}/>
					<Grid item className="mt-20">
						<Typography variant="body2" align="center">Don't have an account yet?</Typography>
						<Typography variant="body2" align="center">
							<NavLink to="/register"  color="primary" className="mt-10 link"> Sign up</NavLink>
						</Typography>
				</Grid> 		
				</Card>
				{userError && alert(userError)}
			</Grid>
		);}


export default Login;