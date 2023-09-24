export interface LoginForm {
  email : string;
  password : string;
}
export interface RegisterForm {
  email : string;
  password : string;
  confirm_password : string;
}
export interface ProductForm {
  id : string;
  name : string;
  serialCode : string;
  category : string;
  price : string;
}