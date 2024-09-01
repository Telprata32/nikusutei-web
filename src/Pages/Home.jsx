// Importing Images
import sushiimg from "../images/sushiimg.jpg";
import nanban from "../images/Specials/Tori_Nanban.jpg"
import takoyaki from "../images/Specials/Takoyaki.jpg"

// Importing other files
import '../Styles/Main.css';

// Importing Components
import { Button, Row, Col } from "react-bootstrap";

// Section for predefined styles
const styles = {

  //============ General styles ============//
  Buttons:{
    title1:{
      borderRadius:'4px',
      backgroundColor:'#9b1717',
      border:'solid 1px #600b0bb0'
    },
    title2:{
      marginLeft: '20px',
      borderRadius:'4px',
      backgroundColor: 'white',
      color: 'maroon',
      border:'none'
    }
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
  },
  topNav_Bar: {
    display: "flex",
    justifyContent: "space-around",
    top:'0px',
    width:'30%',
    marginLeft:'35%',
    paddingTop: '15px'
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
        <div style={styles.topNav_Bar}>
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
          <span style={{ color: "white", paddingTop:'10px' }}>ABOUT US</span>
          <span style={{ color: "white", paddingTop:'10px' }}>MENU</span>
          <span style={{ color: "white", paddingTop:'10px' }}>SERVICES</span>
          <span style={{ color: "white", paddingTop:'10px' }}>SWEET OFFERS</span>
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
        <div style={{marginTop: '28px', marginInline:'10%'}}>
            <Row>
              <Col style={styles.cardDiv1}>
                <div className="prevCard1" style={{backgroundImage:`url(${nanban})`}}> </div>
              </Col>
              <Col style={styles.cardDiv1}>
                <div className="prevCard1" style={{backgroundImage: `url(${takoyaki})`}}>

                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="prevCard1">

                </div>
              </Col>
              <Col>
                <div className="prevCard1">

                </div>
              </Col>
            </Row>
        </div>
      </div>
    </>
  );
}

export default Home;
