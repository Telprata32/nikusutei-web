// Import assets
import sushi from '../images/sushi2.png'
import ricebowl from '../images/Menu/ricebowl.svg'

// Import Styling
import '../Styles/Menu.css'

const styles = {
    menuNav: {
        display: 'flex',
        backgroundColor: '#A14B54',
        justifyContent: 'space-around'
    },
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
                <div className='menuNav-label'>
                    <img src={ricebowl} />
                    <label> Rice Bowl</label>
                </div>
                <div className='menuNav-label'>
                    <label> Noodles and Pastas</label>
                </div>
                <div className='menuNav-label'>
                    <label> Sushi</label>
                </div>
                <div className='menuNav-label'>
                    <label> Appetizers</label>
                </div>
                <div className='menuNav-label'>
                    <label> Ala Carte</label>
                </div>
            </div>
        </>
    )
}

export default Menu;