function Featured() {
  return (
    <div className="card">
      <h5 className="card-header">Financial Services</h5>
      <div className="card-body">
        <h5 className="card-title">WorldQuant</h5>
        <img
          src="https://www.worldquant.com/wp-content/uploads/2022/04/worldquant.png"
          alt=""
        />
        <p className="card-text">
          Achieved GOLD LEVEL in WorldQuant's Alphathon, securing the
          opportunity to work as a Research Consultant.
        </p>
        <a href="https://www.worldquant.com/" className="btn btn-primary">
          Visit Website
        </a>
      </div>
    </div>
  );
}
export default Featured;
