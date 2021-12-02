import axios from "axios";

const payment = async (price, cake, name, email, phone, paynow) => {
  console.log(paynow);
  if (paynow) {
    const response = await axios.post(
      "https://virashmani.herokuapp.com/payment",
      {
        price: price,
      }
    );
    const { data } = response;
    const options = {
      key: "rzp_test_t7PMlIj8PD3BeR",
      name: "Cake",
      description: "thanks for ordering",
      order_id: data.id,
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          const url = `https://virashmani.herokuapp.com/capture/${paymentId}`;
          const captureRes = await axios.post(url, {
            price: price * 100,
          });
          const success = JSON.parse(captureRes.data);
          if (success.captured) {
            const { data } = await axios.post(
              "https://virashmani.herokuapp.com/pdf",
              {
                name: name,
                email: email,
                phone: phone,
                cake: cake,
                price: parseInt(price),
                paid: paynow,
              }
            );
            var a = document.createElement("a"); //Create <a>
            a.href = "data:application/pdf;base64," + data; //Image Base64 Goes here
            a.download = "invoice.pdf"; //File name Here
            a.click();
          } else {
            console.log("failed");
          }
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        name: "Aniket Shetye",
        email: "aniketshetyeajs@gmail.com",
        contact: "9921565101",
      },
      theme: {
        color: "#C3404E",
      },
    };
    const rzpl = new window.Razorpay(options);
    rzpl.open();
  } else {
    const { data } = await axios.post("https://virashmani.herokuapp.com/pdf", {
      name: name,
      email: email,
      phone: phone,
      cake: cake,
      price: parseInt(price),
      paid: paynow,
    });
    var a = document.createElement("a"); //Create <a>
    a.href = "data:application/pdf;base64," + data; //Image Base64 Goes here
    a.download = "invoice.pdf"; //File name Here
    a.click();
  }
};

export { payment };
