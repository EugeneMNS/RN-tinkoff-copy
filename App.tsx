import {AuthProvider} from "./app/providers/authProvider";
import Navigation from "./app/navigation/Navigation";

export default function App() {
  return <AuthProvider>
    <Navigation/>
  </AuthProvider>
}
