import { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Banner = ({ api_url }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [banner, setBanner] = useState({});
  const [banner2, setBanner2] = useState({});

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(`${api_url}The Equalizer 3`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setBanner(data.description[0]);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBanner();
  }, [api_url]);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(
          `${api_url}Indiana Jones and the Dial of Destiny`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setBanner2(data.description[0]);
        console.log(banner);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBanner();
  }, [api_url]);

  return (
    <div className="featured h-[70vmin]">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        fillParent={true}
      >
        <div
          className="featured-img"
          style={{
            background: `url(${banner["#IMG_POSTER"]}) no-repeat center top / cover`,
          }}
        >
          <a href="#" className="text-5xl font-bold">
            {banner["#TITLE"]}
          </a>
          <p className="text-3xl">{banner["#YEAR"]}</p>
          <p>{banner["#ACTORS"]}</p>
        </div>
        <div
          className="featured-img"
          style={{
            background: `url(${banner2["#IMG_POSTER"]}) no-repeat center / cover`,
          }}
        >
          <a href="#" className="text-5xl font-bold ">
            {banner2["#TITLE"]}
          </a>
          <p className="text-3xl">{banner2["#YEAR"]}</p>
          <p>{banner2["#ACTORS"]}</p>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
