
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AdvancedMonitoring from '../components/AdvancedMonitoring'
import NetworkManagement from '../components/NetworkManagement'
import AssetManagement from '../components/AssetManagement'
import SinglePane from '../components/SinglePane'
import BuiltInCompliance from '../components/BuiltInCompliance'
import DataCenter from '../components/DataCenter'
import DataCenterCTA from '../components/DataCenterCTA'
import ResourceSection from "../components/ResourceSection";
import BookDemo from "../components/BookDemo";
import FAQSection from "../components/FAQSection";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-black  to-black text-white">

      <Navbar />
      <Hero />

      <AdvancedMonitoring />
      <NetworkManagement />
      <AssetManagement />
      <SinglePane />
      <BuiltInCompliance />
      <DataCenter />
      <DataCenterCTA />
      <ResourceSection />
      <BookDemo />
      <FAQSection />
      <Footer />


    </main>
  );
}
