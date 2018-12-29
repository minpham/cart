import React, { Component } from 'react';
import Header from './components/Header';
import ProductContainers from './containers/ProductContainers';
import MessageContainers from './containers/MessageContainers';
import CartContainers from './containers/CartContainers';
import Footer from './components/Footer';



class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainers />
                        <MessageContainers />
                        <CartContainers />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
