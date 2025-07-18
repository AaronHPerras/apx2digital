import React from 'react';
import { useAuth } from '../hooks/useAuth';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
            <h1 className="h2">APX2Digital Dashboard</h1>
            <button 
              onClick={handleLogout}
              className="btn btn-outline-secondary"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Welcome to APX2Digital!</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Hello, {user?.firstName} {user?.lastName}! You are successfully logged in.
              </p>
              <p className="text-muted">
                Email: {user?.email}
              </p>
              <p className="text-muted small">
                Account created: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </p>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="card-title mb-0">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-primary w-100 mb-2">
                    <i className="bi bi-person me-2"></i>
                    Update Profile
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-outline-primary w-100 mb-2">
                    <i className="bi bi-lock me-2"></i>
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Account Info</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <strong>Status:</strong>{' '}
                  <span className="badge bg-success">Active</span>
                </li>
                <li className="mb-2">
                  <strong>Role:</strong>{' '}
                  {user?.roles && user.roles.length > 0 ? (
                    user.roles.map((role, index) => (
                      <span key={index} className="badge bg-primary me-1">
                        {role}
                      </span>
                    ))
                  ) : (
                    <span className="text-muted">User</span>
                  )}
                </li>
                <li className="mb-2">
                  <strong>ID:</strong>{' '}
                  <code className="small">{user?.id}</code>
                </li>
              </ul>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-header">
              <h5 className="card-title mb-0">Recent Activity</h5>
            </div>
            <div className="card-body">
              <p className="text-muted small">
                No recent activity to display.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
