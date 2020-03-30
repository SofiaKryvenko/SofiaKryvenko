import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import RegisterForm from '../../components/Forms/RegisterForm'


interface IRegisterProps{
	userSignup:({
		email:string,
		password:string
	})=>void;
}


const Register:React.Component<IRegisterProps> =({userSignup})=>(<Grid container  justify="center">
			<div className="main-background"/>
			<Card className="p-15">
				<RegisterForm onSubmit={userSignup}/>
			</Card>	
		</Grid>
		
	);		

export default Register;