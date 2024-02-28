function Card() {
  return (
    <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">BITS Pilani, Hyderabad Campus</h5>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/400px-BITS_Pilani-Logo.svg.png"
              alt=""
              width={"200"}
              height={"200"}
            />
            <p className="card-text">
              Bachelor of Engineering in Mechanical Engineering
            </p>
            <a
              href="http://www.bits-pilani.ac.in/Hyderabad/"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">DAV Public School</h5>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/DAV_CMC_Logo.svg/360px-DAV_CMC_Logo.svg.png"
              alt=""
              width={"200"}
              height={"200"}
            />
            <p className="card-text">High School Diploma</p>
            <a href="https://davcmc.net.in/" className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
