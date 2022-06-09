import React from "react"
import {
  FloatingLabel,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap"
import MyNavbar from "./MyNavbar"

const Documentation = () => {
  const [formState, setFormState] = React.useState({
    isGlass: false,
    isPaper: false,
    isDeposit: false,
    isClothes: false,
  })

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
                      <h4>Documentation</h4>

                      <p className="text-muted mb-0 pb-2">
                        09/06/2022 • Rider - Ahmed1234
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`Glasses`}
                      onChange={(e) =>
                        setFormState((prevState) => ({
                          ...prevState,
                          isGlass: e.target.checked,
                        }))
                      }
                    />
                    <Form.Check
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`Paper`}
                      onChange={(e) =>
                        setFormState((prevState) => ({
                          ...prevState,
                          isPaper: e.target.checked,
                        }))
                      }
                    />
                    <Form.Check
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`Deposit`}
                      onChange={(e) =>
                        setFormState((prevState) => ({
                          ...prevState,
                          isDeposit: e.target.checked,
                        }))
                      }
                    />
                    <Form.Check
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`Clothes`}
                      onChange={(e) =>
                        setFormState((prevState) => ({
                          ...prevState,
                          isClothes: e.target.checked,
                        }))
                      }
                    />
                  </div>
                  <Form className="w-75 my-3">
                    {formState.isGlass && (
                      <FormGroup>
                        <Form.Label>Glasses</Form.Label>
                        <InputGroup>
                          <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                          <InputGroup.Text>Kg(s)</InputGroup.Text>
                        </InputGroup>
                      </FormGroup>
                    )}
                    {formState.isPaper && (
                      <FormGroup>
                        <Form.Label>Paper</Form.Label>
                        <InputGroup>
                          <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                          <InputGroup.Text>Kg(s)</InputGroup.Text>
                        </InputGroup>
                      </FormGroup>
                    )}
                    {formState.isDeposit && (
                      <FormGroup>
                        <Form.Label>Deposit</Form.Label>
                        <InputGroup>
                          <FormControl
                            type="number"
                            min="0"
                            aria-label="Dollar amount (with dot and two decimal places)"
                          />
                          <InputGroup.Text>Kg(s)</InputGroup.Text>
                        </InputGroup>
                      </FormGroup>
                    )}
                    {formState.isClothes && (
                      <FormGroup>
                        <Form.Label>Clothes</Form.Label>
                        <InputGroup>
                          <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
                          <InputGroup.Text>Kg(s)</InputGroup.Text>
                        </InputGroup>
                      </FormGroup>
                    )}
                    <FormGroup className="my-4">
                      <Form.Check
                        type="checkbox"
                        id={`default-checkbox`}
                        label={`Could not pick up`}
                      />
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Comments"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel>
                    </FormGroup>
                    <button type="submit" className="btn btn-success">
                      Finish
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documentation
