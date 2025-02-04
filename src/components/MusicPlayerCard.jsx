import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@heroui/react";
import PlayIcon from "../assets/icons/PlayIcon.svg";
import PauseIcon from "../assets/icons/PauseIcon.svg";
import NextIcon from "../assets/icons/NextIcon.svg";
import PreviousIcon from "../assets/icons/PreviousIcon.svg";
import LoopIcon from "../assets/icons/LoopIcon.svg";
import ShuffleIcon from "../assets/icons/ShuffleIcon.svg";
import VolumeIcon from "../assets/icons/VolumeIcon.svg";

export default function MusicPlayerCard() {
  const [volume, setVolume] = React.useState(90);
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="relative h-full w-full flex justify-center items-center">
      {/* Blurred Background */}
      <div
        className="absolute w-[70%] h-[70%] bg-cover bg-center blur-3xl z-0"
        style={{
          backgroundImage: `url('./src/assets/album-cover.jpg')`,
          left: "50%", // Horizontally center
          transform: "translateX(-50%)", // Adjust for exact centering
          top: "2%", // Custom vertical position (adjust as needed)
        }}
      />

      {/* Music Player Card */}
      <Card
        className="border-none bg-transparent max-w-[380px] mx-auto z-10" // Semi-transparent background
        shadow="none"
      >
        <CardBody className="flex flex-col gap-4 items-center">
          {/* Big Music Cover Art */}
          <div className="flex justify-center z-20">
            <Image
              alt="Album cover"
              className="object-cover rounded-3xl"
              height={350}
              width={350}
              src="./src/assets/album-cover.jpg"
            />
          </div>

          {/* Track Details */}
          <div className="flex flex-col w-full text-left">
            <div className="flex flex-col gap-1">
              <h3 className="font-spotifyBold text-lg text-textMain">
                Die With A Smile
              </h3>
              <p className="text-small text-textSub">Lady Gaga, Bruno Mars</p>
            </div>
          </div>

          {/* Progress Slider */}
          <div className="flex flex-col w-[350px]">
            <Slider
              aria-label="Music progress"
              classNames={{
                track: "bg-default-200",
                thumb: " h-3 after:w-2 after:h-2 after:bg-foreground",
              }}
              color="foreground"
              defaultValue={30}
              size="sm"
            />
            <div className="flex justify-between">
              <p className="text-small text-textSub">1:23</p>
              <p className="text-small text-textSub">4:32</p>
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
              onPress={() => setIsPlaying((prev) => !prev)}
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
              className="data-[hover]:bg-transparent"
              radius="full"
              variant="light"
            >
              <img src={LoopIcon} alt="Loop" className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <img src={VolumeIcon} alt="Volume" />
            <p className="text-textSub">Punisher's Party</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
