const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              HireLoop
            </h2>
            <p className="mt-3 text-slate-400">
              Connecting talented professionals with
              great companies around the world.
            </p>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Job Seekers
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/jobs" className="hover:text-white">
                  Browse Jobs
                </a>
              </li>

              <li>
                <a href="/pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>

              <li>
                <a href="/register" className="hover:text-white">
                  Create Account
                </a>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Employers
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/companies" className="hover:text-white">
                  Companies
                </a>
              </li>

              <li>
                <a href="/register" className="hover:text-white">
                  Post a Job
                </a>
              </li>

              <li>
                <a href="/pricing" className="hover:text-white">
                  Enterprise Plan
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>
                <a  className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a  className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a  className="hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a  className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 HireLoop. All rights reserved.
          </p>

          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-white">
              Facebook
            </a>

            <a href="#" className="hover:text-white">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;