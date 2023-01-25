import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./Checkout.css";
const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order placed successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-6 checkout-img relative w-fit rounded-lg">
        <h1 className="text-white font-bold text-5xl absolute left-[10%] top-2/4 ">
          Check Out
        </h1>
      </div>
      <div>
        <h2 className="text-4xl">You Are Able Order : {title}</h2>
        <h4 className="text-4xl">Price : ${price}</h4>
      </div>
      <div className="bg-[#F3F3F3] rounded-lg my-32 py-24">
        <form onSubmit={handlePlaceOrder} className="w-10/12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="email"
              type="text"
              placeholder="Your email"
              defaultValue={user?.email}
              className="input input-ghost w-full  input-bordered"
              readOnly
            />
          </div>
          <div>
            <textarea
              name="message"
              className="textarea w-full h-24 mt-4 textarea-bordered"
              placeholder="Your Message"
              required
            ></textarea>

            <input
              className="btn border-0 my-6 w-full bg-[#FF3811]"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
