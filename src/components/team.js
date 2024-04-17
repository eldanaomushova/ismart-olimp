import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/team.css';
import teamdata from '../data/teamData';

const Team = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        
    };

    return (
        <div>
            <h2>Carousel Component</h2>
            <Slider {...settings}>
                {teamdata.map((d) => (
                    <div key={d.id}>
                        <img src={require(`../images/teamimg/${d.name}.jpeg`)} alt={d.name} style={{ width: "150px" }}/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Team;
