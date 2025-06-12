import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPropertyById } from "@/api/propertyApi";
import { Property } from "@/api/propertyApi";
import {
  Bed,
  Bath,
  AreaChart,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Home,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowLeft,
  Building,
  Send,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const AGENCY_INFO = {
  name: "SAY ALLO IMMO",
  tagline: "Votre Partenaire Immobilier",
  logo: "/assets/logoS.png",
  address: "Sahloul 4, Sousse",
  phone: "+216 52 21 21 59",
  email: "sayallo@outlook.fr",
  hours: "Lun - Ven: 9h - 18h",
  socialMedia: {
    facebook: "https://www.facebook.com/share/16bo3NdkHh/?mibextid=wwXIfr",
    instagram:
      "https://www.instagram.com/sayallo_immo?igsh=MW1pejkyODZybWEwaw==",
    TikTok: "https://www.tiktok.com/@say_allo_immo?_t=ZM-8x40dZ6MI2o&_r=1",
  },
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (!id) throw new Error("Property ID is missing");

        const propertyData = await getPropertyById(id);
        setProperty(propertyData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch property details:", err);
        setError("Failed to load property details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://api.sayalloimmo.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contactForm,
          propertyTitle: property?.title,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Message envoyé!",
        description: "Nous vous contacterons bientôt.",
        variant: "default",
      });

      setContactForm({ name: "", email: "", phone: "", message: "" });
      setOpen(false);
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Erreur",
        description:
          "Impossible d'envoyer votre message. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev + 1 < (property?.image?.length || 0) ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : (property?.image?.length || 1) - 1
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="h-32 bg-gray-200 rounded mb-8"></div>
            </div>
            <div className="lg:col-span-1">
              <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-8 py-6 rounded-lg max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Oops!</h2>
          <p>{error || "Property not found"}</p>
          <Link to="/">
            <Button
              variant="outline"
              className="mt-6 border-red-500 text-red-500 hover:bg-red-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const displayImage =
    Array.isArray(property.image) && property.image.length > 0
      ? `https://api.sayalloimmo.com${property.image[currentImageIndex]}`
      : "https://via.placeholder.com/1200x800?text=No+Image+Available";

  const planImageUrl =
    Array.isArray(property.planImage) && property.planImage.length > 0
      ? `https://api.sayalloimmo.com${property.planImage[0]}`
      : null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-red-600 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux propriétés
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <div className="flex gap-2 mb-2">
                    {property.tags &&
                      property.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            tag === "À Vendre"
                              ? "bg-green-500 text-white"
                              : tag === "À Louer"
                              ? "bg-blue-500 text-white"
                              : tag === "En Vedette"
                              ? "bg-red-500 text-white"
                              : tag === "Tendance"
                              ? "bg-black text-white"
                              : "bg-gray-500 text-white"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {property.title}
                  </h1>
                  <p className="text-gray-500 flex items-center mt-2">
                    <MapPin className="h-4 w-4 mr-1 text-red-500" />{" "}
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-red-600">
                    {property.price}
                    {property.isRental ? "/mois" : ""}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <Calendar className="inline h-3 w-3 mr-1" /> Ajouté le{" "}
                    {property.dateAdded || new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden mb-8 shadow-lg relative">
              <img
                src={displayImage}
                alt={`${property.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-[500px] object-cover"
              />
              {Array.isArray(property.image) && property.image.length > 1 && (
                <>
                  <Button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                    aria-label="Previous image"
                  >
                    ←
                  </Button>
                  <Button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                    aria-label="Next image"
                  >
                    →
                  </Button>
                </>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                <Bed className="h-6 w-6 text-red-500 mb-2" />
                <span className="text-sm text-gray-500">Chambres</span>
                <span className="text-xl font-bold">
                  {property.beds || "N/A"}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                <Bath className="h-6 w-6 text-red-500 mb-2" />
                <span className="text-sm text-gray-500">Salles de bain</span>
                <span className="text-xl font-bold">
                  {property.baths || "N/A"}
                </span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                <AreaChart className="h-6 w-6 text-red-500 mb-2" />
                <span className="text-sm text-gray-500">Surface</span>
                <span className="text-xl font-bold">{property.sqft} m²</span>
              </div>
            </div>

            <Tabs defaultValue="description" className="mb-8">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="floorplan" disabled={!planImageUrl}>
                  Plan d'étage
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4">
                <Card className="p-6">
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold mb-4">
                      À propos de cette propriété
                    </h3>
                    <p className="whitespace-pre-line text-gray-700">
                      {property.description}
                    </p>
                  </div>
                </Card>
              </TabsContent>
              {planImageUrl && (
                <TabsContent value="floorplan" className="mt-4">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Plan d'étage</h3>
                    <img
                      src={planImageUrl}
                      alt="Plan d'étage"
                      className="w-full rounded-lg"
                    />
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 shadow-lg border-0 sticky top-8">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-red-500 to-red-700 p-3 rounded-lg shadow-md inline-block mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{AGENCY_INFO.name}</h3>
                <p className="text-red-400 text-sm">{AGENCY_INFO.tagline}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-700">{AGENCY_INFO.address}</p>
                    <p className="text-sm text-gray-500">{AGENCY_INFO.hours}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-500 mr-3" />
                  <p className="text-gray-700">{AGENCY_INFO.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-500 mr-3" />
                  <p className="text-gray-700">{AGENCY_INFO.email}</p>
                </div>
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Contacter l'agence
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>
                      Contactez-nous à propos de cette propriété
                    </DialogTitle>
                    <DialogDescription>
                      Remplissez le formulaire ci-dessous et nous vous
                      contacterons dans les plus brefs délais.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nom
                        </Label>
                        <div className="col-span-3 relative">
                          <Input
                            id="name"
                            name="name"
                            value={contactForm.name}
                            onChange={handleInputChange}
                            className="pl-9"
                            required
                          />
                          <User className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <div className="col-span-3 relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={contactForm.email}
                            onChange={handleInputChange}
                            className="pl-9"
                            required
                          />
                          <Mail className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                          Téléphone
                        </Label>
                        <div className="col-span-3 relative">
                          <Input
                            id="phone"
                            name="phone"
                            value={contactForm.phone}
                            onChange={handleInputChange}
                            className="pl-9"
                          />
                          <Phone className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={contactForm.message}
                          onChange={handleInputChange}
                          className="col-span-3"
                          placeholder={`Je suis intéressé par "${property.title}"`}
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        {submitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Envoi en cours...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" /> Envoyer
                          </span>
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={AGENCY_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>

                <a
                  href={AGENCY_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href={AGENCY_INFO.socialMedia.TikTok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <img
                    src="/assets/tiktok.png"
                    alt="TikTok"
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
