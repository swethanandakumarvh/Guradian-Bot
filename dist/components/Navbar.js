import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Report Issue', href: '/report' },
    { name: 'Community Hub', href: '/community' },
    { name: 'Chat Support', href: '/chat' },
];
export default function Navbar() {
    return (_jsx(Disclosure, { as: "nav", className: "bg-gray-900 border-b border-gray-800", children: ({ open }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex h-16 justify-between", children: [_jsxs("div", { className: "flex", children: [_jsx(Link, { to: "/", className: "flex flex-shrink-0 items-center", children: _jsx("span", { className: "text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent", children: "GuardianBot" }) }), _jsx("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: navigation.map((item) => (_jsx(Link, { to: item.href, className: "inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white hover:border-primary-500 transition-colors", children: item.name }, item.name))) })] }), _jsx("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: _jsx(Link, { to: "/admin", className: "bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg transition-colors", children: "Admin Login" }) }), _jsx("div", { className: "-mr-2 flex items-center sm:hidden", children: _jsxs(Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-white", children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), open ? (_jsx(XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" })) : (_jsx(Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }))] }) })] }) }), _jsx(Disclosure.Panel, { className: "sm:hidden", children: _jsxs("div", { className: "space-y-1 pb-3 pt-2", children: [navigation.map((item) => (_jsx(Link, { to: item.href, className: "block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white", children: item.name }, item.name))), _jsx(Link, { to: "/admin", className: "block px-3 py-2 text-base font-medium text-primary-400 hover:bg-gray-800", children: "Admin Login" })] }) })] })) }));
}
