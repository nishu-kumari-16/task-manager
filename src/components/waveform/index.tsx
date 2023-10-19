import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import WaveSurfer from "wavesurfer.js";
import { useTheme } from "@mui/material";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import { ReactComponent as Pause } from "../../assets/icons/pause.svg";

const Waveform = ({ audio, barColor }: any) => {
  const containerRef = useRef<any>();
  const waveSurferRef = useRef<any>({
    isPlaying: () => false,
  });
  const [isPlaying, toggleIsPlaying] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      barWidth: 2,
      barHeight: 10,
      cursorWidth: 0,
      height: 40,
      barGap: 3,
      width: "100%",
      progressColor: barColor || theme.palette.royalBlue,
      waveColor: theme.palette.iron,
    });
    waveSurfer.load(audio);
    waveSurfer.on("ready", () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio, theme.palette.iron, barColor, theme.palette.royalBlue]);

  return (
    <div className="flex center gap-1">
      <button
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
        className="w-[40px] h-[40px] border-none p-[0] flex items-center justify-center"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>
      <div ref={containerRef} className="flex-1 min-w-[6rem]" />
    </div>
  );
};

Waveform.propTypes = {
  audio: PropTypes.string.isRequired,
  barColor: PropTypes.string,
};

export default Waveform;
