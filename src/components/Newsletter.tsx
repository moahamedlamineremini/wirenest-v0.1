import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Newsletter = () => {
  return (
    <section className="mt-4 px-4 sm:px-6 py-6 sm:py-8 bg-black text-white rounded-xl max-w-5xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center sm:text-left">
            Recevez des offres<br className="hidden sm:block" />exclusives
          </h3>
          <div className="flex flex-col gap-2 w-full sm:w-72 md:w-80">
            <button className="w-full bg-white text-black px-4 sm:px-6 py-2 rounded-[50px] hover:bg-gray-100 text-xs sm:text-sm text-center">
              <span className="whitespace-nowrap">Inscrivez-vous à notre newsletter !</span>
            </button>
            <div className="relative flex items-center justify-center">
              <EmailOutlinedIcon className="absolute left-4 sm:left-16 text-gray-400" />
              <input
                type="email"
                placeholder="Je m'inscris avec mon e-mail"
                className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-2 rounded-[50px] text-black text-xs sm:text-sm text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;