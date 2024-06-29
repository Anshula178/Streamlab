import React, { useEffect, useState } from 'react';

const VideoPlayer = (props) => {
    const { videoList } = props;
    const [key, setKey] = useState(null);

    useEffect(() => {
        if (videoList) {
            const trailer = videoList.find((item) => (
                item.site === "YouTube" && item.type === "Trailer"
            ));
            if (trailer) {
                setKey(trailer.key);
            }
        }
    }, [videoList]);

    return (
        <div className="relative">
            {
                key ?
                    <iframe
                        className="aspect-video w-full"
                        src={`https://www.youtube.com/embed/${key}?rel=0&autoplay=1&mute=1`}
                        title="YouTube video"
                        allowFullScreen
                    ></iframe>
                    : "No video available"
            }
        </div>
    );
}

export default VideoPlayer;
