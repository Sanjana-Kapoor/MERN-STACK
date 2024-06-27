// Complete the Form Component and export it
import { name, email } from './HomePage.js';

const handleSubmit = (e) => {
  // console.log("Form submitted");
  e.preventDefault();
}

const Form = () => (
  // const handleSubmit = () =>{
  //   console.log("Form submitted");

  // }
  <>
    <div>
      <form onsubmit={handleSubmit}>
        <h3>Login Page</h3>
        <input type="text" value={name} placeholder="YourName" />
        <br />
        <input type="email" value={email} placeholder="xyz@pqr.com" />
        <button type="submit">Login</button>
      </form>
    </div>
  </>
);

export { Form };