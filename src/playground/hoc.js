import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  const wrapper = props => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  );

  wrapper.displayName = `withAdminWarning(${WrappedComponent.displayName ||
    WrappedComponent.name})`;

  return wrapper;
};

const requireAuthentication = WrappedComponent => {
  const wrapper = props =>
    props.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Login required to see this.</p>
    );

  wrapper.displayName = `requireAuthentication(${WrappedComponent.displayName ||
    WrappedComponent.name})`;

  return wrapper;
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.getElementById('app')
);

// ReactDOM.render(
//   <AdminInfo isAdmin info="These are the details" />,
//   document.getElementById('app')
// );
