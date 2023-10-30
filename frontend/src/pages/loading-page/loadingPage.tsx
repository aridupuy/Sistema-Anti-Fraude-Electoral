export const LoadingPage: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center h-screen overflow-hidden bg-gray-100">
      <div className="z-10 w-5/6 p-4 md:w-1/2 shadow-3xl rounded-xl">
        <div className="container mx-auto">
          <div className="flex items-center justify-center my-20">
            <img
              src="src/assets/logos/fenix.png"
              alt="fenix"
              className="object-cover h-auto mr-4 rounded w-28"
            />
            <img
              src="src/assets/logos/lla.svg"
              alt="lla"
              className="object-cover h-auto rounded w-50"
            />
          </div>
        </div>
        <div className="flex h-full">
          <div
            className="m-auto inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-violet-brand motion-reduce:animate-[spin_1.5s_linear_infinite] "
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)] ">
              Cargando...
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 transform -skew-y-12 -bottom-32 h-80 bg-violet-brand"></div>

      {/* 
        // TODO: FIX FOOTER IMAGE DESIGN 
        // https://www.figma.com/file/iO7j93Rxbk2nIfYdqpAmv2/%F0%9F%A6%85-APP-Fiscalizaci%C3%B3n-Libertaria-%7C-%F0%9F%93%B1-FINAL?type=design&node-id=59-4193&mode=dev
        <div className='flex flex-col items-center h-screen mt-auto overflow-hidden bg-gray-100 md:hidden'> <img /
            src='src/assets/logos/footer.svg'
            alt='footer'
            className='w-full h-full p-0 m-0'
          /> 
        </div>
      */}
    </section>
  );
};

export default LoadingPage;