import React, { useState, useEffect } from "react";
const API_HOST = "http://localhost:3001";

export default function ProgressTracker() {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [challenges, setChallenges] = useState("");

  const [logs, setLogs] = useState([]);

  const clearForm = () => {
    setId(null);
    setTitle("");
    setDate("");
    setUrl("");
    setNotes("");
    setChallenges("");
  };

  const destroy = (id) => {
    return fetch(`${API_HOST}/logs/${id}`, {
      method: "DELETE",
    }).then(() => fetchAll());
  };

  const fetchAll = () => {
    return fetch(`${API_HOST}/logs`)
      .then((resp) => resp.json())
      .then((logs) => setLogs(logs));
  };

  const edit = (params) => {
    const { _id, title, date, url, notes, challenges } = params;
    setId(_id);
    setTitle(title);
    setDate(date);
    setUrl(url);
    setNotes(notes);
    setChallenges(challenges);
  };

  const update = (params) => {
    return fetch(`${API_HOST}/logs/${params._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(() => fetchAll())
      .then(() => clearForm());
  };

  const create = (params) => {
    return fetch(`${API_HOST}/logs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(() => fetchAll())
      .then(() => clearForm());
  };

  const createOrUpdate = (params) => {
    if (!params._id) {
      create(params);
    } else {
      update(params);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

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
            {logs.map((log) => (
              <tr>
                <td className="text-left">{log.title}</td>
                <td className="text-left">{log.date}</td>
                <td className="text-left flex gap-x-2">
                  <button onClick={() => edit(log)}>Edit</button>
                  <button onClick={() => destroy(log._id)}>Delete</button>
                </td>
              </tr>
            ))}
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
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="border border-black rounded-xl p-2"
          />
        </div>
        <div className="flex gap-x-4 items-center">
          <label>URL</label>
          <input
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            className="border border-black rounded-xl p-2"
          />
        </div>
        <div className="flex gap-x-4 items-center">
          <label>Notes</label>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            className="border border-black rounded-xl p-2"
          />
        </div>
        <div className="flex gap-x-4 items-center">
          <label>Challenges</label>
          <textarea
            value={challenges}
            onChange={(event) => setChallenges(event.target.value)}
            className="border border-black rounded-xl p-2"
          />
        </div>

        <button
          onClick={() => {
            createOrUpdate({ _id: id, title, date, url, notes, challenges });
          }}
          className="bg-blue-500 active:bg-blue-600 rounded-xl p-2 text-white mt-4"
        >
          Save
        </button>
      </div>
    </div>
  );
}
