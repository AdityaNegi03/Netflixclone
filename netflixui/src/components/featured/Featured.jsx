import "./features.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
  return (
    <div className="featured">
    {type &&(
      <div className="category">
         <span>{type ==="movie" ? "Movies":"Series"}</span>
          <select name="genre" id="genre">
           <option>Genre</option>
           <option value="action">Action</option>
           <option value="comedy">Comedy</option>
           <option value="crime">Crime</option>
           <option value="horror">Horror</option>
           <option value="romance">Romance</option>
           <option value="drama">Drama</option>
           <option value="animation">Animation</option>
           <option value="documentary">Documentary</option>
          </select>
      
      </div>
    )}
     
    <img  src="https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg" alt=""/>
     
    <div className="info">
     <img src="https://www.nicepng.com/png/full/17-176297_avengers-logo-png-avengers-age-of-ultron-logo.png" alt=""/>
     <span className="desc">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
       in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </span> 
      
      <div className="buttons">
         <button className="play">
         <PlayArrowIcon/> 
         <span>Play</span>
         
         </button>
         <button className="more">
         <InfoOutlinedIcon/>
         <span>More info</span>
         </button>
     
      </div>

        
     
     </div>
     
     </div>

    
  )
}
