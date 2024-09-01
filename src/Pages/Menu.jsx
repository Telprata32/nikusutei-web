// Import assets
import sushi from '../images/sushi2.png'

function Menu(){
    return(
        <>
            <div style={{background:`linear-gradient(0deg,#37393c73,#00000094), url(${sushi})`, height:'500px', backgroundPositionY:'center', backgroundSize:'1930px'}}>
                <div style={{position:'relative', backgroundColor:'white', width:'323px', height:'127px', textAlign:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
                    <h1 style={{fontSize:'4.05rem', marginBottom:'-12px'}}>NIKUSUTEI</h1>
                    <h4 style={{color: '#920000'}}>Japanese Muslim Restaurant</h4>
                </div>
            </div>
    
        </>
    )
}

export default Menu;