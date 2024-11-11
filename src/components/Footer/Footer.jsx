import './Footer.css'
const getCurrentDate = ()=>new Date().getFullYear();
const Footer = () => {
    return (
      <footer className='footer'>
        <p className="glass-morph footer-text">
          &copy; {getCurrentDate()} Maintained by&nbsp;
           <a href="https://github.com/harshitv804" target="_blank" rel="noopener noreferrer">
            Harshit V
          </a>&nbsp;x AI
        </p>
      </footer>
    );
  };
  
  export default Footer;