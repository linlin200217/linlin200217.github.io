"use client";

import { useState } from "react";

export default function ProfilePhotoToggle() {
  const [isStylized, setIsStylized] = useState(false);

  return (
    <button
      type="button"
      className="profile-photo"
      aria-label={
        isStylized
          ? "Show Jielin Feng's original portrait"
          : "Show Jielin Feng's stylized portrait"
      }
      aria-pressed={isStylized}
      onClick={() => setIsStylized((current) => !current)}
    >
      <img
        className={`profile-photo-image${isStylized ? "" : " is-visible"}`}
        src="/profile-photo.jpg"
        alt=""
        aria-hidden="true"
      />
      <img
        className={`profile-photo-image${isStylized ? " is-visible" : ""}`}
        src="/profile-photo-stylized.png"
        alt=""
        aria-hidden="true"
      />
    </button>
  );
}
