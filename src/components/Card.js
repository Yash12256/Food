import React from 'react'

const Card = ({arr}) => {
    console.log(arr.name)
    return (
        <div>

            <div>
                <div className="card mt -3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt='...' />
                    <div className="card-body">
                        <h5 className="card-title">{arr.name}</h5>
                        {/* <p className="card-text">{arr.description}</p> */}
                        <div className='container w -100'>
                            <select className='m-2 h-100  bg-success'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100  bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>

                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total price
                            </div>


                        </div>

                    </div>
                </div></div>

        </div>
    )
}

export default Card








