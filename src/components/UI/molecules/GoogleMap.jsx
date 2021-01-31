// import { Map, GoogleApiWrapper }from 'google-maps-react'
import React from "react";

// // const MapRender = () => {
// //   const mapStyles = {
// //     width: '100%',
// //     height: '100%',
// //   };
// //   return(
// //     <Map 
// //       google={this.props.google}
// //       zoom={15}
// //       style={mapStyles}
// //       initialCenter={{lat:0,lng:0}}
// //     />
// //   );
// // };

// // export default GoogleApiWrapper({
// //   apiKey: 'AIzaSyCRuYHIxEItMlR_NLX2bhph3N-mcG7DFs0'
// // })(MapRender);

// class FindAddressPresenter extends React.Component {
//   render() {
//     return (
//       <div className={"FindAddressPresenter"}>
//         <Map google={this.props.google} zoom={14}>
//           {/* <Marker name={"Current location"} /> */}
//           {/* <InfoWindow>
//             <div>
//               <h1>test</h1>
//             </div>
//           </InfoWindow> */}
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCRuYHIxEItMlR_NLX2bhph3N-mcG7DFs0'
// })(FindAddressPresenter);

const FakeBox = () => {
  return(
    <div className="FakeBox">
      <h1>지도가 들어갈 자리입니다.</h1>
    </div>
  )
}

export default FakeBox;