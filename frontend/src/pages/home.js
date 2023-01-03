import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ user }) {
  return (
    <div>
      {user ? <h1>You are currently logged in as {user.email}</h1> : null}
      <h1 className="text-xl font-bold bg-purple-500 mb-2 rounded-xl">
        BloomingTech
      </h1>
      <img
        className="w-90 h-90 mb-6 mx-auto"
        src="https://blogs.vmware.com/networkvirtualization/files/2020/10/632481-modern-network-vmware-blog-965x545.jpg"
        // src="https://i.ytimg.com/vi/GokN-50Jt4A/maxresdefault.jpg"
      />
      <p className="bg-#c4b5fd-500 ">
        As a company grows communication becomes its biggest challenge. The
        Mission of BloomingTech is to create a platform for Project Managers,
        Scrum Masters, and Developers allowing them to bridge the gap between
        clarity and confusion via this simple yet effective platform. This
        application will allow each team member to log their daily progress
        along with any challenges and/or suggestions consenting them to
        interrelate with other team members enabling them to overcome any
        challenges and deliver finished products within a timely manner for best
        client(s) satisfaction.
      </p>
    </div>
  );
}
