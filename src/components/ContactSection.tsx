import React, { useState } from 'react';
import { STUDIO_INFO, SERVICES } from '../data/studioData';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, Download, AlertCircle, Clock } from 'lucide-react';

interface ContactSectionProps {
  initialStage?: 'Prenatal' | 'Postnatal' | 'General';
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialStage = 'Prenatal',
  initialService = 'Private Reformer',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    stage: initialStage,
    service: initialService,
    preferredDate: '',
    preferredTime: 'Morning',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmittedBooking(data);
      } else {
        setErrorMsg(data.error || 'Failed to submit enquiry. Please try again or WhatsApp Charlotte.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setErrorMsg('Network error. Please try clicking the WhatsApp link directly.');
    } finally {
      setLoading(false);
    }
  };

  // Build direct WhatsApp link URL
  const waCustomText = encodeURIComponent(
    `Hi Charlotte! I'd like to book a session at Charlotte InAlignment.\n` +
    `Stage: ${formData.stage}\n` +
    `Service: ${formData.service}\n` +
    `Name: ${formData.name || '[My Name]'}`
  );
  const whatsappDirectUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${waCustomText}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F9F7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8DA399] block mb-2">
            Location & Booking
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C2C2C]">
            Book Your Private Session
          </h2>
          <p className="text-sm text-[#6B6B6B] mt-2">
            Send your booking enquiry below. Every request is saved to our studio schedule, and Charlotte will respond promptly.
          </p>
        </div>

        {/* Location & Details Box + Booking Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Studio Details & Map */}
          <div className="md:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 space-y-5 shadow-xs">
              <h3 className="text-lg font-serif font-bold text-[#2C2C2C] border-b border-[#E5E5E5] pb-3">
                Studio Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8DA399] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2C2C2C] block">Address</span>
                    <a
                      href={STUDIO_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6B6B6B] hover:text-[#8DA399] underline transition-colors leading-relaxed block"
                    >
                      {STUDIO_INFO.address}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8DA399] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2C2C2C] block">Phone / Call</span>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="text-[#6B6B6B] hover:text-[#2C2C2C] font-mono tabular-nums underline"
                    >
                      {STUDIO_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Hours / Welcoming Note */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#8DA399] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#2C2C2C] block">Sessions By Appointment</span>
                    <span className="text-[#6B6B6B] block">Flexible weekday & morning times to suit baby naps</span>
                  </div>
                </div>

              </div>

              {/* Direct Export Spreadsheet link for Charlotte */}
              <div className="pt-3 border-t border-[#E5E5E5]">
                <a
                  href="/api/bookings/export.csv"
                  download
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B6B6B] hover:text-[#2C2C2C] transition-colors"
                  title="Download CSV spreadsheet of all bookings"
                >
                  <Download className="w-3.5 h-3.5 text-[#8DA399]" />
                  <span>Download Bookings Spreadsheet (.csv)</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Preview */}
            <div className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-xs h-56 relative">
              <iframe
                title="Charlotte InAlignment Studio Location Map"
                src="https://maps.google.com/maps?q=43%20Clifton%20Rd%2C%20Eccles%2C%20Manchester%20M30%209QS%2C%20UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="md:col-span-7">
            <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 sm:p-8 shadow-xs">
              
              {submittedBooking ? (
                /* Success State */
                <div className="space-y-6 py-4 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[#8DA399]/20 text-[#8DA399] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-[#2C2C2C]">
                      Enquiry Received!
                    </h3>
                    <p className="text-sm text-[#6B6B6B] max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-[#2C2C2C]">{submittedBooking.booking.name}</span>. Your enquiry has been added to our studio schedule.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F9F7F2] rounded-xl border border-[#E5E5E5] text-left text-xs space-y-1.5 font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#6B6B6B]">Reference:</span>
                      <span className="font-bold">{submittedBooking.booking.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B6B6B]">Stage & Service:</span>
                      <span>{submittedBooking.booking.stage} · {submittedBooking.booking.service}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs text-[#6B6B6B]">
                      Want a instant reply? Tap WhatsApp below to chat directly with Charlotte:
                    </p>
                    
                    <a
                      href={submittedBooking.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Chat on WhatsApp Now</span>
                    </a>

                    <button
                      onClick={() => setSubmittedBooking(null)}
                      className="text-xs text-[#6B6B6B] hover:text-[#2C2C2C] underline block mx-auto pt-2"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Booking Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-[#E5E5E5] pb-3 mb-2">
                    <h3 className="text-lg font-serif font-bold text-[#2C2C2C]">
                      Request a Session
                    </h3>
                    <p className="text-xs text-[#6B6B6B]">
                      Fill out your details below or tap WhatsApp for instant chat.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Stage Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#2C2C2C] mb-1">
                        Your Current Stage
                      </label>
                      <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-xs sm:text-sm focus:border-[#8DA399] focus:ring-1 focus:ring-[#8DA399] outline-none"
                      >
                        <option value="Prenatal">Prenatal (Expecting Bump)</option>
                        <option value="Postnatal">Postnatal (Mum & Baby)</option>
                        <option value="General">General 1:1 Reformer</option>
                      </select>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-[#2C2C2C] mb-1">
                        Preferred Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-xs sm:text-sm focus:border-[#8DA399] focus:ring-1 focus:ring-[#8DA399] outline-none"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name} ({s.subtitle})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C2C2C] mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-xs sm:text-sm focus:border-[#8DA399] focus:ring-1 focus:ring-[#8DA399] outline-none"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C2C2C] mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 07123 456789"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-xs sm:text-sm focus:border-[#8DA399] focus:ring-1 focus:ring-[#8DA399] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2C2C2C] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="sarah@example.co.uk"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-xs sm:text-sm focus:border-[#8DA399] focus:ring-1 focus:ring-[#8DA399] outline-none"
                      />
                    </div>
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2C2C2C] mb-1">
                        Preferred Date / Day
                      </label>
                      <input
                        type="text"
                        name="preferredDate"
                        placeholder="e.g. Next Tuesday or Flexible"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-xs sm:text-sm focus:border-[#8DA399] focus:ring-1 focus:ring-[#8DA399] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2C2C2C] mb-1">
                        Time of Day
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-xs sm:text-sm focus:border-[#8DA399] focus:ring-1 focus:ring-[#8DA399] outline-none"
                      >
                        <option value="Morning">Morning (9am - 12pm)</option>
                        <option value="Afternoon">Afternoon (12pm - 4pm)</option>
                        <option value="Evening">Evening (4pm - 7pm)</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2C2C2C] mb-1">
                      Notes (Trimester week, baby age, or any physical concerns)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="e.g. Currently 24 weeks pregnant, experiencing lower back tightness, or bringing 10-week-old baby along..."
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-xs sm:text-sm focus:border-[#8DA399] focus:ring-1 focus:ring-[#8DA399] outline-none"
                    />
                  </div>

                  {/* Submit Button & WhatsApp Button Side-by-Side */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-1/2 bg-[#8DA399] hover:bg-[#768C82] text-white text-xs sm:text-sm font-semibold py-3 rounded-xl transition-all shadow-xs active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Sending Request...' : 'Send Enquiry Request'}</span>
                    </button>

                    {/* Mandatory requirement: WhatsApp click-to-chat link next to form */}
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold py-3 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-[#6B6B6B] text-center pt-1">
                    🔒 Private studio booking. Your contact details are strictly confidential.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
