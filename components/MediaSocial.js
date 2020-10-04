import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MediaSocial = (props) => (
  <>
    <div className={'text-center'}>
      <FontAwesomeIcon icon={faFacebook} className={'cursor-pointer mb-0 mr-4 text-center text-4xl mt-12 mx-auto'}/>
      <FontAwesomeIcon icon={faInstagram} className={'cursor-pointer mb-0 mr-4 text-4xl mt-12 mx-auto'}/>
    </div>
  </>
);

export default MediaSocial