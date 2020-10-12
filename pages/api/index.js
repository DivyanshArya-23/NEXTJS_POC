import axios from "axios";
import React, { useState } from "react";

const index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterCities = (res) => {
    let predictions = res["data"]["predictions"];
    let options = predictions
      .filter(function (data) {
        let types = data["types"];
        return types.includes("locality") && types.includes("political");
      })
      .map((data) => {
        return { label: data["description"], value: data["place_id"] };
      });
    console.log(options);
    return options;
  };

  const hitAPI = () => {
    axios(
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" +
        searchTerm +
        "&key=AIzaSyB7fVn0yK-0GSBwfYOhgth6KAiW-dOLnBQ",
      {
        method: "GET",
        // mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          // "Content-Type": "application/json",
        },
        // withCredentials: true,
        // credentials: "same-origin",
      }
    )
      .then((res) => {
        console.log(res);
        filterCities(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={hitAPI}>GetAPI</button>
    </>
  );
};

export default index;

// const data = {
//   predictions: [
//     {
//       description: "Delhi, India",
//       matched_substrings: [
//         {
//           length: 5,
//           offset: 0,
//         },
//       ],
//       place_id: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
//       reference: "ChIJL_P_CXMEDTkRw0ZdG-0GVvw",
//       structured_formatting: {
//         main_text: "Delhi",
//         main_text_matched_substrings: [
//           {
//             length: 5,
//             offset: 0,
//           },
//         ],
//         secondary_text: "India",
//       },
//       terms: [
//         {
//           offset: 0,
//           value: "Delhi",
//         },
//         {
//           offset: 7,
//           value: "India",
//         },
//       ],
//       types: ["locality", "political", "geocode"],
//     },
//     {
//       description:
//         "Delhi Gate, Netaji Subhash Marg, Daryaganj, New Delhi, Delhi, India",
//       matched_substrings: [
//         {
//           length: 5,
//           offset: 0,
//         },
//       ],
//       place_id: "ChIJ5X_Un9j8DDkRoIqyyeigTbk",
//       reference: "ChIJ5X_Un9j8DDkRoIqyyeigTbk",
//       structured_formatting: {
//         main_text: "Delhi Gate",
//         main_text_matched_substrings: [
//           {
//             length: 5,
//             offset: 0,
//           },
//         ],
//         secondary_text:
//           "Netaji Subhash Marg, Daryaganj, New Delhi, Delhi, India",
//       },
//       terms: [
//         {
//           offset: 0,
//           value: "Delhi Gate",
//         },
//         {
//           offset: 12,
//           value: "Netaji Subhash Marg",
//         },
//         {
//           offset: 33,
//           value: "Daryaganj",
//         },
//         {
//           offset: 44,
//           value: "New Delhi",
//         },
//         {
//           offset: 55,
//           value: "Delhi",
//         },
//         {
//           offset: 62,
//           value: "India",
//         },
//       ],
//       types: ["premise", "point_of_interest", "establishment"],
//     },
//     {
//       description: "Delhi Airport, New Delhi, Delhi, India",
//       matched_substrings: [
//         {
//           length: 5,
//           offset: 0,
//         },
//       ],
//       place_id: "ChIJAVsJf2QdDTkRGJz9NdmhbnQ",
//       reference: "ChIJAVsJf2QdDTkRGJz9NdmhbnQ",
//       structured_formatting: {
//         main_text: "Delhi Airport",
//         main_text_matched_substrings: [
//           {
//             length: 5,
//             offset: 0,
//           },
//         ],
//         secondary_text: "New Delhi, Delhi, India",
//       },
//       terms: [
//         {
//           offset: 0,
//           value: "Delhi Airport",
//         },
//         {
//           offset: 15,
//           value: "New Delhi",
//         },
//         {
//           offset: 26,
//           value: "Delhi",
//         },
//         {
//           offset: 33,
//           value: "India",
//         },
//       ],
//       types: ["airport", "point_of_interest", "establishment"],
//     },
//     {
//       description: "Delhi railway station, Mori Gate, Delhi, India",
//       matched_substrings: [
//         {
//           length: 5,
//           offset: 0,
//         },
//       ],
//       place_id: "ChIJN1Z_yUP9DDkRTHBhsjlTu2w",
//       reference: "ChIJN1Z_yUP9DDkRTHBhsjlTu2w",
//       structured_formatting: {
//         main_text: "Delhi railway station",
//         main_text_matched_substrings: [
//           {
//             length: 5,
//             offset: 0,
//           },
//         ],
//         secondary_text: "Mori Gate, Delhi, India",
//       },
//       terms: [
//         {
//           offset: 0,
//           value: "Delhi railway station",
//         },
//         {
//           offset: 23,
//           value: "Mori Gate",
//         },
//         {
//           offset: 34,
//           value: "Delhi",
//         },
//         {
//           offset: 41,
//           value: "India",
//         },
//       ],
//       types: ["point_of_interest", "establishment"],
//     },
//     {
//       description: "Delhi, NY, USA",
//       matched_substrings: [
//         {
//           length: 5,
//           offset: 0,
//         },
//       ],
//       place_id: "ChIJVS4Od-R43IkRReeLGEBFcv8",
//       reference: "ChIJVS4Od-R43IkRReeLGEBFcv8",
//       structured_formatting: {
//         main_text: "Delhi",
//         main_text_matched_substrings: [
//           {
//             length: 5,
//             offset: 0,
//           },
//         ],
//         secondary_text: "NY, USA",
//       },
//       terms: [
//         {
//           offset: 0,
//           value: "Delhi",
//         },
//         {
//           offset: 7,
//           value: "NY",
//         },
//         {
//           offset: 11,
//           value: "USA",
//         },
//       ],
//       types: ["locality", "political", "geocode"],
//     },
//   ],
//   status: "OK",
// };
