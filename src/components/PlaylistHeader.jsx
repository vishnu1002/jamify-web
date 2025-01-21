import React from "react";
import { Image, Button } from "@heroui/react";
import SpotifyIcon from "../assets/icons/SpotifyIcon.svg";
import PlayIcon from "../assets/icons/PlayIcon.svg";
import PauseIcon from "../assets/icons/PauseIcon.svg";
import ShuffleIcon from "../assets/icons/ShuffleIcon.svg";
import DownloadIcon from "../assets/icons/DownloadIcon.svg";

export default function MusicPlayerCard() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  return (
    <>
      <div className="flex flex-row gap-4 items-center">
        <Image
          alt="Album cover"
          className="object-cover rounded-3xl"
          height={200}
          width={200}
          src="./src/assets/playlist-cover.jpg"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm font-googleRegular">Playlist</p>
          <p className="text-3xl font-spotifyBold">Retrowave // Outrun</p>
          <p className="text-sm font-googleRegular">150 Songs</p>
          <Button
            isIconOnly
            className="data-[hover]:bg-transparent "
            radius="full"
            variant="ghost"
          >
            <img src={SpotifyIcon} alt="SpotifyIcon" className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="flex flex-row gap-4 py-5 items-center">
        <Button
          isIconOnly
          className="w-14 h-14 bg-white data-[hover]:bg-foreground/90"
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
          className="data-[hover]:bg-transparent "
          radius="full"
          variant="light"
        >
          <img src={ShuffleIcon} alt="ShuffleIcon" className="w-6 h-6" />
        </Button>

        <Button
          isIconOnly
          className="data-[hover]:bg-transparent "
          radius="full"
          variant="light"
        >
          <img src={DownloadIcon} alt="DownloadIcon" className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
}
