import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'; 
import NavBar from '../component/NavBar';
import { Cartcontext } from "../context/Cartcontext";

function Product() {
    const [products, setProducts] = useState([]);
    const { cart, setcart } = useContext(Cartcontext);
    const [orginilproduct, setorginilproduct] = useState([]);
    const [titlesearch, settitlesearch] = useState("");

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setProducts(res.data.products);
                setorginilproduct(res.data.products);
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    function sortProducts() {
        const sortedProducts = [...products].sort((a, b) => a.title.localeCompare(b.title));
        setProducts(sortedProducts);
    }

    function handleSearch(e) {
        const title = e.target.value;
        settitlesearch(title);

        if (title === "") {
            setProducts(orginilproduct);
        } else {
            const searchproduct = orginilproduct.filter(item =>
                item.title.toLowerCase().includes(title.toLowerCase())
            );

            if (searchproduct.length > 0) {
                setProducts(searchproduct);
            } else {
                setProducts(orginilproduct);
            }
        }
    }

    function add(item) {
        setcart([...cart, item]);
    }

    return (
        <div>
            <NavBar />
            <div className='d-flex my-3' style={{justifyContent:"space-around"}}>
                <button onClick={sortProducts} className=' text-white border fw-bold border-none rounded-3' style={{backgroundColor:"#2866B7EB" }}>Sort by Name</button>
                <input type="text" className="form-control w-25 p-2" placeholder="Search by Title" value={titlesearch} onChange={handleSearch} style={{ marginLeft: 20, padding: 5 }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {products.map((item, index) => (
                    <div key={index} className="card" style={{ width: "20rem", margin: "10px", border: "1px solid gray", padding: "10px", backgroundColor:"#F5F0EEFF "}}>
                        <img src={item.thumbnail} className="card-img-top w-50" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <div className="d-flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
                                <h4 className="card-text">${item.price}</h4>
                                <button onClick={() => add(item)} className="btn btn-primary w-50 rounded-4">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
