import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import MyNavbar from "./MyNavbar"
import SuccessMsg from "./SuccessMsg"

const SuccessPage = () => {
  return (
    <div>
      <MyNavbar />

      <section className="vh-50" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className=" text-center rounded-3">
                <SuccessMsg />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuccessPage
