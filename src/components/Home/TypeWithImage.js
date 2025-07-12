import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const roleImages = {
  "Software Developer": "../Assets/logo.png",
  "Android Developer": "../Assets/logo.png",
  "Flutter Developer": "../Assets/logo.png",
  "Open Source Contributor": "../Assets/logo.png",
};

function TypewriterWithImage() {
  const [currentRole, setCurrentRole] = useState("Software Developer");

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
          onInit={(typewriter) => {
            const roles = Object.keys(roleImages);
            let index = 0;

            const typeNextRole = () => {
              const role = roles[index];
              setCurrentRole(role);

              typewriter
                .typeString(role.toString())
                .pauseFor(2000)
                .deleteAll()
                .callFunction(() => {
                  index = (index + 1) % roles.length;
                  typeNextRole();
                })
                .start();
            };

            typeNextRole(); // Start the typing loop
          }}
        />
      </div>
      <div>
        <img
          src={roleImages[currentRole]}
          alt={currentRole}
          className="img-fluid"
          style={{ maxHeight: "450px" }}
        />
      </div>
    </div>
  );
}

export default TypewriterWithImage;
