import React, { Component } from 'react'

class Landing extends Component {
    render() {
        const style = {
            width: '18rem;',
            height: '20rem;'
        }
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                <div class="card" style={style}>
                <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MzAvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzExMTA1NzIxNTkuanBn" class="card-img-top" alt="..." />
                </div>
                </div>
            </div>
        )
    }
}

export default Landing