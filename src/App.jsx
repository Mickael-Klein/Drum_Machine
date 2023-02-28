import React, { useEffect, useState } from "react";
import "./App.scss";
import Cev_H2 from "./Assets/AudioSamples/Cev_H2.mp3";
import Dsc_Oh from "./Assets/AudioSamples/Dsc_Oh.mp3";
import Heater1 from "./Assets/AudioSamples/Heater-1.mp3";
import Heater2 from "./Assets/AudioSamples/Heater-2.mp3";
import Heater3 from "./Assets/AudioSamples/Heater-3.mp3";
import Heater41 from "./Assets/AudioSamples/Heater-4_1.mp3";
import Heater6 from "./Assets/AudioSamples/Heater-6.mp3";
import KicknHat from "./Assets/AudioSamples/Kick_n_Hat.mp3";
import RP4KICK1 from "./Assets/AudioSamples/RP4_KICK_1.mp3";

function App() {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event) => {
        event.stopImmediatePropagation();
        const keyName = event.key.toUpperCase();
        let availableKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
        if (!availableKeys.includes(keyName)) {
          return;
        }
        const targetAudio = document.getElementById(`${keyName}`);
        const buttonId = targetAudio.parentElement.id;
        console.log(buttonId);
        setDisplay(buttonId);
        targetAudio.play();
      },
      false
    );
  }, [power]);

  useEffect(() => {
    const buttons = document.querySelectorAll(".drum-pad");
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        setDisplay(e.target.id);
        let clickedBtn = e.target;
        let audio = clickedBtn.querySelector("audio");
        audio.play();
      });
    });
  }, [power]);

  useEffect(() => {
    let controlPower = document.querySelector(".control");
    controlPower.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      setPower((prev) => !prev);
      console.log("click");
    });
  }, []);

  const clickPower = () => {
    setPower((prev) => !prev);
  };

  return (
    <>
      <div className="wrapper">
        <div id="drum-machine" className="container">
          <div className="container__pads">
            <button className="drum-pad" id="Heater1">
              Q
              <audio
                src={power ? Heater1 : "#"}
                className="clip"
                id="Q"
              ></audio>
            </button>
            <button className="drum-pad" id="Heater2">
              W
              <audio
                src={power ? Heater2 : "#"}
                className="clip"
                id="W"
              ></audio>
            </button>
            <button className="drum-pad" id="Heater3">
              E
              <audio
                src={power ? Heater3 : "#"}
                className="clip"
                id="E"
              ></audio>
            </button>
            <button className="drum-pad" id="Heater4">
              A
              <audio
                src={power ? Heater41 : "#"}
                className="clip"
                id="A"
              ></audio>
            </button>
            <button className="drum-pad" id="Clap">
              S
              <audio
                src={power ? Heater6 : "#"}
                className="clip"
                id="S"
              ></audio>
            </button>
            <button className="drum-pad" id="Open-HH">
              D
              <audio src={power ? Dsc_Oh : "#"} className="clip" id="D"></audio>
            </button>
            <button className="drum-pad" id="Kick-n'-Hat">
              Z
              <audio
                src={power ? KicknHat : "#"}
                className="clip"
                id="Z"
              ></audio>
            </button>
            <button className="drum-pad" id="Kick">
              X
              <audio
                src={power ? RP4KICK1 : "#"}
                className="clip"
                id="X"
              ></audio>
            </button>
            <button className="drum-pad" id="Closed-HH">
              C
              <audio src={power ? Cev_H2 : "#"} className="clip" id="C"></audio>
            </button>
          </div>
          <div className="container__controls">
            <div className="powerHandler">
              <div className="title">Power</div>
              <div className="control" onClick={() => clickPower()}>
                <div
                  className={
                    power
                      ? "control__box control__box--on"
                      : "control__box control__box--off"
                  }
                ></div>
              </div>
            </div>
            <div id="display">{display}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
