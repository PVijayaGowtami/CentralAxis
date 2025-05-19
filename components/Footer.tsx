import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black text-white py-4">
      <div className="flex items-center justify-center space-x-2 text-sm">
        <Image src="/assets/favicon.ico" alt="Logo" width={20} height={20} />
        <p className="text-gray-400">Copyright © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
