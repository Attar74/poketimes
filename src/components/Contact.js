import React from "react";

const Contact = (props) => {
    setTimeout(()=>{
        // props.history.push('/about')
    }, 2000)
    return (
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            blanditiis similique exercitationem ipsam quaerat suscipit voluptas quod
            sapiente cumque quae sed fugiat expedita nobis quasi, quis quas nemo
            aperiam commodi?
        </p>
        </div>
    );
};

export default Contact;
