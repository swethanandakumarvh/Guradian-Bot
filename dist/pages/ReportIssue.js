import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { MapPinIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Map, { Marker } from 'react-map-gl';
import toast from 'react-hot-toast';
import { storage } from '../lib/storage';
const issueTypes = [
    'Fire Accident',
    'Flood',
    'Road Damage',
    'Street Light Issue',
    'Hazardous Gas Leak',
    'Others'
];
export default function ReportIssue() {
    const [formData, setFormData] = useState({
        issueType: '',
        description: '',
        name: '',
        phone: '',
        location: { lat: 12.9716, lng: 77.5946 }
    });
    const [files, setFiles] = useState([]);
    const [viewport, setViewport] = useState({
        latitude: 12.9716,
        longitude: 77.5946,
        zoom: 12
    });
    const onDrop = useCallback(acceptedFiles => {
        setFiles(prev => [...prev, ...acceptedFiles]);
    }, []);
    const removeFile = (index) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
            'video/*': ['.mp4', '.mov']
        },
        maxFiles: 3
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            storage.saveIssue({
                type: formData.issueType,
                description: formData.description,
                reporter_name: formData.name,
                reporter_phone: formData.phone,
                location: `${formData.location.lng},${formData.location.lat}`
            });
            toast.success('Issue reported successfully!');
            setFormData({
                issueType: '',
                description: '',
                name: '',
                phone: '',
                location: { lat: 12.9716, lng: 77.5946 }
            });
            setFiles([]);
        }
        catch (error) {
            toast.error('Failed to report issue. Please try again.');
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-900 text-gray-100", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 py-8", children: _jsxs("div", { className: "bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700", children: [_jsx("h1", { className: "text-3xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent", children: "Report an Issue" }), _jsx("p", { className: "text-gray-400 mb-8", children: "Help us keep your community safe by reporting any emergencies or concerns." }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: "Issue Type" }), _jsxs("select", { className: "w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500", value: formData.issueType, onChange: (e) => setFormData({ ...formData, issueType: e.target.value }), required: true, children: [_jsx("option", { value: "", children: "Select an issue type" }), issueTypes.map(type => (_jsx("option", { value: type, children: type }, type)))] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: "Description" }), _jsx("textarea", { className: "w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500", rows: 4, value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), required: true, placeholder: "Please describe the situation in detail..." })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: "Upload Photos/Videos" }), _jsxs("div", { ...getRootProps(), className: "border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer hover:border-primary-500 transition-colors", children: [_jsx("input", { ...getInputProps() }), _jsx(PhotoIcon, { className: "h-12 w-12 mx-auto text-gray-500 mb-4" }), _jsx("p", { className: "text-gray-400", children: "Drag & drop files here, or click to select" }), _jsx("p", { className: "text-sm text-gray-500 mt-2", children: "Supported formats: JPEG, PNG, MP4, MOV" })] }), files.length > 0 && (_jsx("div", { className: "mt-4 space-y-2", children: files.map((file, index) => (_jsxs("div", { className: "flex items-center justify-between bg-gray-700 rounded-lg p-3", children: [_jsx("span", { className: "text-sm text-gray-300", children: file.name }), _jsx("button", { type: "button", onClick: () => removeFile(index), className: "text-gray-400 hover:text-white", children: _jsx(XMarkIcon, { className: "h-5 w-5" }) })] }, index))) }))] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: "Your Name (optional)" }), _jsx("input", { type: "text", className: "w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), placeholder: "Enter your name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: "Phone Number (optional)" }), _jsx("input", { type: "tel", className: "w-full bg-gray-700 border border-gray-600 text-gray-100 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), placeholder: "Enter your phone number" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-2", children: "Location" }), _jsx("div", { className: "h-64 rounded-lg overflow-hidden", children: _jsx(Map, { ...viewport, onMove: evt => setViewport(evt.viewport), mapStyle: "mapbox://styles/mapbox/dark-v10", mapboxAccessToken: import.meta.env.VITE_MAPBOX_TOKEN, children: _jsx(Marker, { latitude: formData.location.lat, longitude: formData.location.lng, draggable: true, onDragEnd: (e) => setFormData({
                                                    ...formData,
                                                    location: { lat: e.lngLat.lat, lng: e.lngLat.lng }
                                                }), children: _jsx(MapPinIcon, { className: "h-6 w-6 text-primary-500" }) }) }) }), _jsx("p", { className: "mt-2 text-sm text-gray-400", children: "Drag the pin to mark the exact location" })] }), _jsx("button", { type: "submit", className: "w-full bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 rounded-lg transition-colors", children: "Submit Report" })] })] }) }) }));
}
