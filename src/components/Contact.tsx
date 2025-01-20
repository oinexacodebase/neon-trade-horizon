import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Contact = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Note: Replace with your Mapbox token
    mapboxgl.accessToken = "YOUR_MAPBOX_TOKEN";
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-74.006, 40.7128], // Default to NYC
      zoom: 12
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border border-neon-green/20 bg-black/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Name" className="bg-black/50" />
                  <Input placeholder="Email" type="email" className="bg-black/50" />
                </div>
                <Input placeholder="Phone" type="tel" className="bg-black/50" />
                <textarea 
                  placeholder="Your message" 
                  className="w-full h-32 px-3 py-2 text-base bg-black/50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-neon-green"
                />
                <Button className="w-full bg-neon-green hover:bg-neon-green/80 text-black font-bold">
                  Send Message
                </Button>
              </form>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="text-neon-green" />
                  <span>123 Trading Street, Crypto City, CC 12345</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="text-neon-green" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="text-neon-green" />
                  <span>contact@cryptotrade.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="h-[500px] rounded-lg overflow-hidden border border-neon-green/20">
            <div ref={mapContainer} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;