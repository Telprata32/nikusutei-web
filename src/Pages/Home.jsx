import sushiimg from "../images/sushiimg.jpg";

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
    boxShadow: 'inset 0px 230px 1500px 101px #131212D1'
  },
  topNav_Bar: {
    display: "flex",
    justifyContent: "space-around",
    position:'sticky',
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
          <span style={{ color: "white", paddingTop:'7px' }}>ABOUT US</span>
          <span style={{ color: "white", paddingTop:'7px' }}>CONTACT US</span>
          <span style={{ color: "white", paddingTop:'7px' }}>MENU</span>
          <span style={{ color: "white", paddingTop:'7px' }}>SERVICES</span>
        </div>
      </div>
      
      <div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
      <div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
      <div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </>
  );
}

export default Home;
