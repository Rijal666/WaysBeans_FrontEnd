import BasicExample from "../component/header"
import Container from 'react-bootstrap/Container';
import { useState} from "react"


function Cart() {
    const [count, setCount] = useState(0);

    


    function Add() {
        if (count === 10) return;
        setCount(count + 1);
        // console.log(count);
      }
      
      function Less() {
        if (count === 0) return;
        setCount(count - 1);
        // console.log(count);
      }
  return (
    <>
        <BasicExample/>
        <Container>
        <div style={{
            margin: "40px 0", display:"flex", flexWrap:"" 
        }}>
            <h1 style={{color:"#6e4c3b"}}>My Cart</h1>
            <p style={{color:"#6e4c3b"}}>Review Your Order</p>
            <div style={{display: "flex", gap:"20px", width:"100%"}}>
            <div style={{
                borderStyle: "solid none",
                display: "flex",
                width:"65%",
                gap: "20px"
            }}>
            <img src="/img/Rectangle 4.png" alt="#" style={{
                width: "90px",
                margin: "10px 0"
            }}></img>
                    <div>
                        <h5 style={{
                        margin: "20px 0", color:"#6e4c3b"
                        }}>GUETAMALA Beans</h5>
                        <div style={{
                            display: "flex",
                            gap: "5px",
                        }}>
                            <button style={{marginBottom:"15px", border:"none", backgroundColor:"white"}} onClick={Less}>-</button>
                            <p style={{padding:"1px 10px", backgroundColor:"#f6e6da"}}>{count}</p>
                            <button style={{marginBottom:"15px", border:"none", backgroundColor:"white"}} onClick={Add}>+</button>
                        </div>
                    </div>
                            <div className="ms-auto my-auto" style={{ alignItems:"center"}}>
                                <p style={{color: "#d19558"}}>Rp.300.900</p>
                                <img src="/img/Vector2.png" alt="#" style={{width: "20px", marginLeft:"50px"}}></img>
                            </div>
                </div>
        <div style={{borderStyle: "solid none",padding:"10px 0",height:"100px", width:"40%"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{color: "#d19558"}}>Subtotal</p>
            <p style={{color: "#d19558"}}>300.900</p>
            </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{color: "#d19558"}}>Qty</p>
            <p style={{color: "#d19558"}}>2</p>
        </div>
        <div style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
            <p style={{color: "#d19558"}}>Total</p>
            <p style={{color: "#d19558"}}>200.900</p>
        </div>
        <div className="d-flex justify-content-end">
        <button style={{padding:"5px 90px", backgroundColor:"#6e4c3b", border:"none", borderRadius:"8px", color:"white"}}>Pay</button>
        </div>
        </div>
        </div>
        </div>
        </Container>
    </>
  );
}

export default Cart;