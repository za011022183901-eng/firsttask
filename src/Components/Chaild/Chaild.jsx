








export default function Chaild( props ) {

let{ code , id , category , price , onSale , count ,  }=props.products






  return (

    <>
    
    
      <div className="col-md-4 gy-3">
      <div className="bg-light p-2 position-relative">
        <h2>name : {code}</h2>
        <h2>id : {id}</h2>
        <h2>category: {category}</h2>
        <h2>price : {price}</h2>
        <h2>count : {count}</h2>

        

        {onSale=== true ? (<div className="sale position-absolute top-0 end-0 bg-primary p-2 text-light">sale</div>) : ("") } 

        <button className="btn btn-outline-warning w-25   "  onClick={ function (){props.fu(props.index , 1)} }    > update + </button>
        <button className="btn btn-outline-warning w-25 ms-5 "  onClick={ function (){props.fu(props.index , -1)} }    > update - </button>
        <button className="btn btn-outline-danger w-25 my-2 w-100 "  onClick={ function (){props.delete(id)} }    > delet </button>

      </div>
    </div>
    
    </>
  
  );
}