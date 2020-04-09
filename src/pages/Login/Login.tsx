import React from 'react';



import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import LoginForm from "../../components/Forms/LoginForm"


interface ILoginProps {
	userLogin:({email:string,password:string})=>void;
	user:{
		submitting:boolean;
		error:string|null;

	}
}

const LoginModal:React.Component<ILoginProps>=(props)=>  {
	const userError = props.user.error;

	return(<Dialog title="Signup form" open={props.isOpen} onClose={props.closeModal}>
				<div className="main-background"/>
				<Card className="p-15">
					<LoginForm  onSubmit={props.userLogin}/>		
				</Card>
				{userError && alert(userError)}
			</Dialog>
		);}


export default LoginModal;