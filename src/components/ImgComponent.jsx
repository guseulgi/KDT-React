// import 이미지변수 from "상대경로";

// function ImgComponent() {

//   return (
//     <div>
//       {/* public 폴더에 넣기 */}
//       <img src="/tistory.png" />

//       {/* src 폴더에 넣기
//         <img src={이미지변수} />
//       */}
//     </div>
//   );
// }

// export default ImgComponent;

import React, {Component} from 'react';

class ImgComponent extends Component {
  constructor(props) {
    super();
    this.path = "/tistory.png";
  }

  render() {
    return(
      <img src={this.path} />
    );
  }
}

export default ImgComponent;