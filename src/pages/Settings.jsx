import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../components/ThemeProvider.jsx';

export default function SettingsPage() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { accent, setAccent } = useContext(ThemeContext);
  const { density, setDensity } = useContext(ThemeContext);
  const [email, setEmail] = useState('janaki.designspace@gmail.com');
  const [reminders, setReminders] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [inApp, setInApp] = useState(true);

  const [reminderMsg, setReminderMsg] = useState('');
  const [marketingMsg, setMarketingMsg] = useState('');
  const [inAppMsg, setInAppMsg] = useState('');
<<<<<<< HEAD
const [showPasswordBox, setShowPasswordBox] = useState(false);
const [showEmailBox, setShowEmailBox] = useState(false);
const [showProfileBox, setShowProfileBox] = useState(true);
  // Determine dynamic background for containers
=======

  
  const [resetMsg, setResetMsg] = useState('');
  const [exportMsg, setExportMsg] = useState('');
  const [policyMsg, setPolicyMsg] = useState('');

>>>>>>> 0d36c89565d459d824fb659c9f64fcb09aa42468
  const containerBg = accent === 'green' ? 'bg-[#a0d29d]' : 'bg-[#d1c1f1]';

  useEffect(() => {
    if (reminderMsg) setTimeout(() => setReminderMsg(''), 2000);
  }, [reminderMsg]);

  useEffect(() => {
    if (marketingMsg) setTimeout(() => setMarketingMsg(''), 2000);
  }, [marketingMsg]);

  useEffect(() => {
    if (inAppMsg) setTimeout(() => setInAppMsg(''), 2000);
  }, [inAppMsg]);

  useEffect(() => {
  if (resetMsg) setTimeout(() => setResetMsg(''), 2000);
}, [resetMsg]);

useEffect(() => {
  if (exportMsg) setTimeout(() => setExportMsg(''), 2000);
}, [exportMsg]);

