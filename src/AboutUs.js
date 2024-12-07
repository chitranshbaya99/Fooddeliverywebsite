import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>
                Welcome to <strong>FoodExpress</strong>, where delicious food meets fast delivery. We are committed to
                bringing you a wide variety of culinary delights from the best restaurants in town, straight to your
                doorstep!
            </p>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to make food delivery quick, easy, and accessible for everyone. We believe that
                    everyone deserves the joy of a great meal, delivered fresh and on time.
                </p>
            </section>

            <section className="values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Quality:</strong> Only the best food from trusted restaurants.</li>
                    <li><strong>Customer First:</strong> Your satisfaction is our priority.</li>
                    <li><strong>Innovation:</strong> Constantly improving to serve you better.</li>
                    <li><strong>Reliability:</strong> Delivering your food safely and on time.</li>
                </ul>
            </section>

            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>If you have any questions or feedback, please reach out to us at:</p>
                <p><strong>Email:</strong> support@foodexpress.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
            </section>
        </div>
    );
};

export default AboutUs;
