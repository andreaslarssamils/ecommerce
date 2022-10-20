import { Outlet } from 'react-router-dom';
import UserChatComponent from './UserChatComponent';
const RouteWithUserChatComponent = () => {
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default RouteWithUserChatComponent;
