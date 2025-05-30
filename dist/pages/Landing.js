import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, MapIcon, ChatBubbleLeftRightIcon, BellAlertIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';
const features = [
    {
        name: 'Smart Incident Detection',
        description: 'AI-powered system that automatically detects and categorizes emergencies for faster response.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Real-time Tracking',
        description: 'Live monitoring of incidents with precise location tracking and status updates.',
        icon: MapIcon,
    },
    {
        name: '24/7 AI Support',
        description: 'Instant assistance through our advanced chatbot with human backup support.',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Community Alerts',
        description: 'Targeted notifications to keep your community informed and safe.',
        icon: BellAlertIcon,
    },
    {
        name: 'Resource Network',
        description: 'Connect with local emergency services, volunteers, and support groups.',
        icon: UserGroupIcon,
    },
    {
        name: 'Response Analytics',
        description: 'Data-driven insights to improve emergency response times and effectiveness.',
        icon: ChartBarIcon,
    }
];
const processSteps = [
    {
        title: 'Report & Detect',
        description: 'AI-powered incident reporting and automatic emergency detection system.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Analyze & Alert',
        description: 'Smart analysis of the situation and instant alerts to relevant responders.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Respond & Track',
        description: 'Coordinated emergency response with real-time tracking and updates.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Resolve & Learn',
        description: 'Incident resolution and AI-driven insights for future prevention.',
        color: 'from-orange-500 to-yellow-500'
    }
];
export default function Landing() {
    return (_jsxs("div", { className: "bg-gray-900 text-white", children: [_jsx("div", { className: "relative isolate px-6 pt-14 lg:px-8", children: _jsx("div", { className: "mx-auto max-w-2xl py-32 sm:py-48 lg:py-56", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent", children: "Your Community's Guardian" }), _jsx("p", { className: "mt-6 text-lg leading-8 text-gray-300", children: "AI-powered emergency response system that keeps your community safe, connected, and resilient 24/7." }), _jsxs("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: [_jsx(Link, { to: "/report", className: "bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-lg transition-colors", children: "Report Emergency" }), _jsx(Link, { to: "/community", className: "bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors", children: "Join Community" })] })] }) }) }), _jsx("div", { className: "py-24 bg-gray-800/50", children: _jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [_jsxs("div", { className: "mx-auto max-w-2xl lg:text-center mb-16", children: [_jsx("h2", { className: "text-base font-semibold leading-7 text-primary-400", children: "How It Works" }), _jsx("p", { className: "mt-2 text-3xl font-bold tracking-tight", children: "Intelligent Emergency Response" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: processSteps.map((step, index) => (_jsxs("div", { className: "relative group", children: [_jsx("div", { className: `absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300` }), _jsxs("div", { className: "relative bg-gray-800 p-6 rounded-2xl h-full border border-gray-700 group-hover:border-transparent transition-colors", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600/10 text-primary-400 font-bold", children: index + 1 }), _jsx("h3", { className: "font-semibold text-xl", children: step.title })] }), _jsx("p", { className: "text-gray-400", children: step.description })] })] }, step.title))) })] }) }), _jsx("div", { className: "py-24", children: _jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [_jsxs("div", { className: "mx-auto max-w-2xl lg:text-center mb-16", children: [_jsx("h2", { className: "text-base font-semibold leading-7 text-primary-400", children: "Core Features" }), _jsx("p", { className: "mt-2 text-3xl font-bold tracking-tight", children: "Advanced Protection System" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature) => (_jsxs("div", { className: "relative group", children: [_jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), _jsxs("div", { className: "relative bg-gray-800 p-6 rounded-2xl h-full border border-gray-700 group-hover:border-transparent transition-colors", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx(feature.icon, { className: "h-6 w-6 text-primary-400" }), _jsx("h3", { className: "font-semibold text-lg", children: feature.name })] }), _jsx("p", { className: "text-gray-400", children: feature.description })] })] }, feature.name))) })] }) })] }));
}
