
export const validateFrom = (email, password,) => {
        //validate with regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
        if(!emailRegex) return "Invalid Email format";
        if(!passwordRegex) return "Password must be at least 8 characters long and contain both letters and numbers";
       

        return null; // No errors
}