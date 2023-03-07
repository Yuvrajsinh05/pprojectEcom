import { Images } from "../../../assets/images";
import React, { useState, useEffect } from 'react';
import { getApiCall } from "../../../requests/requests"

export const Categories = () => {


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
    }, []);

    const getCategories = async () => {
        let temp = await getApiCall("http://localhost:8670/Categories")
        setCategories(temp)
    }
    return (
        <>
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
                <div className="row px-xl-5 pb-3">

                    {/* this is local display categories for ui not break until we and more categories  */}

                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="">
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                    <img className="img-fluid" src={Images.cat_1} alt="" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Category Name</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* till here  */}


                    {categories.map((cat, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                                <a className="text-decoration-none" href="">
                                    <div className="cat-item d-flex align-items-center mb-4">
                                        <div className="overflow-hidden" style={{ width: "100px", height: "100px" }}>
                                            <img className="img-fluid" style={{height:"100%"}} src={cat?.img || Images.cat_1} alt="" />
                                        </div>
                                        <div className="flex-fill pl-3">
                                            <h6>{cat?.Categories}</h6>
                                            <small className="text-body">100 Products</small>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        )
                    })}
     

                </div>
            </div>
        </>
    )
}