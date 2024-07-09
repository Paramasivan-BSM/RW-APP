import "../Styles/Products.css"

let BoxStyle = {

minHeight:"200px",
"min-width":"200px",
backgroundColor:"whitesmoke",
"box-shadow":"2px 2px 5px black"

}


// Dynamic Data

let ProductStock = ()=>{
    let Stock = 10;
    return Stock > 0 ? Stock : "Zero";
}


export let Products = ()=>{
    return(
        <div className="row">

            <div className="col PC-1" style={BoxStyle}>

                <h3 className="ProductTitle">FreshMilk</h3>
                <p className="ProductDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h5 className="ProductPrice">Price:$30</h5>


                <div className="ProductStock">
                <button className="Product_Add_Btn_1">+</button>
                <span className="StockDetails">{ProductStock()}</span>
                <button className="Product_Add_Btn_1">-</button>
                </div>

                <img src={require()} alt="" srcset="" />

               


            </div>






        </div>
    )
}