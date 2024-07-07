import Footer from './components/Footer';
import Header from './components/Header';
import Hisotry from './components/History';
import Navigation from './components/Navigation';
import Swap from './components/Swap';
import QueryProvider from './libs/queryClient';

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <QueryProvider>
        <Navigation />
        <Header />
        <Hisotry />
        <Swap />
        <Footer />
      </QueryProvider>
    </main>
  );
}
