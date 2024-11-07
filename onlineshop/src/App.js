import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'chair.jpg',
          desc: 'Коричневый, деревянный',
          category: 'chairs',
          price: '49.99$'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Круглый, прочный',
          category: 'chairs',
          price: '69.99$'
        },
        {
          id: 3,
          title: 'Кресло',
          img: 'armchair.jpg',
          desc: 'Мягкое, удобное',
          category: 'chairs',
          price: '79.99$'
        },
        {
          id: 4,
          title: 'Табурет',
          img: 'tabouret.jpg',
          desc: 'Квадратный, фанерный',
          category: 'chairs',
          price: '19.99$'
        },
        {
          id: 5,
          title: 'Стеллаж',
          img: 'shelf.jpg',
          desc: 'Из 4 полок',
          category: 'chairs',
          price: '99.49$'
        },
      ],
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder} />
      <Items items = {this.state.items} onAdd = {this.addToOrder}/>
      <Footer />
    </div> 
  );
}

deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
}
}

export default App;
