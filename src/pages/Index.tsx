import { Phone, MapPin, Star, Clock, Wrench, Settings, Car, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/ivo-logo.webp";

const Index = () => {
  const phoneNumber = "07938673309";
  const address = "Unit 8B, Whittington Business Park, Park Green, Whittington, Oswestry SY11 4ND";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const services = [
    { icon: Wrench, title: "Car Repairs", description: "Complete vehicle repairs for all makes and models" },
    { icon: Settings, title: "Engine Work", description: "Diagnostics, repairs, and full engine rebuilds" },
    { icon: Car, title: "Suspension", description: "Shocks, struts, and complete suspension systems" },
    { icon: Shield, title: "Brake Systems", description: "Pads, discs, and complete brake overhauls" },
    { icon: Settings, title: "Clutches & Timing Belts", description: "Expert clutch and timing belt replacement" },
    { icon: Wrench, title: "Servicing", description: "Full and interim services to manufacturer specs" },
    { icon: Car, title: "AC Refill", description: "Air conditioning regas and repair services" },
    { icon: Settings, title: "Diagnostics", description: "Advanced fault finding and computer diagnostics" },
  ];

  const reviews = [
    { name: "Toni Peneva", text: "Excellent mechanic — honest, professional, and very reliable. He is always explaining everything clearly, fixed the problem quickly, and the price is always fair. It's hard to find someone you can trust with your car, but I would definitely recommend him to anyone.", rating: 5 },
    { name: "Emily Williams", text: "Cannot fault Ivo. So professional, not just that but he genuinely cares and would never ever rip anyone off, you don't get many people like him anymore. He's such a lovely lovely man, top bloke who knows his stuff. Couldn't recommend any more if I tried. Definitely travel if you're in the Shropshire area. 10/10", rating: 5 },
    { name: "Carl Ellis", text: "This guy is the most genuine honest and best mechanic I've ever come across. I would never go anywhere else now and I recommend everyone else to use him. Compared to the main popular garages around Oswestry this man is a lot more thorough and cheaper and works harder. Absolute hero.", rating: 5 },
    { name: "Rachel Howell", text: "Ivo is a truly amazing man, so caring, so accommodating and professional. He is what I would say a rare person in this day and age. Not only did he fix my car but he made sure I was OK, warm enough, offered a hot drink and kept telling me not to worry. Ivo definitely knows his stuff inside and out. He was my hero today.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-2xl tracking-wider">IVO AUTO REPAIR</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <a href={`tel:${phoneNumber}`}>
            <Button variant="hero" size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        
        <div className="container relative z-10 py-20">
          <div className="flex flex-col items-center text-center animate-fade-up">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src={logoImage} 
                alt="Ivo Auto Repair Logo" 
                className="w-72 md:w-96 lg:w-[500px] drop-shadow-[0_0_30px_hsl(0_72%_51%/0.4)]"
              />
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-border">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 Rating • 20+ Google Reviews</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
              YOUR LOCAL
              <span className="text-gradient block">TRUSTED GARAGE</span>
              IN OSWESTRY
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              Honest, reliable car repairs from experienced mechanics. Family-run garage serving Whittington and the surrounding areas.
            </p>
            
            <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border w-fit">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Call us today</p>
                <a href={`tel:${phoneNumber}`} className="font-heading text-2xl md:text-3xl text-foreground hover:text-primary transition-colors">
                  07938 673309
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon–Fri: 8:30am–5:30pm</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Whittington, Oswestry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-dark">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-heading text-4xl md:text-6xl mt-2">OUR SERVICES</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From routine servicing to major repairs, we've got you covered. All work completed to the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-border">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Questions? Call us:</span>
              <a href={`tel:${phoneNumber}`} className="font-heading text-xl text-foreground hover:text-primary transition-colors">
                07938 673309
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-heading text-4xl md:text-5xl mt-2 mb-6">
                LOCAL MECHANICS<br />
                <span className="text-gradient">YOU CAN TRUST</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                At Ivo Auto Repair, we believe in honest, straightforward car repairs without the jargon. 
                Based in Whittington Business Park, we've built our reputation on quality workmanship, 
                fair prices, and treating every customer like family.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether you need a simple service or a complex engine repair, we'll explain exactly 
                what's needed and give you a clear, upfront quote before any work begins.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Experienced mechanics",
                  "Fair, honest pricing",
                  "Quality parts used",
                  "All makes & models"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Star className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-heading text-4xl">5.0</div>
                    <div className="text-muted-foreground text-sm">Google Rating</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Fantastic service, fast and very reasonably priced, highly recommended!"
                </p>
                <p className="text-sm text-primary mt-4">— Viktoriya Watson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-dark">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-heading text-4xl md:text-6xl mt-2">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">5.0 from 20+ reviews on Google</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-gradient-card p-6 rounded-xl border border-border shadow-card"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.text}"</p>
                <p className="text-sm font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="font-heading text-4xl md:text-6xl mt-2">CONTACT US</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-card p-6 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-1">PHONE</h3>
                    <a href={`tel:${phoneNumber}`} className="text-primary text-lg hover:underline">
                      07938 673309
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-card p-6 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-1">ADDRESS</h3>
              <p className="text-muted-foreground">
                Unit 6B, Whittington Business Park<br />
                Park Green, Whittington<br />
                Oswestry SY11 4ND
              </p>
                    <a 
                      href={googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:underline inline-flex items-center gap-1 mt-2"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-card p-6 rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-1">OPENING HOURS</h3>
                    <div className="text-muted-foreground space-y-1">
                      <div className="flex justify-between gap-4">
                        <span>Monday – Friday</span>
                        <span>8:30am – 5:30pm</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Saturday</span>
                        <span>8:30am – 1:00pm</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sunday</span>
                        <span className="text-destructive">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder & CTA */}
            <div className="space-y-6">
              <div className="bg-secondary/50 rounded-xl h-64 overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.5!2d-3.0355!3d52.8505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDUxJzAxLjgiTiAzwrAwMicwNy44Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ivo Auto Repair Location"
                  className="opacity-80"
                />
              </div>
              
              <div className="bg-gradient-card p-8 rounded-xl border border-border text-center">
                <h3 className="font-heading text-2xl mb-4">READY TO BOOK?</h3>
                <p className="text-muted-foreground mb-6">
                  Give us a call to discuss your vehicle's needs or get a quote.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <a href={`tel:${phoneNumber}`} className="font-heading text-xl md:text-2xl text-foreground hover:text-primary transition-colors">
                      07938 673309
                    </a>
                  </div>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg">
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Wrench className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl tracking-wider">IVO AUTO REPAIR</span>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              © 2024 Ivo Auto Repair. Whittington, Oswestry. All rights reserved.
            </p>
            <a href={`tel:${phoneNumber}`} className="text-primary hover:underline">
              07938 673309
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
