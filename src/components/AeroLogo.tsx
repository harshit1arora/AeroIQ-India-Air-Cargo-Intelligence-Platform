import React from "react";

/**
 * AeroIQ Main Brand Logo (The "Spark")
 * A high-fidelity vector representing intelligence, speed, and precision.
 */
export const AeroWingMaster = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Central Intelligence Hub */}
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    
    {/* Dynamic Navigation Markers (The Crosshair/Spark) */}
    <rect x="11" y="4" width="2" height="4" rx="1" fill="currentColor" />
    <rect x="11" y="16" width="2" height="4" rx="1" fill="currentColor" />
    <rect x="4" y="11" width="4" height="2" rx="1" fill="currentColor" />
    <rect x="16" y="11" width="4" height="2" rx="1" fill="currentColor" />
    
    {/* Corner Orbitals */}
    <circle cx="7" cy="7" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="17" cy="17" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="17" cy="7" r="1" fill="currentColor" opacity="0.6" />
    <circle cx="7" cy="17" r="1" fill="currentColor" opacity="0.6" />
    
    {/* Pulse Element (Simulated Purple Node) */}
    <circle cx="18" cy="6" r="3" fill="#8B5CF6" className="animate-pulse" opacity="0.8" />
  </svg>
);

/**
 * Legacy/Variant Icons for the Brand Center
 */
export const SkyLiftLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21 7L13 9L4 6L3 7L11 10L10 17L12 18L13 11L21 9V7Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 9L21 7V9L13 11V9Z" fill="currentColor" />
  </svg>
);

export const AeroNodePropel = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
    <path d="M12 2V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M2 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
