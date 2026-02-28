import { useState, useRef } from "react";
import Headers from "./Header";
import { validateFrom } from "../utils/validateFrom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/appSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {UserIMG} from "../utils/constant"
const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  function handleValidate() {
    const emailValue = email.current.value;
    const userName = fullName.current?.value || "User";
    const passwordValue = password.current.value;
    const message = validateFrom(emailValue, passwordValue, userName);
    setMessage(message);
    if (message) return;
    if (!isSignIn) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName,
            photoURL: UserIMG
          })
            .then(() => {
              const { email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  email: email,
                  displayName: displayName,
                  uid: user.uid,
                  photoURL: photoURL,
                }),
              );
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
              setMessage(error.message + "-" + error.code);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage + "-" + errorCode);
        });
    }
  }

  function ToggleSingINSingUp() {
    setIsSignIn(!isSignIn);
  }
  return (
    <>
      <Headers />
      <div className="min-h-screen 
                w-full 
                px-4 
                py-10 
                bg-black 
                md:bg-gradient-to-b md:from-black md:to-red-600 
                flex 
                items-center 
                justify-center">

  <form
    onSubmit={(e) => e.preventDefault()}
    className="w-full 
               max-w-md 
               bg-black/80 
               backdrop-blur-sm 
               p-6 sm:p-8 
               rounded-lg 
               flex 
               flex-col 
               space-y-4"
  >
    <h1 className="text-white text-2xl font-bold text-center">
      {isSignIn ? "Sign In" : "Sign Up"}
    </h1>

    {!isSignIn && (
      <input
        ref={fullName}
        className="p-3 rounded w-full"
        type="text"
        placeholder="Full Name"
      />
    )}

    {!isSignIn && (
      <input
        className="p-3 rounded w-full"
        type="tel"
        placeholder="Mobile Number"
      />
    )}

    <input
      ref={email}
      className="p-3 rounded w-full"
      type="email"
      placeholder="Email"
    />

    <input
      ref={password}
      className="p-3 rounded w-full"
      type="password"
      placeholder="Password"
    />

    <button
      onClick={handleValidate}
      className="p-3 
                 w-full 
                 bg-red-600 
                 rounded 
                 text-white 
                 font-bold 
                 transition-transform 
                 duration-200 
                 hover:scale-105"
    >
      {isSignIn ? "Sign In" : "Sign Up"}
    </button>

    {message && (
      <p className="text-red-500 text-sm text-center">
        {message}
      </p>
    )}

    <p
      onClick={ToggleSingINSingUp}
      className="text-white 
                 text-sm 
                 text-center 
                 cursor-pointer 
                 capitalize"
    >
      {isSignIn
        ? "New User? Sign Up now."
        : "Already registered? Sign In."}
    </p>
  </form>
</div>
    </>
  );
};

export default Login;
