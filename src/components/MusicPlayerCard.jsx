import React, { useRef, useEffect } from "react";
import { Card, CardBody, Image, Button, Slider } from "@heroui/react";
import PlayIcon from "../assets/icons/PlayIcon.svg";
import PauseIcon from "../assets/icons/PauseIcon.svg";
import NextIcon from "../assets/icons/NextIcon.svg";
import PreviousIcon from "../assets/icons/PreviousIcon.svg";
import LoopIcon from "../assets/icons/LoopIcon.svg";
import ShuffleIcon from "../assets/icons/ShuffleIcon.svg";
import VolumeIcon from "../assets/icons/VolumeIcon.svg";

const defaultTrack = {
  title: "Die With A Smile",
  artist: "Lady Gaga, Bruno Mars",
  duration: "4:32",
  image: "./src/assets/album-cover.jpg"
};

export default function MusicPlayerCard({ 
  currentTrack = defaultTrack,
  isPlaying,
  currentTime,
  duration,
  isLooping,
  onPlayPause,
  onTimeUpdate,
  onLoopToggle,
  onDragStart,
  onDragEnd
}) {
  const [volume, setVolume] = React.useState(90);
  const audioRef = useRef(null);
  const track = currentTrack || defaultTrack;

  // Get duration from track
  const getDuration = (track) => {
    if (track.duration) return track.duration;
    if (track.youtubeResults?.duration) return track.youtubeResults.duration;
    return defaultTrack.duration;
  };

  // Format time in seconds to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Handle slider change
  const handleSliderChange = (value) => {
    const newTime = (value / 100) * duration;
    onTimeUpdate(newTime);
  };

  return (
    <div className="relative h-full w-full flex justify-center items-center">
      {/* Blurred Background */}
      <div
        className="absolute w-[80%] h-[80%] bg-cover bg-center blur-2xl z-0"
        style={{
          backgroundImage: `url('${track.image}')`,
          left: "50%",
          transform: "translateX(-50%)",
          top: "5%",
        }}
      />

      {/* Music Player Card */}
      <div className="border-none bg-transparent max-w-auto mx-auto z-10">
        <div className="flex flex-col gap-3 items-center p-3 bg-transparent">
          {/* Big Music Cover Art */}
          <div className="flex justify-center z-20 bg">
            <Image
              alt={track.title}
              className="object-cover rounded-3xl"
              height={470}
              width={470}
              src={track.image}
            />
          </div>

          {/* Track Details */}
          <div className="flex flex-col w-full text-left">
            <div className="flex flex-col gap-1">
              <h3 className="font-spotifyBold text-lg text-textMain">
                {track.title}
              </h3>
              <p className="text-small text-textSub">{track.artist}</p>
            </div>
          </div>

          {/* Progress Slider */}
          <div className="flex flex-col w-[350px]">
            <Slider
              aria-label="Music progress"
              classNames={{
                track: "bg-neutral-900",
                thumb: "h-3 after:w-2 after:h-2 after:bg-foreground",
              }}
              color="foreground"
              value={(currentTime / duration) * 100 || 0}
              onChange={handleSliderChange}
              onChangeStart={onDragStart}
              onChangeEnd={onDragEnd}
              size="sm"
            />
            <div className="flex justify-between">
              <p className="text-small text-textSub">{formatTime(currentTime)}</p>
              <p className="text-small text-textSub">{getDuration(track)}</p>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex justify-center gap-6">
            <Button
              isIconOnly
              className="data-[hover]:bg-transparent"
              radius="full"
              variant="light"
            >
              <img src={ShuffleIcon} alt="Shuffle" className="w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-transparent"
              radius="full"
              variant="light"
            >
              <img src={PreviousIcon} alt="Previous" className="w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              className="w-11 h-11 bg-white data-[hover]:bg-foreground/90"
              radius="full"
              variant="light"
              onPress={onPlayPause}
            >
              <img
                src={isPlaying ? PauseIcon : PlayIcon}
                alt={isPlaying ? "Pause" : "Play"}
                className="w-5 h-5"
              />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-transparent"
              radius="full"
              variant="light"
            >
              <img src={NextIcon} alt="Next" className="w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              className={`data-[hover]:bg-transparent ${
                isLooping 
                  ? 'border-2 border-textSub' 
                  : 'border-2 border-transparent'
              }`}
              radius="full"
              variant="light"
              onPress={onLoopToggle}
            >
              <img 
                src={LoopIcon} 
                alt="Loop" 
                className={`w-5 h-5 ${isLooping ? 'opacity-100' : 'opacity-100'}`}
              />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <img src={VolumeIcon} alt="Volume" />
            <p className="text-textSub">Punisher's Party</p>
          </div>
        </div>
      </div>
    </div>
  );
}
