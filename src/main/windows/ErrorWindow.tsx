import Image from "next/image";
import React from "react";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Checkbox,
  Fieldset,
} from "react95";
import Icon from "../../commonComponents/Icon";
//import folder from '/public/utils/assets/folder.png'

const iconStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const CustomWindow = ({ title, error }) => {
  const [open, setOpen] = React.useState(true);

  const toggleFolder = () => {
    setOpen(!open);
  };

  if (!open)
    return (
      <Icon
        description={title}
        onClick={toggleFolder}
        icon={"/images/folder.png"}
        styles={iconStyles}
      />
    );

  return (
    <Window
      style={{
        width: "80%",
        maxWidth: 290,
      }}
      shadow={false}
    >
      <WindowHeader
        className="flex items-center space-between"
      >
        <span>{title}</span>
        <Button onClick={toggleFolder} size={"sm"} square>
          <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
            x
          </span>
        </Button>
      </WindowHeader>
      <Toolbar>
        <Button variant="menu" size="sm">
          File
        </Button>
        <Button variant="menu" size="sm">
          Edit
        </Button>
        <Button variant="menu" size="sm" disabled>
          Save
        </Button>
      </Toolbar>
      <WindowContent className="flex flex-col text-center justify-center">
        <div className="flex items-center"><Image src="/images/error.png" width={34} height={34}/><span className="ml-4">{error}</span></div>
      </WindowContent>
    </Window>
  );
};

export default CustomWindow;
