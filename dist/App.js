import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import ReportIssue from './pages/ReportIssue';
import AdminDashboard from './pages/AdminDashboard';
import CommunityHub from './pages/CommunityHub';
import ChatSupport from './pages/ChatSupport';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Landing, {}) }), _jsx(Route, { path: "/report", element: _jsx(ReportIssue, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminDashboard, {}) }), _jsx(Route, { path: "/community", element: _jsx(CommunityHub, {}) }), _jsx(Route, { path: "/chat", element: _jsx(ChatSupport, {}) })] }), _jsx(Toaster, { position: "bottom-right" })] }) }));
}
export default App;
