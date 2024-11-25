import proptypes from "prop-types"


export const Student = (props) =>{
  return(
     <>
      <div>
      <table>
       <tr>
         <th>Name</th>
         <th>{props.name}</th>
        </tr>
        <tr>
         <th>Age</th>
         <th>{props.Age}</th>
        </tr>
        <tr>
         <th>MArried</th>
         <th>{props.married}</th>
        </tr> 

      </table>
      
      
      </div>

     </>


  );



};

Student.prototype={
name:proptypes.string,
Age:proptypes.number,
married:proptypes.bool
}

