import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Building, 
  Users, 
  Send, 
  Phone, 
  Mail, 
  MapPin,
  Shield,
  CheckCircle,
  Upload,
  FileText,
  X
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    societyName: '',
    address: '',
    purpose: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [files, setFiles] = useState([]);
  const [isSocietyRegistration, setIsSocietyRegistration] = useState(false);

  const purposes = [
    { 
      id: 'register-society', 
      icon: <Building size={20} />, 
      label: 'Register New Society', 
      description: 'Register a new society in the system',
      requiresFiles: true
    },
    { 
      id: 'become-chairman', 
      icon: <Users size={20} />, 
      label: 'Become Chairman', 
      description: 'Convert resident to society chairman',
      requiresFiles: false
    }
  ];

  const allowedFileTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePurposeSelect = (purpose) => {
    setSelectedPurpose(purpose.label);
    setIsSocietyRegistration(purpose.requiresFiles);
    setFormData(prev => ({
      ...prev,
      purpose: purpose.label
    }));
    // Clear files when changing purpose
    if (!purpose.requiresFiles) {
      setFiles([]);
    }
  };

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Filter files by type
    const validFiles = selectedFiles.filter(file => 
      allowedFileTypes.includes(file.type)
    );
    
    // Check for duplicates
    const newFiles = validFiles.filter(newFile => 
      !files.some(existingFile => 
        existingFile.name === newFile.name && 
        existingFile.size === newFile.size
      )
    );
    
    if (validFiles.length !== selectedFiles.length) {
      alert('Some files were rejected. Please upload only PDF, images, Word, or Excel files.');
    }
    
    setFiles(prev => [...prev, ...newFiles]);
    e.target.value = ''; // Reset file input
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // Including file uploads
    const submissionData = {
      ...formData,
      files: files.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size
      }))
    };
    
    console.log('Form submitted:', submissionData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        societyName: '',
        address: '',
        purpose: '',
        message: ''
      });
      setSelectedPurpose('');
      setFiles([]);
      setIsSocietyRegistration(false);
    }, 3000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Super Admin
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with our administration team to register new societies or become a chairman
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="text-blue-600" />
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">admin@societymgmt.com</p>
                    <p className="text-sm text-gray-500">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <p className="text-gray-600">123 Society Plaza</p>
                    <p className="text-gray-600">Business District, City 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Purpose Selection */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Select Purpose
              </h2>
              <div className="space-y-4">
                {purposes.map((purpose) => (
                  <motion.button
                    key={purpose.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePurposeSelect(purpose)}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedPurpose === purpose.label
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-lg ${
                        selectedPurpose === purpose.label 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {purpose.icon}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 text-lg">{purpose.label}</span>
                        <p className="text-sm text-gray-600 mt-1">{purpose.description}</p>
                      </div>
                    </div>
                    {purpose.requiresFiles && selectedPurpose === purpose.label && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700 font-medium">
                          ✓ File upload enabled for society documents
                        </p>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Request Submitted!
                  </h3>
                  <p className="text-gray-600">
                    Your request has been sent to the Super Admin. We'll contact you within 24 hours.
                  </p>
                  {isSocietyRegistration && files.length > 0 && (
                    <p className="text-sm text-gray-500 mt-3">
                      {files.length} document(s) uploaded successfully
                    </p>
                  )}
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send Your Request
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Fill the form below to contact the Super Admin
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Society Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="text"
                            name="societyName"
                            value={formData.societyName}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            placeholder="Grand Society"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows="2"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          placeholder="Complete society address including city and postal code"
                        />
                      </div>
                    </div>

                    {/* File Upload Section - Only for Society Registration */}
                    {isSocietyRegistration && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Upload Society Documents *
                            <span className="text-xs text-gray-500 ml-2">
                              (PDF, Images, Word, Excel up to 10MB each)
                            </span>
                          </label>
                          
                          <div className="border-2 border-dashed border-blue-300 rounded-xl p-6 bg-blue-50">
                            <div className="text-center">
                              <Upload className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                              <p className="text-sm text-gray-600 mb-4">
                                Upload society registration documents, bylaws, floor plans, etc.
                              </p>
                              
                              <label className="cursor-pointer">
                                <input
                                  type="file"
                                  multiple
                                  onChange={handleFileUpload}
                                  className="hidden"
                                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
                                />
                                <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                  <Upload size={18} />
                                  Choose Files
                                </div>
                              </label>
                              <p className="text-xs text-gray-500 mt-2">
                                Maximum 5 files, 10MB each
                              </p>
                            </div>
                            
                            {/* File List */}
                            {files.length > 0 && (
                              <div className="mt-6">
                                <h4 className="font-medium text-gray-900 mb-3">Selected Files:</h4>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                  {files.map((file, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center justify-between bg-white p-3 rounded-lg border"
                                    >
                                      <div className="flex items-center gap-3">
                                        <FileText className="text-blue-500" size={18} />
                                        <div>
                                          <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                            {file.name}
                                          </p>
                                          <p className="text-xs text-gray-500">
                                            {formatFileSize(file.size)}
                                          </p>
                                        </div>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() => removeFile(index)}
                                        className="text-red-500 hover:text-red-700"
                                      >
                                        <X size={18} />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                  {files.length} file(s) selected
                                </p>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">Required Documents:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                Society Registration Certificate
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                Building Layout/Floor Plans
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                Society Bylaws/Constitution
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                NOC from Authorities (if applicable)
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purpose of Contact
                      </label>
                      <input
                        type="text"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-gray-50"
                        placeholder="Select from above options"
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Detailed Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder={
                          isSocietyRegistration 
                            ? "Describe your society details, number of buildings, total flats, amenities, etc..."
                            : "Explain why you want to become chairman, your experience, and resident support..."
                        }
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSocietyRegistration && files.length === 0}
                      className={`w-full text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
                        isSocietyRegistration && files.length === 0
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                      }`}
                    >
                      <Send size={20} />
                      Send Request to Super Admin
                    </motion.button>
                  </form>
                </>
              )}
            </div>

            {/* Additional Info */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-3">What happens next?</h3>
              <ul className="space-y-2">
                {isSocietyRegistration ? (
                  <>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Super Admin verifies your society documents</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Society registration approval within 3-5 business days</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Setup credentials will be provided via email</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Super Admin reviews your request within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Verification with existing society members</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Chairman role activation after approval</span>
                    </li>
                  </>
                )}
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Dedicated support during the setup process</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}