import React from 'react';

function AIVideos() {
  const videos = [
    {
      title: "AG1 Italy Ad",
      url: "https://res.cloudinary.com/djklousbo/video/upload/v1768597644/ag1_ad_bwllvl.mp4",
      aspectRatio: "16/9"
    },
    {
      title: "World Cup Ad",
      url: "https://res.cloudinary.com/djklousbo/video/upload/v1768068961/worldcup_grinpy.mp4",
      aspectRatio: "9/16"
    },
    {
      title: "Morning Routine",
      url: "https://res.cloudinary.com/djklousbo/video/upload/v1768068920/202601101649_obkxdl.mp4",
      aspectRatio: "9/16"
    },
    {
      title: "Nutricost Ad",
      url: "https://res.cloudinary.com/djklousbo/video/upload/v1768069108/nutricost_ad.mp4_mltqaa.mp4",
      aspectRatio: "9/16"
    },
    {
      title: "Gruns Creatine Ad",
      url: "https://res.cloudinary.com/djklousbo/video/upload/v1768081391/Gruns_Creatine_Ad_hi7ilb.mp4",
      aspectRatio: "9/16"
    },
    {
      title: "Training Rocky",
      url: "https://res.cloudinary.com/djklousbo/video/upload/v1768083879/202601102135_xzw54s.mp4",
      aspectRatio: "9/16"
    },
    {
      title: "Clarifie Supplement Ad",
      url: "https://res.cloudinary.com/djklousbo/video/upload/v1768225368/clarifie_ad_2_tcbl6n.mp4",
      aspectRatio: "9/16"
    }
  ];

  return (
    <div className="ai-videos-gallery">
      <div className="video-grid-mini">
        {videos.map((video, index) => (
          <div key={index} className={`video-card-mini ${video.aspectRatio === '16/9' ? 'landscape' : 'portrait'}`}>
            <div className="video-wrapper" style={{ aspectRatio: video.aspectRatio }}>
              <video 
                src={video.url} 
                controls 
                playsInline 
                preload="metadata"
              />
            </div>
            <div className="video-mini-info">
              <span>{video.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIVideos;
