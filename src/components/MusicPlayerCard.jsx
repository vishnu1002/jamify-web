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
    <Card
      isBlurred
      className="border-none rounded-3xl bg-background/60 dark:bg-default-100/50 max-w-[380px] mx-auto"
      shadow="sm"
    >
      <CardBody className="flex flex-col gap-4 items-center">
        {/* Big Music Cover Art */}
        <div className="flex justify-center">
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
            <h3 className="font-spotifyBold text-lg text-foreground/90">Die With A Smile</h3>
            <p className="text-small text-foreground/80">Lady Gaga, Bruno Mars</p>
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
            <p className="text-small">1:23</p>
            <p className="text-small text-foreground/50">4:32</p>
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

        {/* Volume Slider */}
        <div className="flex items-center gap-2">
          <img src={VolumeIcon} alt="Volume" className="w-5 h-5" />
          <Slider
            aria-label="Volume"
            className="w-[150px]"
            hideThumb={true}
            color="foreground"
            value={volume}
            onChange={(value) => setVolume(value)}
            size="sm"
          />

        </div>
      </CardBody>
    </Card>
  );
}
