export default function About() {
  return (
    <section className="bg-white d-flex align-items-center justify-content-center w-100 min-vh-100">
      <div className="container">
        <h2 className="text-uppercase text-center fw-bold mb-4">Contact Section</h2>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="bg-dark" style={{ height: '4px', width: '80px' }}></div>
          <div className="mx-3 fs-4 text-dark">★</div>
          <div className="bg-dark" style={{ height: '4px', width: '80px' }}></div>
        </div>

        <form className="w-75 mx-auto">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="userName" />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" placeholder="userAge" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="userEmail" />
          </div>
          <div className="mb-4">
            <input type="password" className="form-control" placeholder="userPassword" />
          </div>
          <button type="submit" className="btn btn-success">send Message</button>
        </form>
      </div>
    </section>
  );
}
