import React from "react";

import styles from "./styles.module.css";

interface YoutubeEmbedProps {
  videoId: string;
}

const YoutubeEmbed = ({ videoId }: YoutubeEmbedProps) => (
  <div className={styles.youtubeEmbed}>
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?rel=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default YoutubeEmbed;
