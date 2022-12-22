import React, { useState } from "react";

export default function ProgressTracker() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <div className="mb-10">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left">Title</th>
              <th className="text-left">Date</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left">Log from cool project</td>
              <td className="text-left">12/22/22</td>
              <td className="text-left flex gap-x-2">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td className="text-left">Log from cool project</td>
              <td className="text-left">12/22/22</td>
              <td className="text-left flex gap-x-2">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td className="text-left">Log from cool project</td>
              <td className="text-left">12/22/22</td>
              <td className="text-left flex gap-x-2">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td className="text-left">Log from cool project</td>
              <td className="text-left">12/22/22</td>
              <td className="text-left flex gap-x-2">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col text-start p-2 max-w-sm gap-y-2">
        <div className="flex gap-x-4 items-center">
          <label>Title</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border border-black rounded-xl p-2"
          />
        </div>
        <div className="flex gap-x-4 items-center">
          <label>Date</label>
          <input type="date" className="border border-black rounded-xl p-2" />
        </div>
        <div className="flex gap-x-4 items-center">
          <label>URL</label>
          <input className="border border-black rounded-xl p-2" />
        </div>
        <div className="flex gap-x-4 items-center">
          <label>Notes</label>
          <textarea className="border border-black rounded-xl p-2" />
        </div>
        <div className="flex gap-x-4 items-center">
          <label>Challenges</label>
          <textarea className="border border-black rounded-xl p-2" />
        </div>

        <button
          onClick={() => {
            fetch("localhost:3001/logs", {
              method: "POST",
              headers: {
                'content-type': "application/json"
              },
              body: JSON.stringify({ title: title }),
            });
          }}
          className="bg-blue-500 active:bg-blue-600 rounded-xl p-2 text-white mt-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
