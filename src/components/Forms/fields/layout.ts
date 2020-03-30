import fields from './fields';

const registerFormLayout=[fields.name,fields.email,fields.password];
const loginFormLayout =[fields.email,fields.password];

export {registerFormLayout,loginFormLayout}