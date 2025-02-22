import React, { useContext, useState } from 'react';
import { Cartcontext } from '../context/Cartcontext';
import NavBar from '../component/NavBar';

function Cart() {
    const { cart, setcart } = useContext(Cartcontext);

    const [quantities, setQuantities] = useState(cart.map(() => 1));

    function remove(index) {
        setcart(cart.filter((_, i) => i !== index));
        setQuantities(quantities.filter((_, i) => i !== index));
    }

    function increaseQuantity(index) {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    }

    function decreaseQuantity(index) {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    }

    return (
        <div>
            <NavBar />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {cart.map((item, index) => (
                    <div key={index} className="card" style={{ width: "20rem", margin: "10px", border: "1px solid gray", padding: "10px", backgroundColor:"#F5F0EE" }}>
                        <img src={item.thumbnail} className="card-img-top w-50" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <div className='d-flex' style={{ justifyContent: "space-between", alignItems: "center" }}>
                                <button onClick={() => decreaseQuantity(index)} className='fs-1' style={{ border: "none" }}>-</button>
                                <p className='fs-3'>{quantities[index]}</p>
                                <button onClick={() => increaseQuantity(index)} className='fs-1' style={{ border: "none" }}>+</button>
                            </div>
                            <div className='d-flex' style={{ alignItems: "center", justifyContent: "space-between" }}>
                                <h4 className="card-text">${item.price * quantities[index]}</h4>
                                <button onClick={() => remove(index)} className="btn btn-primary w-50 rounded-4">Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
