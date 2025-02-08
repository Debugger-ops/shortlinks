import Link from "next/link";
import { Github, Twitter } from 'lucide-react';
export default function Home() {
  return (
    <main>
        <div className="flex flex-col justify-center">
          <p className="m-10 flex justify-center font-bold text-5xl">
          The Best URL Shortner in the Market
          </p>
          <p className="flex justify-center text-3xl">
          We provide the most straightforward way to shorten your URLs. Simple, fast, and reliable.
        </p>
        </div>
        <div className="flex justify-center gap-10 m-10 text-lg font-bold">
        <Link href="/shorten"><button className='bg-blue-700 p-3 rounded-lg px-10 text-white hover:bg-blue-600'>Get Started</button></Link> 
        <Link href="/about"><button className='bg-slate-100 p-3 rounded-lg px-10 border-2 border-black hover:bg-slate-50' href="/learnmore">Learn More</button></Link>
        </div>
        <div className="flex justify-center w-full">
            <img src="https://img.freepik.com/free-vector/colleagues-discussing-project-coffee-break_74855-7044.jpg?t=st=1734882952~exp=1734886552~hmac=6f002e5156614331e547ffbfe100321cdf025d95e095c7137ee034662c929d8f&w=1060" alt=""/>
        </div>
        <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">ShortLink</h3>
            <p className="text-sm">Making long URLs short and shareable since 2024.</p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800  text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ShortLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
        
    </main>
  );
}
