import React from 'react';

import Navbar from './navbar'

function Homepage(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

export default Homepage;