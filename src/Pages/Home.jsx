// Importing Assets
import sushiimg from "../images/sushiimg.jpg";
import nanban from "../images/Specials/Tori_Nanban.jpg";
import takoyaki from "../images/Specials/Takoyaki.jpg";
import agedashi from "../images/Specials/Agedashi.jpeg";
import wagyu from "../images/Specials/Wagyu.jpeg";

// Importing other files
import "../Styles/Main.css";

// Importing Components
import { Button, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

// Section for predefined styles
const styles = {
  //============ General styles ============//
  Buttons: {
    title1: {
      borderRadius: "4px",
      backgroundColor: "#9b1717",
      border: "solid 1px #600b0bb0",
    },
    title2: {
      marginLeft: "20px",
      borderRadius: "4px",
      backgroundColor: "white",
      color: "maroon",
      border: "none",
    },
  },

  //============ Component styles ============//
  // Top Nav Bar styles
  topNav: {
    width: "100%",
    height: "1000px",
    textAlign: "center",
    backgroundImage: `url(${sushiimg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment:"fixed",
    backgroundPositionX:'center'
  },
  topNav_links: {
    color: "white",
    paddingTop:'10px',
    textDecoration: 'none'
  },

  // Card Styles
  cardDiv1:{
    display:'flex',
    justifyContent: 'center',
    alignContent:'center',
    marginBottom: '48px'
  }

  
}

function Home() {
  return (
    <>
      {/* Top Nav with Food image */}
      <div style={styles.topNav}>
        <div className="topNav_Bar">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              alignContent: "flex-end",
            }}
          >
            <span style={{ color: "white", fontSize: "2.6rem", lineHeight:'40px', marginTop:'10px' }}>
              NIKUSUTEI
            </span>
            <span style={{ color: "white" }}>Japanese Muslim Restaurant</span>
          </div>
          <a href="" style={styles.topNav_links}>ABOUT US</a>
          <a href="Menu" style={styles.topNav_links}>MENU</a>
          <a href="" style={styles.topNav_links}>SERVICES</a>
          <a href="" style={styles.topNav_links}>SWEET OFFERS</a>
        </div>
        <div style={{height: '80%', display:'flex', justifyContent: 'center', alignItems:'center'}}>
            <div>
              <h1 style={{color:"white"}}>Welcome to Nikusutei</h1>
              <h1 style={{color:"white", fontSize:'5rem', marginBlock: '0px'}}>Japanese Muslim Teppanyaki and Sushi</h1>
              <div style={{display:"flex", justifyContent:'center', marginTop: '30px'}}>
                <Button size="lg" style={styles.Buttons.title1} >MAKE A RESERVATION</Button> 
                <Button size="lg" style={styles.Buttons.title2}>ORDER ONLINE</Button> 
              </div> 
            </div>
        </div>
      </div>
      <div style={{textAlign:'center', marginTop:'68px'}}>
        <h1> Explore Our Latest Specials</h1>
        <div className="cardContainer" style={{ marginTop: "28px", marginInline: "6%" }}>
          <Row>
            <Col style={styles.cardDiv1}>
              <div
                id="uniq"
                className="prevCard1"
                style={{ backgroundImage: `url(${nanban})` }}
              >
              </div>
            </Col>
            <Col style={styles.cardDiv1}>
              <div
                className="prevCard1"
                style={{ backgroundImage: `url(${agedashi})` }}
              ></div>
            </Col>
          </Row>
          <Row>
            <Col style={styles.cardDiv1}>
              <div
                id="uniq"
                className="prevCard1"
                style={{ backgroundImage: `url(${wagyu})` }}
              >
              </div>
            </Col>
            <Col style={styles.cardDiv1}>
              <div
                className="prevCard1"
                style={{ backgroundImage: `url(${takoyaki})` }}
              ></div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Home;
