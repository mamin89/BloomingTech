import React from "react";
import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 underline">Resources</h1>
      <ul className="text-left pl-4 list-disc">
        <li className="text-blue-500 py-1">
          <a href="https://www.youtube.com/watch?v=NmC0GtHj_4w">
            https://www.youtube.com/watch?v=NmC0GtHj_4w
          </a>
        </li>
        <li className="text-blue-500 py-1">
          <a href="https://kleki.com/">Project Planning</a>
        </li>
        <li className="text-blue-500 py-1">
          <a href="https://tailwind-elements.com/docs/standard/components/tables/">
            Styling
          </a>
        </li>
        <li className="text-blue-500 py-1">
          <a href="https://expressjs.com/en/starter/hello-world.html">
            Express{" "}
          </a>
        </li>
        <li className="text-blue-500 py-1">
          <a href="https://www.w3schools.com/html/html_scripts.asp">
            W3schools
          </a>
        </li>
        <li className="text-blue-500 py-1">
          <a href="https://www.postman.com/">Backend Help</a>
        </li>
        <li className="text-blue-500 py-1">
          <a href="https://www.mongodb.com/atlas/database">MongoDB</a>
        </li>
        <li className="text-blue-500 py-1">
          <a href="https://mongoosejs.com/docs/guide.html">Mongo Docs Guide</a>
        </li>
      </ul>
    </div>
  );
}
