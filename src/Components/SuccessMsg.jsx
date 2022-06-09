import styles from "./SuccessMsg.module.css"
const SuccessMsg = () => {
  return (
    <div class={`${styles.card} text-center`}>
      <div
        style={{
          borderRadius: "200px",
          height: "200px",
          width: "200px",
          background: "#F8FAF5",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <i class={styles.checkmark}>✓</i>
      </div>
      <h1 className={styles.h1}>Success</h1>
      <p>
        <span className="fw-bold fs-4">Bravo!! </span>You are a Hero
        <br />{" "}
        <button type="submit" className="btn btn-success">
          Next Order
        </button>
      </p>
    </div>
  )
}

export default SuccessMsg
