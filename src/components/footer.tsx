import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';


const Footer = () => {
    return (
        <footer className="bg-gray-50 py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Shop Section */}
                    <div className="text-center sm:text-left">
                        <img
                            src="/img/wirenest.png"
                            alt="WireNest"
                            className="h-16 sm:h-20 hover:opacity-80 transition-opacity duration-300 filter brightness-110"
                        />

                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                            Découvrez les dernières collections de vêtements et accessoires.
                        </p>
                        <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
                            <XIcon />
                            <FacebookOutlinedIcon />
                            <InstagramIcon />
                            <GitHubIcon />
                        </div>
                    </div>

                    {/* Company Section */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">ENTREPRISE</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                            <li><a href="/about" className="hover:text-black">À propos</a></li>
                            <li><a href="/careers" className="hover:text-black">Carrières</a></li>
                            <li><a href="/stores" className="hover:text-black">Boutiques</a></li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">AIDE</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                            <li><a href="/support" className="hover:text-black">Service Client</a></li>
                            <li><a href="/delivery" className="hover:text-black">Détails de livraison</a></li>
                            <li><a href="/terms" className="hover:text-black">Conditions Générales</a></li>
                            <li><a href="/privacy" className="hover:text-black">Politique de Confidentialité</a></li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">RESSOURCES</h3>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                            <li><a href="/free-delivery" className="hover:text-black">Livraison gratuite</a></li>
                            <li><a href="/development" className="hover:text-black">Tutoriel de développement</a></li>
                            <li><a href="/blog" className="hover:text-black">Comment bloguer</a></li>
                            <li><a href="/youtube" className="hover:text-black">Playlist YouTube</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                            WireNest © {new Date().getFullYear()} Tous droits réservés
                        </p>
                        <div className="flex space-x-3 sm:space-x-4">
                            <div className="h-4 sm:h-6 w-8 bg-gray-200 rounded-md flex items-center justify-center text-xs">
                                <img src="/img/Visa.png" alt="Visa" className="h-2 sm:h-3 object-contain" />
                            </div>
                            <div className="h-4 sm:h-6 w-8 bg-gray-200 rounded-md flex items-center justify-center text-xs">
                                <img src="/img/Mastercard.png" alt="Mastercard" className="h-2 sm:h-3 object-contain" />
                            </div>
                            <div className="h-4 sm:h-6 w-8 bg-gray-200 rounded-md flex items-center justify-center text-xs">
                                <img src="/img/Paypal.png" alt="PayPal" className="h-2 sm:h-3 object-contain" />
                            </div>
                            <div className="h-4 sm:h-6 w-8 bg-gray-200 rounded-md flex items-center justify-center text-xs">
                                <img src="/img/ApplePay.png" alt="Applepay" className="h-2 sm:h-3 object-contain" />
                            </div>
                            <div className="h-4 sm:h-6 w-8 bg-gray-200 rounded-md flex items-center justify-center text-xs">
                                <img src="/img/GPay.png" alt="GooglePay" className="h-2 sm:h-3 object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
