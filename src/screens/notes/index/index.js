import HeaderLogged from "../../../components/Header_Logged";
import Notes from "../../../components/Notes";
import "./styles.scss";
import { useState } from "react";

const NotesScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default NotesScreen;
