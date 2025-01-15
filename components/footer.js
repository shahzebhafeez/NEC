import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1f4e79] text-white py-10 px-5 font-sans">
      <div className="footer-container flex justify-between items-start flex-wrap gap-5 max-w-screen-xl mx-auto">
        {/* Footer Logo */}
        <div className="footer-logo flex-1 max-w-[25%]">
          <img
            src="/your-logo.png"
            alt="Logo"
            className="w-36 mb-4"
          />
          <p className="text-sm text-[#d2eae9] leading-6">
            Your company description or some brief text goes here.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="footer-navigation flex-1 max-w-[25%]">
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Navigation</h4>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link href="#">
                <a className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                  Home
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#">
                <a className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                  About Us
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#">
                <a className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                  Services
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="#">
                <a className="text-[#d2eae9] hover:text-[#0f8f98] transition-colors">
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Contact Info */}
        <div className="footer-contact-info flex-1 max-w-[25%]">
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Contact Info</h4>
          <p className="text-sm text-[#d2eae9] mb-2">123 Street, City, Country</p>
          <p className="text-sm text-[#d2eae9] mb-2">+123 456 7890</p>
          <p className="text-sm text-[#d2eae9] mb-2">email@example.com</p>
        </div>

        {/* Footer Social Media */}
        <div className="footer-social flex-1 max-w-[25%]">
          <h4 className="text-lg font-bold text-[#f5f9ff] mb-2">Social</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-[#d2eae9] text-xl hover:text-[#0f8f98] transition-all transform hover:scale-110"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-[#d2eae9] text-xl hover:text-[#0f8f98] transition-all transform hover:scale-110"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-[#d2eae9] text-xl hover:text-[#0f8f98] transition-all transform hover:scale-110"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

