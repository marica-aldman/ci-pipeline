import React, { Component } from "react";


class Card extends Component {

    render() {
        return (

            <div className={"card"} style={{ width: "18rem" }}>
                <div className={"card-body"}>
                    <h5 className={"card-title"}> Title</h5>
                    <p className={"card-text"}>Description </p>
                    <button className={"btn btn-primary"}
                    >Boka</button>
                    <span>price</span>
                </div>
            </div>

        )
    }
}
export default Card;
