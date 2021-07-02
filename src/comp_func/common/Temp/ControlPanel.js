import React from 'react';
import { Link } from 'react-router-dom';
// from routes
import { ROUTES_REACT } from '../../../routes';

export const ControlPanel = () => {
  const { dashboard, users_create } = ROUTES_REACT;
  return (
    <div>
      <Link to={dashboard}>
        <button type="button" className="btn btn-otln-green-00b371 pd-TB1LR3 fs-16 ls-12">
          Dashboard
        </button>
      </Link>
      <Link to={users_create}>
        <button type="button" className="btn btn-otln-green-00b371 pd-TB1LR3 fs-16 ls-12">
          Profile Create
        </button>
      </Link>
    </div>
  );
};

// export default ControlPanel;
