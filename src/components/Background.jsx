import videoBackground from "/images/background/background.mp4";

const Background = () => {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={videoBackground} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
