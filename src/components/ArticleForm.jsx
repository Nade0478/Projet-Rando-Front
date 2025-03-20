import React from 'react'; 
 
const Article = ({map}) => { 
     
 
    return ( 
        <div className='cardMap'> 
            <div className='contentMap'> 
                {map.sprites.front_default ? 
                <img src={map.sprites.front_default} alt={"image de "+ map.name} />: 
                <img src="inconnu.png" alt={"image de "+ map.name} />} 
                 
                <h3>{map.name.toUpperCase()}</h3> 
            </div>   
        </div> 
    ); 
}; 
 
export default Article; 