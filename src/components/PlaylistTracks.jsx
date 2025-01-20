import { Image, Button } from "@heroui/react";
import DotsIcon from "../assets/icons/DotsIcon.svg";
import SinglePlayIcon from "../assets/icons/SinglePlayIcon.svg";

export default function MusicPlayerCard() {
  return (
    <>
      <div className="flex flex-row gap-2 p-1 items-center bg-stone-700 rounded-md mb-1">
        <Button
          isIconOnly
          className="data-[hover]:bg-transparent h-10 w-10 ml-1"
          variant="light"
        >
          <img src={SinglePlayIcon} alt="SpotifyIcon" className="w-5 h-5" />
        </Button>

        <Image
          alt="Album cover"
          className="object-cover"
          height={50}
          width={50}
          src="./src/assets/album-cover.jpg"
        />

        <div className="flex flex-col">
          <p className="text-md font-googleRegular">Die With A Smile</p>
          <p className="text-sm font-googleRegular">Lady Gaga, Bruno Mars</p>
        </div>
        <div className="flex flex-row ml-auto">
          <p className="text-sm mr-3">4:32</p>
          <Button
            isIconOnly
            className="data-[hover]:bg-transparent h-5 w-5 mr-3"
            variant="light"
          >
            <img src={DotsIcon} alt="SpotifyIcon" className="w-auto h-auto" />
          </Button>
        </div>
      </div>
    </>
  );
}
