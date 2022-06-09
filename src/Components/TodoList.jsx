import styles from "./TodoList.module.css"
import cx from "classnames"
const TodoList = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#47c6a3" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <p className="mb-2">
                  <span className="h2 me-2">Pick up your tools</span>{" "}
                  <span className="badge bg-danger">checklist</span>
                </p>
                <p className="text-muted pb-2">
                  09/06/2022 • Rider - Ahmed1234
                </p>

                <ul className="list-group rounded-0">
                  <li className="list-group-item border-0 d-flex align-items-center ps-0">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      value=""
                      aria-label="..."
                      checked
                    />
                    Water
                  </li>
                  <li className="list-group-item border-0 d-flex align-items-center ps-0">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    Boxes
                  </li>
                  <li className="list-group-item border-0 d-flex align-items-center ps-0">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    Bag
                  </li>
                  <li className="list-group-item border-0 d-flex align-items-center ps-0">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    Empty boxes
                  </li>
                  <li className="list-group-item border-0 d-flex align-items-center ps-0">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                    Container bags
                  </li>
                </ul>
              </div>
              <span className="ms-auto py-2">
                <button className={styles["learn-more"]}>
                  <span className={styles.circle} aria-hidden="true">
                    <span className={cx(styles.icon, styles.arrow)}></span>
                  </span>
                  <span className={styles["button-text"]}>Good to go </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodoList
