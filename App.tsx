import {AuthProvider} from "./app/providers/AuthProvider";
import Navigation from "./app/navigation/Navigation";
import {LogBox} from "react-native";
import {DataProvider} from "./app/providers/DataProvider";
import StoryContainer from "./app/componets/screens/profile/stories/StoryContainer";

export default function App() {
  return <AuthProvider>
    <DataProvider>
      <StoryContainer/>
      <Navigation/>
    </DataProvider>
  </AuthProvider>
}

LogBox.ignoreAllLogs()
