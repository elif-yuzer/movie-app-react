import  { AuthProvider } from "./context/AuthContext";
import  MovieProvider  from "./context/MovieContext";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (


     <div  className='dark:bg-[#23242a]'>
       <AuthProvider>
       <MovieProvider>
      <AppRouter />
      <ToastContainer position="top-right" />
      </MovieProvider>
      </AuthProvider>
    </div>
  );
}

export default App;