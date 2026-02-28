import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser, userRemove } from "../utils/appSlice";
import { LOGO } from "../utils/constant";
import { addToggleBtn } from "../utils/GPTsearchSlice";
import { supportLang } from "../utils/constant";
import { langSelect } from "../utils/LangSlice";
const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const langChange = useRef();
  const navigate = useNavigate();
  const hendleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  // control authState
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { email, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            displayName: displayName,
            uid: user.uid,
            photoURL: photoURL,
          }),
        );
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(userRemove());
        navigate("/");
      }
    });
    return () => unSubcribe();
  }, []);

  function handleToggleBtn() {
    dispatch(addToggleBtn());
  }
  function handlerLang() {
    dispatch(langSelect(langChange.current.value));
  }
  const GTPToggleBtn = useSelector((state) => state.GTP?.ToggleBtn);
  return (
    <div
      className="absolute 
                px-4 sm:px-6 
                bg-gradient-to-b from-black to-transparent
                w-full 
                min-h-20 
                top-0 left-0 
                z-20 
                flex 
                flex-col sm:flex-row 
                justify-between"
    >
      {/* Logo */}
      <img className="w-28 sm:w-36 md:w-40 my-3" src={LOGO} alt="logo" />

      {user && (
        <div
          className="flex 
                    flex-col sm:flex-row 
                    gap-3 sm:gap-6"
        >
          {GTPToggleBtn && (
            <select
              ref={langChange}
              onChange={handlerLang}
              className="p-2 
                     rounded-md 
                     w-28 
                     md:mt-6
                     capitalize 
                     bg-gray-800 
                     text-white 
                     h-10"
            >
              {supportLang.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleToggleBtn}
            className="h-10 
                   px-4 
                   text-white 
                   rounded-lg 
                   md:mt-6
                   capitalize 
                   bg-blue-700"
          >
            {GTPToggleBtn ? "Home page" : "GPTSearch"}
          </button>

          <div
            className="flex 
                      items-center 
                      gap-2"
          >
            <img
              className=" w-9 h-9 md:w-10 md:h-10 sm:w-12 sm:h-12 rounded-lg"
              src={
                user?.photoURL ||
                "https://cdn-icons-png.flaticon.com/512/219/219970.png"
              }
              alt="userImg"
            />

            <button
              onClick={hendleLogout}
              className="text-white 
                     capitalize 
                     font-semibold 
                     text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
