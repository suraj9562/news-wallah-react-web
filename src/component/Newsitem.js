import React, { Component } from "react";
import {
    Link
  } from "react-router-dom";

export class Newsitem extends Component {
  render() {
    let { title, infoText, imgUrl, NewsUrl, author, time, source} = this.props;
    return (
      <div>
        <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex : "1",left : "90%"}}>
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title + "..."}</h5>
            <p className="card-text">{infoText + "..."}</p>
            <p class="card-text">
              <small class="text-muted">
                Author - {author ? author : "Unknown"}, Posted On -{" "}
                {new Date(time).toGMTString()}
              </small>
            </p>
            <Link
              href={NewsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
