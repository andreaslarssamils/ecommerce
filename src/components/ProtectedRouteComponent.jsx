import { Outlet, Navigate } from 'react-router-dom';
const ProtectedRoutesComponent = ({ admin }) => {
  let auth = false;
  if (admin) {
    let adminAuth = true;
    // eslint-disable-next-line no-const-assign
    if (adminAuth) auth = true;
  } else {
    let userAuth = true;
    // eslint-disable-next-line no-const-assign
    if (userAuth) auth = true;
  }
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutesComponent;
