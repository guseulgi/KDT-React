// function MainHeader() {
//   // 기능 -> 자바스크립트 ok
//   const pororo = '뽀로로';
//   const friend = '친구들';
//   const greeting = true;

//   // 리턴 -> jsx, 자바스크립트와 html 둘다 ok
//   return (
//     <div>
//       <h1>Hello, Component?</h1>
//       <p>{pororo} {friend} 안녕</p>
//       <h3>{greeting ? 'Hi' : 'Bye'}</h3>
//     </div>
//   )
// }

// export default MainHeader;

import React, {Component} from 'react';

class MainHeader extends Component {
  constructor() {
    super();
    this.pororo = '뽀로로';
    this.friend = '친구들';
    this.greeting = true;
  }
  render() {
    return (
      <div>
        <h1>Hello, Component?</h1>
        <p>{this.pororo} {this.friend} 안녕</p>
        <h3>{this.greeting ? 'Hi' : 'Bye'}</h3>
      </div>
    );
  }
}

export default MainHeader;