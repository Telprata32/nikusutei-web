// Import assets
import sushi from '../images/sushi2.png'

const styles = {
    menuNav: {
        display: 'flex',
        backgroundColor: '#A14B54',
        justifyContent: 'space-around'
    },

    menuNavLabel:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white'
    }
}

function Menu(){
    return(
        <>
            <div style={{background:`linear-gradient(0deg,#b3b3b373,#00000061), url(${sushi})`, height:'500px', backgroundPositionY:'center', backgroundSize:'1930px'}}>
                <div style={{position:'relative', backgroundColor:'white', width:'323px', height:'127px', textAlign:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
                    <h1 style={{fontSize:'4.05rem', marginBottom:'-12px'}}>NIKUSUTEI</h1>
                    <h4 style={{color: '#920000'}}>Japanese Muslim Restaurant</h4>
                </div>
            </div>
            <div style={styles.menuNav}>
                <div style={styles.menuNavLabel}>
                    <label> Rice Bowl</label>
                </div>
                <div style={styles.menuNavLabel}>
                    <label> Noodles and Pastas</label>
                </div>
                <div style={styles.menuNavLabel}>
                    <label> Sushi</label>
                </div>
                <div style={styles.menuNavLabel}>
                    <label> Appetizers</label>
                </div>
                <div style={styles.menuNavLabel}>
                    <label> Ala Carte</label>
                </div>
            </div>
        </>
    )
}

export default Menu;