
import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

class App extends Component {


      state = {
            products: []
      }


      async componentDidMount() {
            // async await 
            const res = await axios.get("http://localhost:1337/products")

            console.log(res.data);
            this.setState({ products: res.data })
      }

      render() {
            return (
                  <div>

                        {this.state.products.map((product) =>

                              <Card
                                    key={product.id}
                                    docId={product.id}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}

                              />
                        )}




                  </div>

            )
      }
}
export default App;