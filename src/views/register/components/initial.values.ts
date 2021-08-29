export interface RegisterProps {
    email: String,
    password: String,
    confirm_password:String
};

const initialValues: RegisterProps = {
    email: "",
    password: "",
    confirm_password:"",
}

export default initialValues;
