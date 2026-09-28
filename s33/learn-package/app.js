// import _ from "lodash";

// const a = _.gte(3, 1);
// console.log(a);

// const b = _.difference([2, 1], [2, 3]);
// console.log(b);

import axios from "axios";

try {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response.data);
} catch {
    console.log("Error");
}
