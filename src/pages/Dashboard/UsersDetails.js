import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function UsersDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);

  useEffect(() => {
    if (!user?.id || user.id !== Number(id)) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id, user]);

  return (
    <div className="user">
      <h2>Kullanıcı Detayları</h2>
      <pre>{user && JSON.stringify(user, null, 2)}</pre>
      <Link to={`/users/${Number(id) + 1}`} className="next-user">
        Sonraki Kullanıcı
      </Link>
    </div>
  );
}

export default UsersDetails;
