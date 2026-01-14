import "../CSS/contact.css"
import { FormContact } from "./form";

export const Contact = () => {
    return (
        <>
        <div className="contact-info">
        <p><strong>Institute Name:</strong> Haldia Institute of Technology</p>
        <p><strong>Address:</strong> ICARE Complex, Hatiberia, Haldia, Purba Medinipur, West Bengal – 721657</p>
        <p><strong>Phone:</strong> +91 3224 252900 / 252901</p>
        <p><strong>Email:</strong> info@hithaldia.ac.in</p>
        <p><strong>Website:</strong> www.hithaldia.ac.in</p>
      </div>

      <div className="contact-description">
        <p>
          Haldia Institute of Technology (HIT) is one of the leading technical
          institutions in Eastern India, committed to excellence in education,
          research, and innovation. The institute provides a vibrant academic
          environment with modern infrastructure and experienced faculty.
        </p>
      </div>

      <div className="map-container">
        <iframe 
        title="hit"
        src="https://www.google.com/maps?q=Haldia%20Institute%20of%20Technology&output=embed"
        width="80%"
        height="400"
        style={{border:0.2}}
        allowFullScreen=""
        loading="lazy">
        </iframe>
      </div>
      <FormContact/>


        </>
    )
};