useEffect(() => {
  if (policyMsg) setTimeout(() => setPolicyMsg(''), 2000);
}, [policyMsg]);

  return (
    <div className={`min-h-screen ${density === 'default' ? 'p-8' : 'p-4'} font-sans ${theme === 'light' ? 'bg-[#FAFAFC] text-[#1F1F2E]' : 'bg-[#1F1F2E] text-[#FAFAFC]'}`}>
      <h1 className="text-2xl font-bold mb-6 settings-title">⚙️ Settings</h1>

      {/* Appearance */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Appearance</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">Theme Mode</p>
            <p className="text-sm text-gray-600 mb-2">Toggle between light and dark themes to suit your environment or preference.</p>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" checked={theme === 'light'} onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="sr-only peer" />
              <div className="relative w-11 h-6">
                <div className="absolute top-0 left-0 w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-[#E4F7E7] transition-colors"></div>
                <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${theme === 'light' ? 'translate-x-5' : ''}`}></div>
              </div>
              <span className="ml-4 text-gray-700 font-medium">Light Mode</span>
            </label>
          </div>

          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">Accent Color</p>
            <p className="text-sm text-gray-600 mb-2">Choose the primary highlight color used throughout the app interface.</p>
            <div className="flex gap-2">
              <button onClick={() => setAccent('green')} className={`w-6 h-6 rounded-full ${accent === 'green' ? 'ring-2 ring-[#0B7557] bg-[#0B7557]' : 'bg-[#A5D6A7]'}`}></button>
              <button onClick={() => setAccent('violet')} className={`w-6 h-6 rounded-full ${accent === 'violet' ? 'ring-2 ring-[#6A5ACD] bg-[#6A5ACD]' : 'bg-[#BFA5D6]'}`}></button>
            </div>
          </div>

          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">UI Density</p>
            <p className="text-sm text-gray-600 mb-2">Adjust spacing and element sizing for a compact or roomy layout.</p>
            <div className="flex gap-2">
              <button onClick={() => setDensity('default')} className={`px-3 py-1 rounded ${density === 'default' ? 'bg-[#E4F7E7]' : 'bg-gray-200'}`}>Default</button>
              <button onClick={() => setDensity('compact')} className={`px-3 py-1 rounded ${density === 'compact' ? 'bg-[#E4F7E7]' : 'bg-gray-200'}`}>Compact</button>
            </div>
          </div>
        </div>
      </section>

          {/* Notifications */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Notifications & Reminders</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">Daily Reminders</p>
            <p className="text-sm text-gray-600 mb-2">Receive helpful daily prompts to stay on track with your habits.</p>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={reminders}
                onChange={() => {
                  const newVal = !reminders;
                  setReminders(newVal);
                  setReminderMsg(`Daily Reminders ${newVal ? 'Enabled' : 'Disabled'}`);
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#0B7557] relative">
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${reminders ? 'translate-x-5' : ''}`}></div>
              </div>
            </label>
            {reminderMsg && <p className="mt-2 text-xs font-semibold">{reminderMsg}</p>}
          </div>

          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">Marketing Emails</p>
            <p className="text-sm text-gray-600 mb-2">Subscribe or unsubscribe from promotional and update emails.</p>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={() => {
                  const newVal = !marketing;
                  setMarketing(newVal);
                  setMarketingMsg(`Marketing Emails ${newVal ? 'Enabled' : 'Disabled'}`);
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#6A5ACD] relative">
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${marketing ? 'translate-x-5' : ''}`}></div>
              </div>
            </label>
            {marketingMsg && <p className="mt-2 text-xs font-semibold">{marketingMsg}</p>}
          </div>

          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">In App Alerts</p>
            <p className="text-sm text-gray-600 mb-2">Get real-time alerts within the app for important activity.</p>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={inApp}
                onChange={() => {
                  const newVal = !inApp;
                  setInApp(newVal);
                  setInAppMsg(`In-App Alerts ${newVal ? 'Enabled' : 'Disabled'}`);
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#0B7557] relative">
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${inApp ? 'translate-x-5' : ''}`}></div>
              </div>
            </label>
            {inAppMsg && <p className="mt-2 text-xs font-semibold">{inAppMsg}</p>}
          </div>
        </div>
      </section>

       {/* Account Settings */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
  <div className="grid md:grid-cols-3 gap-4">

  
 {/* Change Password */}
<div className="p-4 border border-[#E0E0F0] rounded-lg bg-[#a0d29d]">
  <p className="font-medium mb-2">Change Password</p>
  <p className="text-sm text-gray-600 mb-2">
    Update your password regularly to keep your account secure.
  </p>
  <button 
    onClick={() => setShowPasswordBox(!showPasswordBox)} 
    className="text-white bg-[#A37CF0] px-3 py-1 rounded">
    Change Password
  </button>
  {showPasswordBox && (
    <div className="mt-3 p-3 bg-[#E4F7E7] rounded border border-[#0B7557] text-sm text-gray-700">
      <label className="block mb-2 font-medium" htmlFor="new-password">Enter your new password:</label>
      <input
        id="new-password"
        type="password"
        className="border p-1 rounded w-full mb-2"
        placeholder="New password"
      />
      <button 
        onClick={() => setShowPasswordBox(false)} 
        className="bg-[#0B7557] text-white px-3 py-1 rounded">
        Save Password
      </button>
    </div>
  )}
</div>

 {/* Update Email */}
<div className="p-4 border border-[#E0E0F0] rounded-lg bg-[#a0d29d]">
  <p className="font-medium mb-2">Update Email</p>
  <p className="text-sm text-gray-600 mb-2">
    Modify the email linked to your account for communication and verification.
  </p>
  <input 
    type="email" 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
    className="border p-1 rounded w-full mb-2" 
  />
  <button 
    onClick={() => {
      setShowEmailBox(true);
      setTimeout(() => setShowEmailBox(false), 2000); // Auto-hide after 2 seconds
    }} 
    className="text-white bg-[#0B7557] px-3 py-1 rounded">
    Save
  </button>
  {showEmailBox && (
    <div className="mt-3 p-3 bg-[#E4F7E7] rounded border border-[#0B7557] text-sm text-gray-700">
      ✅ Email updated locally to: <strong>{email}</strong>.
    </div>
  )}
</div>

{/* Profile Visibility */}
<div className="p-4 border border-[#E0E0F0] rounded-lg bg-[#a0d29d]">
  <p className="font-medium mb-2">Profile Visibility</p>
  <p className="text-sm text-gray-600 mb-2">
    Set whether your profile is visible to other users in the app.
  </p>
  <div className="flex items-center gap-4">
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name="profileVisibility"
        checked={showProfileBox} // true means public
        onChange={() => setShowProfileBox(true)}
        className="h-4 w-4 text-[#0B7557] focus:ring-[#0B7557]"
      />
      <span className="ml-2">Public</span>
    </label>
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        name="profileVisibility"
        checked={!showProfileBox} // false means private
        onChange={() => setShowProfileBox(false)}
        className="h-4 w-4 text-[#0B7557] focus:ring-[#0B7557]"
      />
      <span className="ml-2">Private</span>
    </label>
  </div>
  <div className={`mt-3 p-3 bg-[#E4F7E7] rounded border ${showProfileBox ? 'border-[#0B7557]' : 'border-[#1F1F2E]'} text-sm text-gray-700 ${showProfileBox !== null ? 'block' : 'hidden'}`}>
    {showProfileBox ? (
      <>👁️ Profile is currently set to <strong>Public</strong>. All users can view your profile.</>
    ) : (
      <>🔒 Profile is currently set to <strong>Private</strong>. Only you can view your profile.</>
    )}
  </div>
</div>
 </div>
</section>

      {/* Data Management */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Management</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">Reset Application Data</p>
            <p className="text-sm text-gray-600 mb-2">Clear all your app activity and preferences to start fresh.</p>
            <button
              className="text-white bg-[#DE4848] px-3 py-1 rounded"
              onClick={() => setResetMsg('Resetting all application data...')}
            >
              Reset All Data
            </button>
            {resetMsg && <p className="mt-2 text-xs font-semibold">{resetMsg}</p>}
          </div>

          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">Export My Data</p>
            <p className="text-sm text-gray-600 mb-2">Download your saved activity and preferences to a file.</p>
            <button
              className="text-white bg-[#353543] px-3 py-1 rounded"
              onClick={() => setExportMsg('Exporting your data...')}

            >
              Export Data
            </button>
             {exportMsg && <p className="mt-2 text-xs font-semibold">{exportMsg}</p>}
          </div>

          <div className={`p-4 border border-[#E0E0F0] rounded-lg ${containerBg}`}>
            <p className="font-medium mb-2">Data Retention Policy</p>
            <p className="text-sm text-gray-600 mb-2">Review how long your data is kept and how it’s handled.</p>
            <button
              className="text-white bg-[#4D78E0] px-3 py-1 rounded"
               onClick={() => setPolicyMsg('Opening data retention policy...')}
            >
              View Policy
            </button>
            {policyMsg && <p className="mt-2 text-xs font-semibold">{policyMsg}</p>}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-center">About This App</h2>
        <div className={`p-6 border border-[#E0E0F0] rounded-lg ${containerBg} text-center text-sm text-[#1F1F2E]`}>
          <p className="mb-1">GreenSpace is a modern application designed to help you manage your daily tasks efficiently and beautifully.</p>
          <p className="mb-1 font-medium">Version: 1.2.0</p>
          <p className="mb-2 font-semibold">Developed with passion by GreenSpace Innovations Team.</p>
          <p className="text-xs">This user interface design is a demonstration of sophisticated web application design using React, TypeScript, Tailwind CSS, and shadcn/ui components.</p>
          <div className="w-16 h-16 bg-gray-200 mx-auto mt-4 rounded"><span className="text-gray-400 text-2xl">🖼️</span></div>
        </div>
      </section>
    </div>
  );
}
