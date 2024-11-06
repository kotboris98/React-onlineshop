import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул',
          desc: 'Коричневый, деревянный',
          category: 'chairs',
          price: '49.99$'
        },
        {
          id: 2,
          title: 'Стол',
          desc: 'Круглый, прочный',
          category: 'chairs',
          price: '69.99$'
        },
        {
          id: 3,
          title: 'Кресло',
          desc: 'Мягкое, удобное',
          category: 'chairs',
          price: '79.99$'
        },
        {
          id: 4,
          title: 'Табурет',
          desc: 'Квадратный, фанерный',
          category: 'chairs',
          price: '19.99$'
        },
        {
          id: 5,
          title: 'Стеллаж',
          desc: 'Из 4 полок',
          category: 'chairs',
          price: '99.99$'
        },
      ],
    }
  }
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div> 
  );
}
}

export default App;
