import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { storage } from '../lib/storage';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default function AdminDashboard() {
    const [issues, setIssues] = useState([]);
    const [filters, setFilters] = useState({
        status: 'all',
        type: 'all',
        date: 'all'
    });
    useEffect(() => {
        fetchIssues();
    }, [filters]);
    const fetchIssues = () => {
        let filteredIssues = storage.getIssues();
        if (filters.status !== 'all') {
            filteredIssues = filteredIssues.filter(issue => issue.status === filters.status);
        }
        if (filters.type !== 'all') {
            filteredIssues = filteredIssues.filter(issue => issue.type === filters.type);
        }
        if (filters.date !== 'all') {
            const date = new Date();
            date.setDate(date.getDate() - parseInt(filters.date));
            filteredIssues = filteredIssues.filter(issue => new Date(issue.created_at) >= date);
        }
        setIssues(filteredIssues);
    };
    const updateIssueStatus = (id, status) => {
        const issues = storage.getIssues();
        const updatedIssues = issues.map(issue => issue.id === id ? { ...issue, status } : issue);
        localStorage.setItem('issues', JSON.stringify(updatedIssues));
        fetchIssues();
    };
    const getStatusColor = (status) => {
        const colors = {
            pending: 'bg-yellow-100 text-yellow-800',
            verified: 'bg-blue-100 text-blue-800',
            'in-progress': 'bg-purple-100 text-purple-800',
            resolved: 'bg-green-100 text-green-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };
    return (_jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsx("h1", { className: "text-3xl font-bold", children: "Admin Dashboard" }), _jsxs("div", { className: "flex gap-4", children: [_jsxs("select", { className: "input", value: filters.status, onChange: (e) => setFilters({ ...filters, status: e.target.value }), children: [_jsx("option", { value: "all", children: "All Status" }), _jsx("option", { value: "pending", children: "Pending" }), _jsx("option", { value: "verified", children: "Verified" }), _jsx("option", { value: "in-progress", children: "In Progress" }), _jsx("option", { value: "resolved", children: "Resolved" })] }), _jsxs("select", { className: "input", value: filters.type, onChange: (e) => setFilters({ ...filters, type: e.target.value }), children: [_jsx("option", { value: "all", children: "All Types" }), _jsx("option", { value: "Fire Accident", children: "Fire Accident" }), _jsx("option", { value: "Flood", children: "Flood" }), _jsx("option", { value: "Road Damage", children: "Road Damage" }), _jsx("option", { value: "Street Light Issue", children: "Street Light Issue" }), _jsx("option", { value: "Hazardous Gas Leak", children: "Hazardous Gas Leak" }), _jsx("option", { value: "Others", children: "Others" })] }), _jsxs("select", { className: "input", value: filters.date, onChange: (e) => setFilters({ ...filters, date: e.target.value }), children: [_jsx("option", { value: "all", children: "All Time" }), _jsx("option", { value: "7", children: "Last 7 Days" }), _jsx("option", { value: "30", children: "Last 30 Days" }), _jsx("option", { value: "90", children: "Last 90 Days" })] })] })] }), _jsx("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Type" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Description" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Reporter" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: issues.map((issue) => (_jsxs("tr", { children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: "text-sm font-medium text-gray-900", children: issue.type }) }), _jsx("td", { className: "px-6 py-4", children: _jsx("span", { className: "text-sm text-gray-500", children: issue.description }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: "text-sm text-gray-500", children: issue.reporter_name || 'Anonymous' }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: "text-sm text-gray-500", children: format(new Date(issue.created_at), 'MMM d, yyyy') }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(issue.status)}`, children: issue.status }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium", children: _jsxs("select", { className: "input", value: issue.status, onChange: (e) => updateIssueStatus(issue.id, e.target.value), children: [_jsx("option", { value: "pending", children: "Pending" }), _jsx("option", { value: "verified", children: "Verified" }), _jsx("option", { value: "in-progress", children: "In Progress" }), _jsx("option", { value: "resolved", children: "Resolved" })] }) })] }, issue.id))) })] }) })] }));
}
