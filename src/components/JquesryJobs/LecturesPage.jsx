import React, { Component } from "react";
import { Link } from "react-router-dom";

class LecturesPage extends Component {
  render() {
    const { lectures, courseName } = this.props;

    return (
      <div>
        <h4 className=" text-center">List of All Lectures </h4>
        <ul>
          {lectures.map((lecture) => (
            <li key={lecture.id}>
              <Link to={`/lecture/${courseName}/${lecture.id}`}>{`Lecture id: ${lecture.id} - ${lecture.topic}`}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LecturesPage;
