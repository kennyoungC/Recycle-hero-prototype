import React from "react"

const CustomerItems = () => {
  return (
    <section className="vh-50" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <div className="p-4 bg-white notes">
                  <div className="d-flex justify-content-between flex-wrap align-items-center">
                    <h4>Customers</h4>

                    <p className="text-muted mb-0 pb-2">
                      09/06/2022 • Rider - Ahmed1234
                    </p>
                  </div>
                </div>

                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Customers</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Ahmed Adegbami</td>
                      <td>Available</td>
                      <td>
                        <button type="submit" className="btn btn-success ms-1">
                          Start
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Hilary Wisdom</td>
                      <td>In progress</td>
                      <td>
                        <button type="submit" className="btn btn-success ms-1">
                          Start
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Kenneth Okonkwo</td>
                      <td>Finished</td>
                      <td>
                        <button type="submit" className="btn btn-danger">
                          Completed
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" className="btn btn-success">
                  Recycle{" "}
                  <span>
                    <i className="bi bi-recycle"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerItems
