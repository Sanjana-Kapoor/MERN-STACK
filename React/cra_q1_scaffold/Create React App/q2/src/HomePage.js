// Complete the HomePage Component and export it
import { Form } from "./Form.js";

let name = "Sana";
let email = "san@gmail.com";

function HomePage() {
  return (
    <div className="Homepage">

      <h1>HomePage</h1>
      <Form />


    </div>
  );
}
export { name, email };
export default HomePage;