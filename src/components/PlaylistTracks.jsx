import { Image, Button } from "@heroui/react";
import DotsIcon from "../assets/icons/DotsIcon.svg";
import SinglePlayIcon from "../assets/icons/SinglePlayIcon.svg";

const defaultTrack = {
  title: "Die With A Smile",
  artist: "Lady Gaga, Bruno Mars",
  duration: "4:32",
  image: "./src/assets/album-cover.jpg"
};

export default function PlaylistTracks({ 
  track = defaultTrack, 
  isActive, 
  onPlay, 
  onImageClick 
}) {
  // Get duration from track
  const getDuration = (track) => {
    if (track.duration) return track.duration;
    if (track.youtubeResults?.duration) return track.youtubeResults.duration;
    return defaultTrack.duration;
  };

  return (
    <div className={`flex flex-row gap-2 p-1 items-center rounded-md mb-1 ${isActive ? 'bg-[#ffffff1a]' : ''}`}>
      <Button
        isIconOnly
        className="data-[hover]:bg-transparent h-10 w-10 ml-1"
        variant="light"
        onClick={() => onPlay(track)}
      >
        <img src={SinglePlayIcon} alt="Play" className="w-5 h-5" />
      </Button>

      {/* Album cover - Now clickable to open drawer */}
      <div 
        className="cursor-pointer bg-transparent"
        onClick={() => onImageClick && onImageClick(track)}
      >
        <Image
          alt={track.title}
          className="object-cover"
          height={50}
          width={50}
          src={track.image}
        />
      </div>

      {/* Song Details */}
      <div className="flex flex-col">
        <p className="text-md font-googleRegular text-textMain">
          {track.title}
        </p>
        <p className="text-sm font-googleRegular text-textSub">
          {track.artist}
        </p>
      </div>
      <div className="flex flex-row ml-auto">
        {/* Duration */}
        <p className="text-sm mr-3 text-textSub">{getDuration(track)}</p>
        <Button
          isIconOnly
          className="data-[hover]:bg-transparent h-5 w-5 mr-3"
          variant="light"
        >
          <img src={DotsIcon} alt="Options" className="w-auto h-auto" />
        </Button>
      </div>
    </div>
  );
}
