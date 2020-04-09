import React from 'react';


import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';

import RegisterForm from '../../components/Forms/RegisterForm'


interface IRegisterProps{
	userSignup:({
		email:string,
		password:string
	})=>void;
}


const SignupModal:React.Component<IRegisterProps> =({userSignup,isOpen,closeModal})=>(<Dialog title="Signup form" open={isOpen} onClose={closeModal}>
			<Card className="p-15">
				<RegisterForm onSubmit={userSignup}/>
			</Card>	
		</Dialog>
		
	);		

export default SignupModal;