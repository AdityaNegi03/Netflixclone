import "./list.scss";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ListItem from "../listItem/ListItem";
export default function List() {

    const handleClick = (direction)=> {
      if(direction ===  "left")
      {

      }

    }
  return (
    <div className="list">
       <span className="listTitle">Continue to watch</span>
       <div className="wrapper">
          <ArrowBackIosIcon className="sliderArrow left" onClick={()=> handleClick("left")}/>
          <div className="container">
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>

          </div>
          <ArrowForwardIosIcon className="sliderArrow right" onClick={()=> handleClick("right")}/>
       </div>
    </div>
  )
}
