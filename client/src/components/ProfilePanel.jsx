import avatarIcon from "../assets/img/avatar.png";
import logoutIcon from "../assets/img/logout.png";

function ProfilePanel() {
  return (
    <nav className="bg-blue-400 m-0 w-60 h-full flex flex-col justify-between mt-12 pt-10 px-14 fixed top-0 left-0">
      <div className="flex flex-col items-center">
          <img src={avatarIcon} className="h-30 rounded-full bg-white" />
        <div className="flex justify-between">
          <span className="mx-5 text-white font-bold">Seguidos</span>
          <span className="mx-5 text-white font-bold">Seguidores</span>
        </div>
      </div>
      <div className="fixed bottom-0 left-44 mx-5 my-2">
      <span className="mx-5 text-white font-bold text-xs">
      <img src={logoutIcon} className="h-4 w-4 hover:scale-110" href="#"/>
      </span>
      </div>
    </nav>
  );
}

export default ProfilePanel;
