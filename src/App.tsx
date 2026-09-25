import React, { useState } from 'react';
import {
  Phone,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  FileCheck2,
  Scale,
  MapPin,
  Clock,
  CheckCircle2,
  HelpCircle,
  Menu,
  X,
  Building2,
  HardHat,
  ArrowRight,
  Check
} from 'lucide-react';

import heroImg from './assets/images/hero_uk_property_renovation_1790326526914.jpg';
import loftImg from './assets/images/service_loft_conversion_1790326540461.jpg';
import chimneyImg from './assets/images/service_chimney_removal_1790326554282.jpg';
import inspectionImg from './assets/images/surveyor_inspection_party_wall_1790326568026.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedNoticeTab, setSelectedNoticeTab] = useState<'section2' | 'section6' | 'section1'>('section2');
  const [callbackRequested, setCallbackRequested] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackNotes, setCallbackNotes] = useState('');

  const LOGO_URL = "https://surveyone.co.uk/wp-content/uploads/2024/02/survey-logo-e1755668847883.png";
  const PHONE_NUMBER = "03300 100 235";
  const PHONE_TEL = "tel:03300100235";

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone.trim()) return;
    setCallbackRequested(true);
  };

  const faqs = [
    {
      q: "What is the Party Wall etc. Act 1996?",
      a: "The Party Wall etc. Act 1996 is statutory legislation in England and Wales providing a legal framework for preventing and resolving disputes in relation to party walls, boundary walls, and excavations near neighbouring buildings. It protects both building owners undertaking works and adjoining owners next door."
    },
    {
      q: "When must I serve a statutory Party Wall Notice?",
      a: "Notice is required when building along a boundary line (Section 1), cutting into or altering a shared wall or structure like inserting beams for loft conversions or removing chimney breasts (Section 2), or excavating within 3 metres (or up to 6 metres for deep foundations) below the base of a neighbour's foundations (Section 6)."
    },
    {
      q: "Who is responsible for paying Party Wall Surveyor fees?",
      a: "Under normal circumstances, the Building Owner undertaking the construction work is legally responsible for all reasonable surveyor costs, including their own appointed surveyor and any independent surveyor appointed by the Adjoining Owner."
    },
    {
      q: "What happens if an Adjoining Owner dissents or does not reply?",
      a: "If a neighbour dissents or fails to reply within 14 days of being served notice, a dispute is automatically deemed to have arisen under the Act. Each party may then appoint their own independent Party Wall Surveyor, or both parties can agree on a single impartial 'Agreed Surveyor' to prepare the Party Wall Award."
    },
    {
      q: "What is a Schedule of Condition and why is it essential?",
      a: "A Schedule of Condition is a detailed photographic and descriptive inspection of the neighbouring property carried out immediately before construction begins. It protects both parties by recording existing defects and serving as undisputed evidence should any damage be alleged during or after the building works."
    },
    {
      q: "Can a neighbour stop my extension or building works entirely?",
      a: "No. The Party Wall etc. Act 1996 is an enabling Act designed to facilitate legitimate construction works while ensuring neighbouring properties are protected. An adjoining owner cannot veto your statutory rights to build, provided valid notices have been served and an agreed Party Wall Award is in place."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#0f172a] font-sans antialiased selection:bg-[#0284c7] selection:text-white flex flex-col">
      {/* Top Banner / Quick Contact Strip */}
      <div className="bg-[#0b1727] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>UK Statutory Party Wall Surveying Services — England & Wales</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Direct Surveyor Advice:</span>
            <a
              href={PHONE_TEL}
              className="text-white font-semibold hover:text-[#38bdf8] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand Logo Zone */}
          <a
            href="https://surveyone.co.uk/"
            className="flex items-center gap-3 shrink-0 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded p-1"
            title="Survey One Home"
          >
            <img
              src={LOGO_URL}
              alt="Survey One Party Wall Surveyors"
              className="h-10 sm:h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Graceful fallback if image blocked
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'block';
                }
              }}
            />
            <div className="hidden text-xl font-bold tracking-tight text-[#0b1727]">
              SURVEY <span className="text-[#0284c7]">ONE</span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="https://surveyone.co.uk/"
              className="hover:text-[#0284c7] transition-colors py-2 border-b-2 border-transparent hover:border-[#0284c7]"
            >
              Home
            </a>
            <a
              href="https://surveyone.co.uk/about-us/"
              className="hover:text-[#0284c7] transition-colors py-2 border-b-2 border-transparent hover:border-[#0284c7]"
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1.5 hover:text-[#0284c7] transition-colors py-2 focus:outline-none"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 mt-0 transition-all duration-150 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    Party Wall Services
                  </div>
                  <a
                    href="https://surveyone.co.uk/party-wall-awards/"
                    className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-[#0284c7] transition-colors"
                  >
                    <FileCheck2 className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Party Wall Awards</div>
                      <div className="text-xs text-slate-500 font-normal">Statutory agreements & awards</div>
                    </div>
                  </a>
                  <a
                    href="https://surveyone.co.uk/loft-conversion-party-wall-surveyor/"
                    className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-[#0284c7] transition-colors"
                  >
                    <HardHat className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Loft Conversion Surveyors</div>
                      <div className="text-xs text-slate-500 font-normal">Roofline & beam structural works</div>
                    </div>
                  </a>
                  <a
                    href="https://surveyone.co.uk/chimney-breast-removal/"
                    className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-[#0284c7] transition-colors"
                  >
                    <Building2 className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Chimney Breast Removal</div>
                      <div className="text-xs text-slate-500 font-normal">Load-bearing structural notices</div>
                    </div>
                  </a>
                  <div className="border-t border-slate-100 my-1"></div>
                  <a
                    href="https://surveyone.co.uk/rear-extension/"
                    className="flex items-start gap-2.5 px-4 py-2.5 hover:bg-slate-50 text-slate-800 hover:text-[#0284c7] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">Rear Extension Services</div>
                      <div className="text-xs text-slate-500 font-normal">Foundations & boundary notices</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://surveyone.co.uk/contact/"
              className="hover:text-[#0284c7] transition-colors py-2 border-b-2 border-transparent hover:border-[#0284c7]"
            >
              Contact Us
            </a>
          </nav>

          {/* Action Zone: Call CTA */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-sky-500/20 whitespace-nowrap active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
              <span className="font-mono tracking-tight">{PHONE_NUMBER}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <a
              href="https://surveyone.co.uk/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#0284c7] border-b border-slate-100"
            >
              Home
            </a>
            <a
              href="https://surveyone.co.uk/about-us/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#0284c7] border-b border-slate-100"
            >
              About Us
            </a>

            <div className="py-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Services</div>
              <div className="pl-2 space-y-2 border-l-2 border-slate-200">
                <a
                  href="https://surveyone.co.uk/party-wall-awards/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-700 hover:text-[#0284c7]"
                >
                  Party Wall Awards
                </a>
                <a
                  href="https://surveyone.co.uk/loft-conversion-party-wall-surveyor/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-700 hover:text-[#0284c7]"
                >
                  Loft Conversion Party Wall Surveyor
                </a>
                <a
                  href="https://surveyone.co.uk/chimney-breast-removal/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-700 hover:text-[#0284c7]"
                >
                  Chimney Breast Removal
                </a>
                <a
                  href="https://surveyone.co.uk/rear-extension/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-[#0284c7] font-medium"
                >
                  Rear Extension
                </a>
              </div>
            </div>

            <a
              href="https://surveyone.co.uk/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#0284c7] border-b border-slate-100"
            >
              Contact Us
            </a>

            <div className="pt-2">
              <a
                href={PHONE_TEL}
                className="w-full flex items-center justify-center gap-2 bg-[#0b1727] text-white py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-[#38bdf8]" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1727] via-[#0f2137] to-[#122842] text-white pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* Subtle structural grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Compelling UK Party Wall Surveyor Headline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
                <span>Statutory Compliance</span>
                <span aria-hidden="true">·</span>
                <span>The Party Wall etc. Act 1996</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
                Professional UK Party Wall Surveyors for Residential & Commercial Property
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Survey One provides dedicated, independent party wall expertise across England and Wales.
                From statutory notice preparation and impartial schedules of condition to resolving disputes and
                agreeing robust Party Wall Awards, we safeguard your building project and protect neighbouring rights.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white px-6 py-3.5 rounded-lg text-base font-semibold shadow-lg shadow-sky-600/30 transition-all active:scale-[0.99]"
                >
                  <Phone className="w-5 h-5 text-sky-200" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white px-5 py-3.5 rounded-lg text-sm font-medium transition-colors"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Discrete Trust Signals */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <div className="font-semibold text-white">Full Legal Protection</div>
                  <div className="text-slate-400">Statutory dispute resolution</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Building & Adjoining</div>
                  <div className="text-slate-400">Acting for either or both owners</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Transparent Fees</div>
                  <div className="text-slate-400">Fixed, clear surveying quotes</div>
                </div>
              </div>
            </div>

            {/* Right Column: Professional UK Property Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-900 group">
                <img
                  src={heroImg}
                  alt="UK residential property loft and party wall extension works"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs text-slate-200">
                  <div className="font-semibold text-white text-sm">Residential Extensions & Loft Works</div>
                  <div className="text-slate-400 mt-0.5">
                    Statutory notice serving and Party Wall Awards prepared before works commence.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Party Wall Notice Guide */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs font-semibold tracking-wider text-[#0284c7] uppercase">
              Statutory Requirement Checker
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Which Party Wall Notice Does Your Project Require?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              The Party Wall etc. Act 1996 covers three main types of work. Select your planned construction to understand statutory notice requirements:
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-1 bg-slate-100 rounded-xl max-w-full overflow-x-auto">
              <button
                type="button"
                onClick={() => setSelectedNoticeTab('section2')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedNoticeTab === 'section2'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Section 2: Party Structure Notice
              </button>
              <button
                type="button"
                onClick={() => setSelectedNoticeTab('section6')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedNoticeTab === 'section6'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Section 6: Adjacent Excavation
              </button>
              <button
                type="button"
                onClick={() => setSelectedNoticeTab('section1')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  selectedNoticeTab === 'section1'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Section 1: Line of Junction
              </button>
            </div>
          </div>

          {/* Notice Detail Content Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-sm">
            {selectedNoticeTab === 'section2' && (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Section 2 Notice: Works Directly Affecting a Party Wall</h3>
                    <div className="text-xs text-[#0284c7] font-semibold mt-0.5">Statutory Notice Period: 2 Months Before Works</div>
                  </div>
                  <span className="text-xs font-mono bg-sky-100 text-sky-800 px-2.5 py-1 rounded">Sec 2 / Sec 3</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Required when undertaking structural operations directly to the shared party wall. Typical works include:
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Inserting steel beams or padstones into the party wall for loft conversions.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Removing chimney breasts attached to a party wall.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Raising, thickening, or rebuilding the shared party wall or parapet.</span>
                  </li>
                </ul>
              </div>
            )}

            {selectedNoticeTab === 'section6' && (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Section 6 Notice: Excavation Near Neighbouring Buildings</h3>
                    <div className="text-xs text-[#0284c7] font-semibold mt-0.5">Statutory Notice Period: 1 Month Before Works</div>
                  </div>
                  <span className="text-xs font-mono bg-sky-100 text-sky-800 px-2.5 py-1 rounded">Sec 6 (1) & (2)</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Applies when excavating foundations for rear extensions, side-returns, basements, or drainage works:
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Excavating within <strong>3 metres</strong> of a neighbour's structure to a depth lower than their existing foundations.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Excavating within <strong>6 metres</strong> where works meet a 45-degree plane from the bottom of their foundations.</span>
                  </li>
                </ul>
              </div>
            )}

            {selectedNoticeTab === 'section1' && (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Section 1 Notice: Building at or Along the Boundary</h3>
                    <div className="text-xs text-[#0284c7] font-semibold mt-0.5">Statutory Notice Period: 1 Month Before Works</div>
                  </div>
                  <span className="text-xs font-mono bg-sky-100 text-sky-800 px-2.5 py-1 rounded">Sec 1 (2) & (5)</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Required when you propose to construct a new wall right up to or astride the boundary line where no wall currently stands:
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Building a new external flank wall wholly on your land up to the line of junction.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Proposing a new shared party wall astride the boundary (requires neighbour's written consent).</span>
                  </li>
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <span>Unsure which notices apply? Speak with a surveyor directly:</span>
              <a
                href={PHONE_TEL}
                className="font-semibold text-[#0284c7] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Survey One Section */}
      <section id="about" className="py-16 lg:py-24 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Professional Photography of Inspection */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img
                  src={inspectionImg}
                  alt="Chartered Party Wall Surveyor conducting schedule of condition inspection"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0284c7] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Statutory Impartiality</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Under the Party Wall etc. Act 1996, surveyors act impartially in a quasi-judicial capacity to protect structural integrity and property rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: About Survey One & Party Wall Act explanation */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="text-xs font-semibold tracking-wider text-[#0284c7] uppercase">
                About Survey One
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Specialist UK Party Wall Surveyors Protecting Your Property & Project
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                At <strong>Survey One</strong>, we specialise exclusively in party wall matters under the Party Wall etc. Act 1996.
                Whether you are a building owner embarking on home alterations or an adjoining owner who has received a party wall notice from your neighbour,
                we provide clear, statutory guidance to ensure the process remains lawful, transparent, and amicable.
              </p>

              {/* Two Column Breakdown: Building Owner vs Adjoining Owner */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <HardHat className="w-4 h-4 text-[#0284c7]" />
                    <span>For Building Owners</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Planning a loft conversion, extension, or structural alteration? We serve accurate statutory notices, coordinate with neighbours, perform condition schedules, and agree party wall awards to prevent construction delays or injunctions.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Building2 className="w-4 h-4 text-[#0284c7]" />
                    <span>For Adjoining Owners</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Received a party wall notice from your neighbour? In almost all cases, our professional fees are fully covered by the building owner. We inspect the proposals, document your property condition, and legally protect you against structural damage.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://surveyone.co.uk/about-us/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284c7] hover:text-[#0369a1] group"
                >
                  <span>Learn more about Survey One</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-semibold tracking-wider text-[#0284c7] uppercase">
                Expert Practice Areas
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
                Our Party Wall Surveying Services
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Comprehensive statutory party wall surveying tailored for homeowners, developers, and architects across England and Wales.
            </p>
          </div>

          {/* 3 Main Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Party Wall Awards */}
            <div className="bg-[#fafbfc] border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col hover:border-slate-300 transition-all hover:shadow-md">
              <div className="p-6 pb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-[#0284c7] flex items-center justify-center mb-4">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Party Wall Awards</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  A legally binding statutory document produced by appointed surveyors. The Party Wall Award sets out precise details of how the works should progress, approved working hours, protective measures, and damage remedy protocols.
                </p>
              </div>

              <div className="mt-auto px-6 pb-6 pt-4 border-t border-slate-100">
                <a
                  href="https://surveyone.co.uk/party-wall-awards/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0284c7] hover:text-[#0369a1]"
                >
                  <span>Explore Party Wall Awards</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Service 2: Loft Conversion Party Wall Surveyor */}
            <div className="bg-[#fafbfc] border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col hover:border-slate-300 transition-all hover:shadow-md">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={loftImg}
                  alt="Loft conversion party wall steel beam installation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Loft Conversion Party Wall Surveyor</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Loft conversions frequently require inserting heavy steel beams into the shared party wall, raising parapet walls, or cutting into shared brickwork. We ensure all Section 2 and Section 3 statutory requirements are fully satisfied.
                </p>
              </div>

              <div className="mt-auto px-6 pb-6 pt-4 border-t border-slate-100">
                <a
                  href="https://surveyone.co.uk/loft-conversion-party-wall-surveyor/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0284c7] hover:text-[#0369a1]"
                >
                  <span>Loft Conversion Surveyors</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Service 3: Chimney Breast Removal */}
            <div className="bg-[#fafbfc] border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col hover:border-slate-300 transition-all hover:shadow-md">
              <div className="h-44 overflow-hidden relative">
                <img
                  src={chimneyImg}
                  alt="Chimney breast structural removal on shared party wall"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Chimney Breast Removal</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Removing a ground or first-floor chimney breast is a structural alteration directly impacting the shared party wall. We serve Section 2 notices, verify structural calculations and gallows brackets, and safeguard adjacent chimney flues.
                </p>
              </div>

              <div className="mt-auto px-6 pb-6 pt-4 border-t border-slate-100">
                <a
                  href="https://surveyone.co.uk/chimney-breast-removal/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0284c7] hover:text-[#0369a1]"
                >
                  <span>Chimney Breast Removal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Small Rear Extension Service Mention / Button */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-800">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Planning a Rear or Side Extension?</div>
                <div className="text-xs text-slate-600">
                  Excavations within 3m or 6m of neighbouring foundations require Section 6 Party Wall notices.
                </div>
              </div>
            </div>
            <a
              href="https://surveyone.co.uk/rear-extension/"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2 rounded-lg text-xs font-semibold transition-colors shrink-0"
            >
              <span>Rear Extension Services</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0284c7]" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Survey One */}
      <section id="why-us" className="py-16 lg:py-24 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold tracking-wider text-[#0284c7] uppercase">
              The Survey One Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Why Choose Survey One?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Party wall matters require precision, statutory compliance, and diplomatical mediation.
              Here is how we deliver exceptional surveying service:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Local Expertise */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Local Property Expertise</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In-depth understanding of regional UK residential architecture, from Victorian and Edwardian solid brick party walls to modern cavity party boundaries.
              </p>
            </div>

            {/* Feature 2: Nationwide Coverage */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Nationwide Coverage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Providing statutory party wall surveying services to property owners, developers, and architects across England and Wales.
              </p>
            </div>

            {/* Feature 3: Transparent / Fixed Fees */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Transparent Fixed Fees</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear, upfront pricing with no hidden surprises. Fixed quotes for notice drafting, schedule of condition inspections, and award preparation.
              </p>
            </div>

            {/* Feature 4: Dedicated Surveyors */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Dedicated Surveyors</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A single point of contact overseeing your file from initial notice dispatch through to final award agreement and post-completion sign-off.
              </p>
            </div>

            {/* Feature 5: Clear Communication */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Clear Communication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We eliminate confusing legal jargon. We communicate clearly and respectfully with adjoining neighbours to foster consent and prevent friction.
              </p>
            </div>

            {/* Feature 6: Responsive Service */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Responsive Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prompt notice preparation and rapid response times ensure your scheduled build timeline stays firmly on track without unnecessary delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Party Wall Process */}
      <section id="process" className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold tracking-wider text-[#0284c7] uppercase">
              Step-by-Step Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              The Party Wall Process
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A transparent, statutory five-stage workflow ensuring legal compliance and mutual peace of mind:
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0284c7] block mb-2">01 / STAGE</span>
                <h3 className="text-base font-bold text-slate-900">Consultation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We review architectural and structural drawings to determine which sections of the Act apply and identify adjoining owners.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                Statutory Assessment
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0284c7] block mb-2">02 / STAGE</span>
                <h3 className="text-base font-bold text-slate-900">Notices Served</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Drafting and serving legally accurate Section 1, 2, or 6 Party Wall notices, complete with statutory response forms.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                1 or 2 Month Notice Period
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0284c7] block mb-2">03 / STAGE</span>
                <h3 className="text-base font-bold text-slate-900">Surveyor Appointed</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  If the neighbour dissents or requests an award, surveyors are formally appointed — either as an Agreed Surveyor or two independent surveyors.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                Impartial Statutory Duty
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0284c7] block mb-2">04 / STAGE</span>
                <h3 className="text-base font-bold text-slate-900">Award & Schedule</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We inspect and record the Schedule of Condition, agree working methods, and serve the formal binding Party Wall Award.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                Binding Legal Document
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-5 rounded-2xl bg-[#fafbfc] border border-slate-200 relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#0284c7] block mb-2">05 / STAGE</span>
                <h3 className="text-base font-bold text-slate-900">Construction</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Works commence lawfully. Following completion, a re-inspection can be conducted if required to confirm no damage has occurred.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                Lawful & Protected Build
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genuine FAQ Section */}
      <section id="faq" className="py-16 lg:py-24 bg-[#fafbfc] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider text-[#0284c7] uppercase">
              Common Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Frequently Asked Party Wall Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Clear, practical answers based directly on UK legislation under the Party Wall etc. Act 1996.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0284c7]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Have a specific question regarding your plans or neighbour notice? Call our surveyors on{' '}
            <a href={PHONE_TEL} className="font-semibold text-[#0284c7] hover:underline">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section with Phone */}
      <section className="bg-[#0b1727] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Direct Phone CTA */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#38bdf8]">
                <Clock className="w-4 h-4" />
                <span>Responsive Surveyor Support</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Ready to Serve Notice or Received a Party Wall Notice?
              </h2>
              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                Speak directly with an experienced UK party wall surveyor. We offer prompt, practical statutory guidance for homeowners, architects, and adjoining neighbours.
              </p>

              <div className="pt-2">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-3 bg-[#0284c7] hover:bg-[#0369a1] text-white px-7 py-4 rounded-xl text-lg font-bold shadow-xl shadow-sky-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Phone className="w-6 h-6 text-sky-200" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <div className="text-xs text-slate-400 mt-3">
                  Direct telephone advice · Monday to Friday · England & Wales
                </div>
              </div>
            </div>

            {/* Right Column: Callback Request Box (Phone only, no email) */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
              <h3 className="text-lg font-bold text-white mb-1">Request a Surveyor Call Back</h3>
              <p className="text-xs text-slate-400 mb-5">
                Leave your telephone number and brief project notes for a prompt response.
              </p>

              {callbackRequested ? (
                <div className="p-5 bg-sky-950/60 border border-sky-800/80 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-sky-400 mx-auto" />
                  <div className="text-sm font-semibold text-white">Call Back Request Received</div>
                  <div className="text-xs text-slate-300">
                    A surveyor will contact you shortly on <strong>{callbackPhone}</strong>.
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCallbackRequested(false);
                      setCallbackPhone('');
                      setCallbackNotes('');
                    }}
                    className="text-xs text-sky-400 underline mt-2 inline-block"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. 07123 456 789 or 020..."
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-xs font-semibold text-slate-300 mb-1">
                      Brief Project Detail or Notice Type
                    </label>
                    <textarea
                      id="notes"
                      rows={2}
                      placeholder="e.g. Loft conversion beam insertion, rear excavation, or received notice..."
                      value={callbackNotes}
                      onChange={(e) => setCallbackNotes(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent placeholder-slate-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-100 hover:bg-white text-slate-900 py-3 rounded-lg text-sm font-bold transition-colors"
                  >
                    Request Call Back
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070e18] text-slate-400 text-xs py-12 border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
            {/* Logo and Brand Summary */}
            <div className="md:col-span-4 space-y-3">
              <a href="https://surveyone.co.uk/" className="inline-block">
                <img
                  src={LOGO_URL}
                  alt="Survey One"
                  className="h-10 w-auto object-contain brightness-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'block';
                    }
                  }}
                />
                <div className="hidden text-lg font-bold tracking-tight text-white">
                  SURVEY <span className="text-[#0284c7]">ONE</span>
                </div>
              </a>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Survey One provides dedicated UK Party Wall Surveyor services for residential and commercial property across England and Wales under the Party Wall etc. Act 1996.
              </p>
              <div className="pt-2 text-slate-300">
                <span className="text-slate-400">Telephone: </span>
                <a href={PHONE_TEL} className="text-white font-semibold hover:text-[#38bdf8]">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            {/* Useful Navigation Links */}
            <div className="md:col-span-3 space-y-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Navigation</div>
              <ul className="space-y-2">
                <li>
                  <a href="https://surveyone.co.uk/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://surveyone.co.uk/about-us/" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://surveyone.co.uk/contact/" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Surveying Practice Areas */}
            <div className="md:col-span-5 space-y-2">
              <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Party Wall Services</div>
              <ul className="space-y-2">
                <li>
                  <a href="https://surveyone.co.uk/party-wall-awards/" className="hover:text-white transition-colors">
                    Party Wall Awards
                  </a>
                </li>
                <li>
                  <a href="https://surveyone.co.uk/loft-conversion-party-wall-surveyor/" className="hover:text-white transition-colors">
                    Loft Conversion Party Wall Surveyor
                  </a>
                </li>
                <li>
                  <a href="https://surveyone.co.uk/chimney-breast-removal/" className="hover:text-white transition-colors">
                    Chimney Breast Removal
                  </a>
                </li>
                <li>
                  <a href="https://surveyone.co.uk/rear-extension/" className="hover:text-white transition-colors">
                    Rear Extension Surveying
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar / Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-[11px]">
            <div>
              © {new Date().getFullYear()} Survey One. All rights reserved. Statutory jurisdiction: England & Wales.
            </div>
            <div className="flex items-center gap-3">
              <span>Telephone: {PHONE_NUMBER}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
