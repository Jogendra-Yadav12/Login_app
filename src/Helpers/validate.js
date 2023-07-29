import toast from 'react-hot-toast'


// Validation username

function usernameVerify(error = {},values) {
    if (!values.username){
        error.username = toast.error('Username required...!');
    }
    else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!');
    }
    
    return error;
}

// validate login page username

export async function usernameValidate(values){
    const errors = usernameVerify({},values);
    return errors;
}

// Profile Validations
export async function profileValidation(values){
    const errors = emailVerify({},values);
    return errors;
}

// Validation Password
function passwordVerify(errors = {},values) {

    if (!values.password){
        errors.password = toast.error('Password required...!');
    }
    else if(values.password.includes(" ")){
        errors.password = toast.error('Wrong Password...!');
    }
    else if (values.password.length < 4){
        errors.password = toast.error('Password must be more than 4');
    }

    
    return errors;
}

// validate login page Password

export async function passwordValidate(values){
    const errors = passwordVerify({},values);
    return errors;
}

// validate reset page Password

export async function resetValidate(values){
    const errors = passwordVerify({},values);

    if(values.password !== values.confirm_pass){
        errors.exist = toast.error('Password not match..!')
    }

    return errors;
}

/*  Registration */

export async function registerValidate(values){
    const errors = usernameVerify({},values);
    passwordVerify(errors,values);
    emailVerify(errors,values);

    return errors;
}


// Validation email

function emailVerify(error ={},values){
    if(!values.email){
        error.email = toast.error("Email Require...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!");
    }

    return error;
}