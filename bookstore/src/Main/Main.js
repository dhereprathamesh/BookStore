import React from "react";

const Main = () => {
  return (
    <>
      < div className="main-div">
      <img
          className="img-div"
          src="https://cushing-malloy.com/wp-content/uploads/2019/09/17-Ways-To-Find-Good-Books-To-Read.jpg"
          alt=""
        />

        <div className="rows">
        <div className="row1">
          <h1 className="book-quote">
            A room without books is like
            <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
                    <h2 className="book-quote">Find Your Book</h2>
                    <div className="search">
              <form class="example" action="action_page.php">
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  className="input-feild"
                />
                <button type="submit" className="searh-btn">
                  search
                </button>
              </form>
            </div>
                    <img src="" alt="" />
        </div>
        
        </div>
       
      
      </div>
    </>
  );
};

export default Main;