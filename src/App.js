import { useContext } from "react";
import Body from "./Components/Body";
import Sidebar from "./Components/Sidebar";
import { themeContext } from "./Context/ThemeContextProvider";
import "./styles.css";

export default function App() {
  const [darkTheme] = useContext(themeContext);
  console.log(darkTheme);
  if (darkTheme) {
    return (
      <div
        style={{
          minHeight: "100%",
          background: "#1F2327",
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0"
        }}
      >
        <div style={{ display: "flex" }}>
          <Sidebar isDarkMode={darkTheme} />
          <Body isDarkMode={darkTheme} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          minHeight: "100%",
          background: "#F5F6FA",
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          bottom: "0"
        }}
      >
        <div style={{ display: "flex" }}>
          <Sidebar isDarkMode={darkTheme} />
          <Body isDarkMode={darkTheme} />
        </div>
      </div>
    );
  }
}
