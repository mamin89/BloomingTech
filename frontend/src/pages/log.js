import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Log() {
  const { id } = useParams();
  const [log, setLog] = useState();
  useEffect(() => {
    fetch(`/logs/${id}`)
      .then((resp) => resp.json())
      .then((log) => setLog(log));
  }, []);
  return (
    <div>
      <div class="text-xl text-center">{log?.title}</div>
      <div class="text-md text-center">{log?.date}</div>
      <div class="text-md text-center">{log?.url}</div>
      <div class="text-md text-center">{log?.notes}</div>
      <div class="text-md text-center">{log?.challenges}</div>
    </div>
  );
}
