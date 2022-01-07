import styled from "styled-components";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
const Div1 = styled.div`
  width: 60px;
  position: absolute;
  left: 0%;
  right: 94.38%;
  top: 0%;
  bottom: 0%;
  background: ${(props) => (props.DarkMode ? "#16191C" : "#ffffff")};
  box-shadow: 0px 0px 5px #e5e9f2;
`;
export default function Sidebar({ isDarkMode }) {
  return (
    <Div1 DarkMode={isDarkMode}>
      <div
        style={{
          position: "absolute",
          left: "8.53%",
          right: "95.69%",
          top: "3.42%",
          bottom: "92.68%"
        }}
      >
        <img
          style={{ borderRadius: "50%" }}
          width="40px"
          height="40px"
          src="https://s3-alpha-sig.figma.com/img/ba0a/04be/3fe57490276bd6bbec4526bef0a99e9b?Expires=1642377600&Signature=dkODnJT6vFRuZjn-~DUxwjlB-G4GJuyPjHsifdIbqkJsd8GP0lBNGmT-87MrmVy6YqOrneGsX3XaKwWRsBgwCVPA4O4Emz1HeJCOwTjNC1EDDP86Y5MKvJTGZxv8o-IN7HVU4vyVtWs5KkC1xL2uej~bVtowNjIG2GxGVRE2GY8VkbBGyoo-EA6ZsmFLPpWczmx0TYuAUgxOhXFeAMp0E6T1gtOXVYDWQd7T~JkXxYgxQCaYBRaD1tQQ96YAvSF7IiF7XzI91MlMxVq1l7w3bp3lpAqNHJDruTP6XlMOjEXFHqfxBP6c8C9b0z0dOtuAnRaQX-ok5HYGND4QCwuUgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="user.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: "25.04%",
          right: "96.33%",
          top: "33.69%",
          bottom: "66.11%"
        }}
      >
        {isDarkMode ? (
          <SignalCellularAltIcon color="primary" />
        ) : (
          <SignalCellularAltIcon />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          left: "25.04%",
          right: "97.4%",
          top: "44.75%",
          bottom: "52.86%"
        }}
      >
        {isDarkMode ? (
          <TrendingFlatIcon color="primary" />
        ) : (
          <TrendingFlatIcon />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          left: "25.04%",
          right: "97.4%",
          top: "53.75%",
          bottom: "52.86%"
        }}
      >
        {isDarkMode ? (
          <ShoppingBasketIcon color="primary" />
        ) : (
          <ShoppingBasketIcon />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          left: "25.04%",
          right: "97.4%",
          top: "63.75%",
          bottom: "52.86%"
        }}
      >
        {isDarkMode ? <ChatBubbleIcon color="primary" /> : <ChatBubbleIcon />}
      </div>
    </Div1>
  );
}
