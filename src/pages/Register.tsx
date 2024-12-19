import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: '',
    phone: '',
    businessId: '',
    password: '',
    marketing: false
  });

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false,
    hasNumber: false
  });

  const getValidationColor = (condition: boolean, password: string) => {
    if (password.length === 0) return "text-gray-500";
    return condition ? "text-green-500" : "text-red-500";
  };

  useEffect(() => {
    const password = formData.password;
    setPasswordValidation({
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasNumber: /[0-9]/.test(password)
    });
  }, [formData.password]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl font-bold mb-2">Créer un compte professionnel</h1>
        <p className="mb-8">
          Vous avez déjà un compte ? <Link to="/login" className="text-blue-600 hover:underline">Se connecter</Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom et prénom
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresse e-mail professionnelle
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Catégorie d'activité
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Numéro de téléphone professionnel
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Numéro d'immatriculation de l'entreprise (SIRET, TVA, etc., selon le pays)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.businessId}
              onChange={(e) => setFormData({ ...formData, businessId: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="mt-2 text-sm space-y-1">
              <p className={getValidationColor(passwordValidation.minLength, formData.password)}>
                • Utiliser 8 caractères ou plus
              </p>
              <p className={getValidationColor(passwordValidation.hasUpperCase, formData.password)}>
                • Une lettre majuscule
              </p>
              <p className={getValidationColor(passwordValidation.hasLowerCase, formData.password)}>
                • Une lettre minuscule
              </p>
              <p className={getValidationColor(passwordValidation.hasSpecialChar, formData.password)}>
                • Un caractère spécial
              </p>
              <p className={getValidationColor(passwordValidation.hasNumber, formData.password)}>
                • Un chiffre
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1"
              checked={formData.marketing}
              onChange={(e) => setFormData({ ...formData, marketing: e.target.checked })}
            />
            <label className="ml-2 text-sm text-gray-600">
              Je souhaite recevoir des e-mails concernant les produits, les mises à jour des fonctionnalités, les événements et les promotions marketing.
            </label>
          </div>

          <div className="text-sm text-gray-600">
            En créant un compte, vous acceptez les{' '}
            <Link to="/terms" className="text-blue-600 hover:underline">Conditions d'utilisation</Link>
            {' '}et la{' '}
            <Link to="/privacy" className="text-blue-600 hover:underline">Politique de confidentialité</Link>.
          </div>

          <button
            type="submit"
            className="w-full bg-gray-300 text-black py-3 rounded-full hover:bg-gray-400 transition-colors"
          >
            Créer un compte
          </button>

          <p className="text-center text-sm text-gray-600">
            Vous avez déjà un compte ? <Link to="/login" className="text-blue-600 hover:underline">Se connecter</Link>
          </p>
        </form>
      </div>

      <div className="hidden lg:block flex-1">
        <img
          src="src/img/register.png"
          alt="Mode"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;