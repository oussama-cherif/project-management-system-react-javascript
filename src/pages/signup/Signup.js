import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleFileChnage = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    //check the selected file
    if (!selected) {
      setThumbnailError("please select a file");
      return;
    }

    if (!selected.type.includes("image")) {
      setThumbnailError("selected file must be an image");
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError("image file size must be less than 100KB");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayname, thumbnail);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </label>
      <label>
        <span>display name:</span>
        <input
          required
          type="text"
          value={displayname}
          onChange={(e) => setDisplayname(e.target.value)}
        ></input>
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input required type="file" onChange={handleFileChnage}></input>
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <button className="btn">Sign up</button>
    </form>
  );
}
