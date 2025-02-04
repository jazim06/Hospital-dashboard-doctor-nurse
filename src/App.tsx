import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PatientDetails from './pages/PatientDetails';
import AdminDashboard from './pages/AdminDashboard';
import NurseDashboard from './pages/NurseDashboard';
import PatientList from './pages/PatientList';
import NotificationsPage from './pages/NotificationsPage';
import MedicationsPage from './pages/MedicationsPage';
import Sidebar from './components/Sidebar';

function App() {
  const { user } = useAuth();

  // Protected Route wrapper
  const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/" replace />;
    }

    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          {children}
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Doctor Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['doctor']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Nurse Routes */}
      <Route
        path="/nurse"
        element={
          <ProtectedRoute allowedRoles={['nurse']}>
            <NurseDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/nurse/patients"
        element={
          <ProtectedRoute allowedRoles={['nurse']}>
            <PatientList />
          </ProtectedRoute>
        }
      />

      {/* Shared Routes */}
      <Route
        path="/patient/:id"
        element={
          <ProtectedRoute allowedRoles={['doctor', 'nurse']}>
            <PatientDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/medications"
        element={
          <ProtectedRoute allowedRoles={['doctor', 'nurse']}>
            <MedicationsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notifications"
        element={
          <ProtectedRoute allowedRoles={['doctor', 'nurse']}>
            <NotificationsPage />
          </ProtectedRoute>
        }
      />

      {/* Default Route */}
      <Route
        path="/"
        element={
          user ? (
            user.role === 'doctor' ? (
              <Navigate to="/admin" replace />
            ) : (
              <Navigate to="/nurse" replace />
            )
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />


        <Route
          path="/"
          element={
            <Home addToCart={addToCart} selectedCategory={selectedCategory}
            />
          }
        />
        <Route path="/add_product" element={<AddProduct />} />
        <Route path="/product" element={<Product  />} />
        <Route path="product/:id" element={<Product  />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/update/:id" element={<UpdateProduct />} />
      </Routes>
  );






}

export default App;