import { useContext } from "react";
import styled from "styled-components";
import { themeContext } from "../Context/ThemeContextProvider";

const Title1 = styled.h1`
  color: ${(props) => (props.darkmode ? "white" : "black")};
`;
const Div1 = styled.div`
  padding-left: 81px;
  background-color: ${(props) => (props.darkmode ? "#1F2327" : "#F5F6FA")};
`;
const Div2 = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${(props) => (props.darkmode ? "#292E33" : "white")};
  color: ${(props) => (props.darkmode ? "white" : "black")};
  padding: 5px 10px;
`;
export default function Body({ isDarkMode }) {
  const [darkMode, handleTheme] = useContext(themeContext);
  return (
    <Div1 darkmode={isDarkMode}>
      <div style={{ display: "flex" }}>
        <div>
          <Title1 darkmode={isDarkMode}>My Dashboard</Title1>
        </div>
        <div style={{ marginTop: "30px", marginLeft: "20px" }}>
          {isDarkMode ? (
            <button
              onClick={() => {
                handleTheme();
              }}
            >
              Turn Dark Mode Off
            </button>
          ) : (
            <button
              onClick={() => {
                handleTheme();
              }}
            >
              Turn Dark Mode On
            </button>
          )}
        </div>
      </div>
      <Div2 darkmode={isDarkMode}>
        <div style={{ float: "left" }}>
          <p style={{ fontSize: "25px" }}>Active Users</p>
        </div>
        <div style={{ float: "right", paddingTop: "13px" }}>
          <p style={{ fontSize: "18px" }}>for August 2020</p>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ width: "40px", height: "40px" }}>
            <img
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              src="https://s3-alpha-sig.figma.com/img/0b5d/c448/3e918e0b00219cd737a20b1bbdb4c377?Expires=1642377600&Signature=HxVml0UvywRvYwibjA-Jvsq-B6MBEKMWaHSt6FHz~Ide2aCBi-vzUjYxnoIrclY-SjVIoHniS~DypWzIjOlY1JCeb~8StBJqIepI5NqIoLnS-6WtES8FuSCNz823jMijOBiuQe4T5aWNNNgjZtx1UtlZRq4HqdVKVTdwTOP7UkCjpBwRhfi1NaMXMnkeID4j-0PlY1eQKgpBlnvvnBVkWLpjwi2DDqDUmGv9xiDIOegKJtj1faQ3RpJzwZSNM~W9A-jYR1RaykObz6lLn1i1A7Jq1xmGamFPXsM97mpcaoUiw890okmISVjL9iR~jJgbvquVzNGtWisWMLZg3UqxVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="nrupul.png"
            />
          </div>
          <div>
            <p style={{ margin: "0", fontSize: "18px" }}>Nrupul Dev</p>
            <p style={{ margin: "0", fontSize: "15px", color: "#748AA1" }}>
              Bangalore, India
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            float: "left",
            width: "282px",
            height: "6px",
            background: "#29CB97",
            borderRadius: "5px"
          }}
        ></div>
        <div
          style={{
            marginTop: "10px",
            width: "392px",
            height: "6px",
            background: "#E5E9F2",
            borderRadius: "5px"
          }}
        ></div>
        <div style={{ float: "left" }}>
          <p style={{ fontSize: "18px" }}>Professional Level 15</p>
        </div>
        <div style={{ float: "right" }}>
          <p style={{ fontSize: "18px" }}>
            <strong>4723 Points</strong>
          </p>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ marginTop: "50px", display: "flex", gap: "10px" }}>
          <div style={{ width: "40px", height: "40px" }}>
            <img
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              src="https://s3-alpha-sig.figma.com/img/d4b7/11c1/4a4d2aaaf15dc88eafe6b3ed557b017b?Expires=1642377600&Signature=K64WeoqaflbB6ETgaTYmCRJPv9rKTGAYV5pwFLKiL1ErIM~BxTezMTRJZApBv8SIHhppA9yPvx-UvNbeMMorqCijvE8BkmF14y7~BDsDfPyAQ1apsQ9uSSlZd-xkPseCc1REtll~DGBapfMDp-2fW27vj1q1diMJrbDriPKj9wHmltP~ehao31wLiulCYNrBnSdKYGDK9IscE9GbykAklOlCIQ2llF7gNmurEgo0gmeMZTRk8a9jUxEhZuGs4d4h4x~Nsk1yVRLc93nRUCL~zqx5KP36M4ayz1UxHR1t1GYzTzLosYRCK4TdjKMWK9NANaDj7iKM9PPuR5XIsgwMGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="sandhya.png"
            />
          </div>
          <div>
            <p style={{ margin: "0", fontSize: "18px" }}>Sandhya</p>
            <p style={{ margin: "0", fontSize: "15px", color: "#748AA1" }}>
              Bangalore, India
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            float: "left",
            width: "205px",
            height: "6px",
            background: "#4072EE",
            borderRadius: "5px"
          }}
        ></div>
        <div
          style={{
            marginTop: "10px",
            width: "392px",
            height: "6px",
            background: "#E5E9F2",
            borderRadius: "5px"
          }}
        ></div>
        <div style={{ float: "left" }}>
          <p style={{ fontSize: "18px" }}>Professional Level 11</p>
        </div>
        <div style={{ float: "right" }}>
          <p style={{ fontSize: "18px" }}>
            <strong>2339 Points</strong>
          </p>
        </div>
        <div style={{ clear: "both" }}></div>
        <div style={{ marginTop: "50px", display: "flex", gap: "10px" }}>
          <div style={{ width: "40px", height: "40px" }}>
            <img
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              src="https://s3-alpha-sig.figma.com/img/3343/238f/127b50a4148d9e3de79ccc98a97e785d?Expires=1642377600&Signature=YIjAEWguydWM-UPRUz18rdND~upoHU8lhJ6Tt95soe7x2Y2eCgOfVrdmdlE57T6ZoAETVKbVGjIQvHX36lY0Cok5N0kys7lBI0cshmBwSlYURgA5AS5NPbpXsVb36c3h550LIc6kk8A5R1SQuFYUhUtUaohpKIxDMVdcYwnmf8RX8PBC8-E84V7TWTU~5wPkd6dgJM0BWQKs5pjxwQKa0tBf-eGNjk7YeHThxQXXxSaJ-8MHiD1t4Gn8ZH8N9SgReqzdKlaaEBiOdyzUMB65PLB1iYJzFu6J1aQSpfsvyAjs1BxFkZGNJwpn6dbpkGAU8vbsnjoZb4Nq346RMJk2Og__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt="elon.png"
            />
          </div>
          <div>
            <p style={{ margin: "0", fontSize: "18px" }}>Elon Tusk</p>
            <p style={{ margin: "0", fontSize: "15px", color: "#748AA1" }}>
              California, USA
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "10px",
            float: "left",
            width: "145px",
            height: "6px",
            background: "#B558F6",
            borderRadius: "5px"
          }}
        ></div>
        <div
          style={{
            marginTop: "10px",
            width: "392px",
            height: "6px",
            background: "#E5E9F2",
            borderRadius: "5px"
          }}
        ></div>
        <div style={{ float: "left" }}>
          <p style={{ fontSize: "18px" }}>Professional Level 6</p>
        </div>
        <div style={{ float: "right" }}>
          <p style={{ fontSize: "18px" }}>
            <strong>1884 Points</strong>
          </p>
        </div>
      </Div2>
    </Div1>
  );
}
