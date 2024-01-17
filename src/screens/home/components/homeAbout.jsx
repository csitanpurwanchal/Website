import "./homeAbout.css";

const HomeAbout = ({title="WHAT DO WE OFFER?",description="Empowering CSIT Growth, Tailored Solutions, Shaping Future Leaders."}) => {
  return (
    <>
      <div className="container">
        <h1>WHO ARE WE?</h1>
        <div className="underline">

        </div>
        <div className="content0">
          <img src="https://scontent.fbir1-1.fna.fbcdn.net/v/t39.30808-6/412952406_2099988740353396_1192900954528754615_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=4T4XEi9bhh8AX-Gbb7Z&_nc_ht=scontent.fbir1-1.fna&oh=00_AfCKIHI4D0y9xf8TU3TjpHpWgs_G2Vbjsxgi_1_g8d7noQ&oe=65AC2DFC" alt="CSIT" />
         <div className="par">
          <p>CSITAN is an autonomous, non-profitable, non-governmental, non-political, service-oriented social organization established by the young energetic BSc CSIT students in 2011 to act as a bridge between the faculty, students and IT industries in Nepal.</p>
          <button className="button-bottom">ABOUT US</button>
          </div>
          </div>
          
        
        
      </div>
      
      <div className="homeAbout">
        <div className="content1">
          <b>{title}</b>
          <div className="underline"></div>
           <div className="para">
            <p>{description}</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomeAbout;
