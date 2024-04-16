import React from "react";
import { useState, useEffect } from "react";
import Card from "./components/Card";

const NightWave = () => {
  const [nightwave, setnightwave] = useState("");

  useEffect(() => {
    fetch("https://api.warframestat.us/pc/nightwave")
      .then((response) => response.json())
      .then((json) => setnightwave(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div>
        {nightwave ? (
          nightwave.active ? (
            <div>
                <h1 className="text-primary text-3xl underline text-center font-bold">
                        Nightwave
                </h1>
                <div className="ml-5">
                    <h1 className="text-primary text-xl">
                        Started at: {nightwave.activation.split("T")[0]}
                    </h1>
                    <h1 className="text-primary text-xl">
                        Expires at: {nightwave.expiry.split("T")[0]}
                    </h1>
                    <h1 className="text-primary text-xl">
                        Time passed since start: {nightwave.startString.split("-")[1]}
                    </h1>
              </div>
              <h1 className="text-secondary text-center text-3xl">Current missions: </h1>
              <div className="grid grid-cols-3 gap-2 ml-3">
                {nightwave.activeChallenges.map((c) => (
                  <Card challenge={c}  key={c.id}/>
                ))}
              </div>
            </div>
          ) : (
            "There is no ongoing nightwave right now."
          )
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default NightWave;
