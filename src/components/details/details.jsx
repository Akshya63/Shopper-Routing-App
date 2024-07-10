import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom"

export function Details() {
    const [product, setProduct] = useState({ id: 0, title: '', price: '', image: '', description: '', cetegory: '', rating: { rate: 0, count: 0 } })

    let params = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => {
                setProduct(response.data);
            })
    }, [])
    return (
        <div>
            <h2>Details</h2>
            <section className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-4">
                            <img src={product.image} width="100%" height="200" />
                        </div>
                        <div className="col-8">
                            <dl>
                                <dt>Title</dt>
                                <dd>{product.title}</dd>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                            </dl>
                            <Link to={`more-details/${product.id}`}>More..</Link>

                        </div>
                    </div>

                </div>
                <div className="col">
                    <Outlet />

                </div>
            </section>
            <Link to={`/${product.category}`}>Back to {product.category}</Link>
        </div>
    )
}