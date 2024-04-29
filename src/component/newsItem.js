// import React from "react";

// function NewsItem(props) {
//   return (
//     <>
//       <div className="container my-3 row">
//         <div className="card" style={{ width: "18rem" }}>
//           <img
//             src="https://www.aljazeera.com/wp-content/uploads/2024/04/2022-07-19T095540Z_2106583907_RC2XEV90J75Z_RTRMADP_3_TUNISIA-POLITICS-GHANNOUCHI-1713249830.jpg?resize=1920%2C1440"
//             className="card-img-top"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{props.title}</h5>
//             <p className="card-text">{props.description}</p>
//             <a href="/newsdetails" className="btn btn-primary">
//               Go somewhere
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NewsItem;
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <>
        <div className="container my-3">
          <div className=" card">
            <div>
              <span
                className="position-absolute top-0 end-0 badge fs-6 fw-normal bg-danger"
                style={{ height: "28px" }}
              >
                {source}
              </span>
              <img
                src={
                  imageUrl
                    ? imageUrl
                    : "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=186"
                }
                className="card-img-top img-fluid"
                style={{ height: "200px" }}
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className=" text-success">
                  By {author ? author : "Anonymous"} on{" "}
                  {new Date(date).toGMTString()}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default NewsItem;
