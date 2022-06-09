import React from "react"
import { ListGroup } from "react-bootstrap"
import MyNavbar from "./MyNavbar"

const PickupDetails = () => {
  return (
    <div>
      <MyNavbar />
      <section className="vh-50" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <div className="p-4 bg-white notes">
                    <div className="d-flex justify-content-between flex-wrap align-items-center">
                      <h4>Hilary Order</h4>

                      <button type="submit" className="btn btn-secondary">
                        Open Map
                      </button>
                    </div>
                  </div>
                  <ListGroup variant="flush">
                    <ListGroup.Item>- 2 Boxes of Glasses</ListGroup.Item>
                    <ListGroup.Item>- 1 Box of paper</ListGroup.Item>
                    <ListGroup.Item>- 60 Deposits</ListGroup.Item>
                    <ListGroup.Item>- 10kg of clothes</ListGroup.Item>
                  </ListGroup>
                  <div className="d-flex p-2 ">
                    <p className="mb-0">Phone:</p>

                    <div className="ps-2">
                      <span className="text-sm opacity-8">
                        (+40) 772 100 200
                      </span>
                    </div>
                  </div>

                  <div className="d-flex p-2 ">
                    <p className="mb-0">Address:</p>
                    <div className="ps-2">
                      <span className="text-sm opacity-8">
                        730 Dyonisie Wolf Bucharest, RO 010458
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn btn-success">
                      Arrived
                    </button>
                    <button type="submit" className="btn btn-success">
                      Pick Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PickupDetails
