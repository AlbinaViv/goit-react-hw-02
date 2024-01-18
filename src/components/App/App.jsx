import { Options } from "../Options/Options";

export const App = () => {
  return (
    <div>
      <Options
        onClick={handleClick}
        // name={userData.username}
        // tag={userData.tag}
        // location={userData.location}
        // avatar={userData.avatar}
        // stats={userData.stats}
      />
    </div>
  );
};
