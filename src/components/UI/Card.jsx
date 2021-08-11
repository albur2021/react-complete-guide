
import './Card.css';


const Card = (props) =>{
//make sure to have a white space when assiging 'card ' to props.className
//card from Card.css file + ExpenseItem.css via props to Have all css trims in Parent/Wrap Card Component 

const classes = 'card ' + props.className;
return(
  <div className={classes}>
      {props.children}
  </div>
  )
}


export default Card;