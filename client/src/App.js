import { Route, Routes} from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import OtpInputWithValidation from "./components/OTPVerification/OtpWithInputValidation";
import Phone from "./components/Phone/phone";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<OtpInputWithValidation numberOfDigits={6} />} />}

			<Route path="/" exact element={<Phone/>} />
			<Route path="/phoneVerification/verifyOtp" exact element={<OtpInputWithValidation numberOfDigits={6} />} />
			
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
		</Routes>
	);
}

export default App;
