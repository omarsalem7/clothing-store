import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selector";
import { createStructuredSelector } from "reselect";
import "./Directory.scss";
function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
