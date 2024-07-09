import { Link } from "react-router-dom";

const LibrarianHomeScreen = () => {
  return (
    <>
      <h1>Welcome Librarian</h1>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">
              <Link to={"/add-book"}>Add new books</Link>
            </div>
            <div className="description">
              Add a new Book in the library.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibrarianHomeScreen;
