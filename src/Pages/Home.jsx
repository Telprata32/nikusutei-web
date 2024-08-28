import sushiimg from "../images/sushiimg.jpg";
import { Button } from "react-bootstrap";

// Section for predefined styles
const styles = {
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
    width:'40%',
    marginLeft:'30%',
    paddingTop: '15px'
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
            <span style={{ color: "white", fontSize: "2.4rem" }}>
              NIKUSUTEI
            </span>
            <span style={{ color: "white" }}>Japanese Muslim Restaurant</span>
          </div>
          <span style={{ color: "white", paddingTop:'10px' }}>ABOUT US</span>
          <span style={{ color: "white", paddingTop:'10px' }}>CONTACT US</span>
          <span style={{ color: "white", paddingTop:'10px' }}>MENU</span>
          <span style={{ color: "white", paddingTop:'10px' }}>SERVICES</span>
        </div>
        <div style={{height: '80%', display:'flex', justifyContent: 'center', alignItems:'center'}}>
            <div>
              <h1 style={{color:"white"}}>Welcome to Nikusutei</h1>
              <h1 style={{color:"white", fontSize:'5rem', marginBlock: '0px'}}>Japanese Muslim Teppanyaki and Sushi</h1>
              <div style={{display:"flex", justifyContent:'center', marginTop: '30px'}}>
                <Button size="lg">RESERVE</Button> 
                <Button size="lg" style={{marginLeft: '20px'}}>ORDER</Button> 
              </div> 
            </div>
        </div>
      </div>
      <div style={{textAlign:'center', marginTop:'40px'}}>
        <h1> Explore Our Latest Specials</h1>
      </div>
    </>
  );
}

export default Home;
