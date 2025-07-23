export default function Home() {
  return (
    <section className="bg-success text-white text-center d-flex align-items-center justify-content-center w-100 min-vh-100 ">
      <div className="container">
        <h2 className="text-uppercase fw-bold ">About Component</h2>

        <div className="d-flex justify-content-center align-items-center ">
          <div className="bg-white" style={{ height: '4px', width: '80px' }}></div>
          <div className="mx-3 fs-4">★</div>
          <div className="bg-white" style={{ height: '4px', width: '80px' }}></div>
        </div>

        <div className="row px-md-5">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}