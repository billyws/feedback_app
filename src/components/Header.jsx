import PropTypes from "prop-types";

function Header({ title, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "User Satisfaction Survey",
  bgColor: "#f2f2f2",
  textColor: "#333",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
