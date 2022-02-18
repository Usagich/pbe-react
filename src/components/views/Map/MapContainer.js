import { connect } from "react-redux";
import Map from "./Map";

import { changeRegion, changeExhibition } from "../../../redux/stateRedux";

const getTextContent = ({ exhibitions }, currentLanguage) =>
  exhibitions.filter((exhibitions) => exhibitions.language === currentLanguage);

const mapStateToProps = (state) => ({
  textContent: getTextContent(state.textContent, state.state.currentLanguage),
  imageContent: state.imageContent,
  currentRegion: state.state.currentRegion,
  activeExhibition: state.state.activeExhibition,
});

const mapDispatchToProps = (dispatch) => ({
  changeRegion: (region) => dispatch(changeRegion(region)),
  changeExhibition: (ExhibitionId) => dispatch(changeExhibition(ExhibitionId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
