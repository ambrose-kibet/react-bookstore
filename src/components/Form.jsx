const Form = () => (
  <form className="form">
    <h4 className="form-title">ADD NEW BOOK</h4>
    <div className="form-control">
      <input type="text" placeholder="Book title" className="form-input" />

      <select
        name="category"
        id="category"
        placeholder="category"
        aria-label="select"
      />
      <button type="submit" className="btn btn-primary">
        ADD BOOK
      </button>
    </div>
  </form>
);
export default Form;
