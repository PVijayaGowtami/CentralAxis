'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';

// Dropdown data
const dropdowns = {
  'Data Center Infrastructure Management': [
    { name: 'Monitoring Devices', path: '/monitoring-devices' },
    { name: 'Asset Tracking', path: '/asset-tracking' },
    { name: 'Network Management', path: '/network-management' },
    { name: 'Change Management', path: '/change-management' },
    { name: 'Colocation Management', path: '/colocation-management' },
    { name: 'Data Center Planner', path: '/data-center-planner' },
    { name: 'Firmware Management', path: '/firmware-management' },
    { name: 'IP Address Management', path: '/ip-address-management' },
    { name: 'Customer Portal', path: '/customer-portal' },
    { name: 'Custom Insights', path: '/custom-insights' },
    { name: 'Custom Data Center Solutions', path: '/custom-solutions' },
  ],
  'Intelligence Solutions': [
    { name: 'Digital Twins', path: '/digital-twins' },
    { name: 'Smart Power Mapping', path: '/smart-power-mapping' },
    { name: 'Predictive Failure and Alerting', path: '/predictive-alerting' },
    { name: 'Smart Control Systems', path: '/smart-control' },
    { name: 'Automated Discovery', path: '/automated-discovery' },
  ],
  'Data Center Compliance': [
    { name: 'DCOI Compliance', path: '/dcoi-compliance' },
    { name: '(EU) 2023/1791', path: '/eu-2023-1791' },
    { name: 'EN 50600', path: '/en-50600' },
    { name: 'LEED Certification', path: '/leed-certification' },
    { name: 'ISO/IEC 30134-2', path: '/iso-30134-2' },
    { name: '(EPA) ENERGY STAR', path: '/epa-energy-star' },
    { name: 'European Commission Joint Research Centre (JRC)', path: '/jrc-compliance' },
  ],
  'Sustainability Blog': [
    { name: 'Energy Efficiency', path: '/energy-efficiency' },
    { name: 'Stranded Energy Map', path: '/stranded-energy-map' },
    { name: 'Environmental Product Declaration', path: '/epd' },
    { name: 'Renewables Integration', path: '/renewables-integration' },
    { name: 'Power Resource Management', path: '/power-resource-management' },
  ],
};

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Place console.logs here — inside the function, but **before** return
  console.log('Dropdown data:', dropdowns);
  console.log('Open dropdown:', openDropdown);
  console.log('Is open:', isOpen);

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-transparent relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/assets/axis.jpg" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold text-white">Central Axis</span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 text-white font-medium relative">
        {Object.entries(dropdowns).map(([label, items]) => (
          <div
            key={label}
            className="relative group"
            onMouseEnter={() => setOpenDropdown(label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-purple-400 transition">
              {label}
            </button>
            {openDropdown === label && (
              <div className="absolute left-0 top-full bg-black text-white mt-2 rounded-md shadow-lg p-4 w-72 space-y-2 z-50">
                {items.map(({ name, path }, idx) => (
                  <Link key={idx} href={path} className="block hover:text-purple-400 text-sm">
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden relative">
        <Menu
          className="text-white h-6 w-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg p-4 space-y-2 z-50 w-64">
            {Object.keys(dropdowns).map((label) => (
              <Link key={label} href="#" className="block hover:text-purple-700">
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
