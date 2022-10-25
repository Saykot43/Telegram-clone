import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../styles/globals.css";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />;
  if (!user) return <Login />;
  return (
    <div className="flex">
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
