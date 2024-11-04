import { useState } from "react"
import './Accordion.css'

const Accordion = ({ title, children, expand }) => {
    const [isOpen, setIsOpen] = useState(expand);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={isOpen?"accordion-open":"accordion"}>
        <div className="accordion-header" onClick={toggleAccordion}>
          <h4>{title}</h4>
          <span style={{fontSize:'14px'}}>{isOpen ? "➖" : "➕"}</span>
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  };
  
  export default Accordion;