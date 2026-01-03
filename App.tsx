import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { Landing } from './pages/Landing';
import { ShopHome } from './pages/ShopHome';
import { ProductListing } from './pages/ProductListing';
import { ProductDetail } from './pages/ProductDetail';
import { Account } from './pages/dashboard/Account';
import { Installments } from './pages/dashboard/Installments';
import { Orders } from './pages/dashboard/Orders';
import { B2B } from './pages/dashboard/B2B';
import { Login } from './pages/auth/Login';
import { Cart } from './pages/Cart';
import { CreditWizard } from './pages/CreditWizard';

// ScrollToTop component to reset scroll on route change
const ScrollToTopBehavior = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main App Layout Wrapper
const AppContent = () => {
  return (
    <>
      <ScrollToTopBehavior />
      <Routes>
        {/* Public Routes with AppShell */}
        <Route path="/" element={<AppShell><Landing /></AppShell>} />
        <Route path="/shop" element={<AppShell><ShopHome /></AppShell>} />
        <Route path="/shop/:category" element={<AppShell><ProductListing /></AppShell>} />
        <Route path="/product/:id" element={<AppShell><ProductDetail /></AppShell>} />
        
        {/* Functional Pages */}
        <Route path="/cart" element={<AppShell><Cart /></AppShell>} />
        
        {/* Auth & Onboarding (Custom Layouts) */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/credit-guide" element={<CreditWizard />} />

        {/* Dashboard Routes (Self-contained layout) */}
        <Route path="/account" element={<Account />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/installments" element={<Installments />} />
        <Route path="/b2b" element={<B2B />} />
        
        {/* Fallback */}
        <Route path="*" element={<AppShell><div className="p-20 text-center">Page Not Found</div></AppShell>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;