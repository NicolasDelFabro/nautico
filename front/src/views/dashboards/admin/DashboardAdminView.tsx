import DashboardAdminDesktop from "./desktop/DashboardAdminDesktop";

const DashboardAdminView = () => {
    return( 
        <>
      {/* ---DESKTOP--- */}
        <div className="hidden md:block">
          <DashboardAdminDesktop />
        </div>

      {/* ---MOBILE--- */}
        {/* <div className="block md:hidden">
          <RemoMobile />
        </div> */}
    </>
    );
};

export default DashboardAdminView;