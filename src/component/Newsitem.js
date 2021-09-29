import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, infoText, imgUrl, NewsUrl, author, time, source} = this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex : "1",left : "90%"}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title + "..."}</h5>
            <p className="card-text">{infoText + "..."}</p>
            <p className="card-text">
              <small className="text-muted">
                Author - {author ? author : "Unknown"}, Posted On -{" "}
                {new Date(time).toGMTString()}
              </small>
            </p>
            <a
              href={NewsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
