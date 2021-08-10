// export default Navbar;
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("null");
  const handleItemClick = (e, { name }) => setActiveItem("\null");
  const token = localStorage.getItem("auth_token");
  const history = useHistory();
  function logout() {
    localStorage.clear();
    // window.assign("/");
    history.push("/");
    window.location.reload();
  }

  return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          {token ? (
            <>
              <NavLink to="/">
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={handleItemClick}
                />
              </NavLink>
              <NavLink to="/projects">
                <Menu.Item
                  name="projects"
                  active={activeItem === "projects"}
                  onClick={handleItemClick}
                />
              </NavLink>
              <NavLink to="/campaign">
                <Menu.Item
                  name="campaigns"
                  active={activeItem === "campaigns"}
                  onClick={handleItemClick}
                />
              </NavLink>
              <Menu.Item name="logout" onClick={logout} />
            </>
          ) : (
            <>
              <NavLink to="/">
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={handleItemClick}
                />
              </NavLink>
              <NavLink to="/login">
                <Menu.Item
                  name="login"
                  active={activeItem === "login"}
                  onClick={handleItemClick}
                />
              </NavLink>
            </>
          )}
        </Menu>
      </Segment>
    </div>
  );
};

export default Navbar;
