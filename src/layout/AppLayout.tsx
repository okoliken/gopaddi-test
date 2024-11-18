import Logo from "../icons/Logo";
import {
  RoadHorizon,
  Buildings,
  Plane,
  Student,
  NewsPapper,
  Immigration,
  FirstAid,
  Package,
  CaretUpDown,
  Home,
  Dashboard,
  Wallet,
  Bell,
  Plan,
  HandCoin,
  Basket,
  PlusSquare,
} from "../icons";
import { motion } from "framer-motion";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const sideBarNavigation = [
    {
      title: "Activities",
      icon: RoadHorizon,
    },
    {
      title: "Hotels",
      icon: Buildings,
    },
    {
      title: "Flights",
      icon: Plane,
    },
    {
      title: "Students",
      icon: Student,
    },
    {
      title: "Visa",
      icon: NewsPapper,
    },
    {
      title: "Immigration",
      icon: Immigration,
    },
    {
      title: "Medical",
      icon: FirstAid,
    },
    {
      title: "Vacation Packages",
      icon: Package,
    },
  ];

  const navBarNavigation = [
    {
      title: "Home",
      icon: Home,
    },
    {
      title: "Dashboard",
      icon: Dashboard,
    },
    {
      title: "Wallet",
      icon: Wallet,
    },
    {
      title: "Bell",
      icon: Bell,
    },
    {
      title: "Plan a trip",
      icon: Plan,
    },
    {
      title: "Commission\nfor life",
      icon: HandCoin,
    },
  ];
  return (
    <div className="grid gap-[2.438rem] pb-[2.438rem]">
      <header className="bg-white py-[1.7rem] flex items-center px-[2.5rem]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-x-[1.75rem]">
            <Logo />
            <fieldset className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.693 20.4696L16.9989 15.7765C18.3594 14.1431 19.0378 12.048 18.893 9.92715C18.7482 7.80629 17.7914 5.82289 16.2215 4.38956C14.6516 2.95623 12.5895 2.18333 10.4642 2.23163C8.33898 2.27993 6.31416 3.14571 4.81099 4.64888C3.30782 6.15205 2.44204 8.17687 2.39374 10.3021C2.34544 12.4274 3.11834 14.4894 4.55167 16.0593C5.985 17.6293 7.9684 18.5861 10.0893 18.7309C12.2101 18.8757 14.3052 18.1973 15.9386 16.8368L20.6317 21.5308C20.7014 21.6005 20.7841 21.6558 20.8752 21.6935C20.9662 21.7312 21.0638 21.7506 21.1623 21.7506C21.2609 21.7506 21.3585 21.7312 21.4495 21.6935C21.5405 21.6558 21.6233 21.6005 21.693 21.5308C21.7626 21.4612 21.8179 21.3784 21.8556 21.2874C21.8933 21.1963 21.9127 21.0988 21.9127 21.0002C21.9127 20.9017 21.8933 20.8041 21.8556 20.713C21.8179 20.622 21.7626 20.5393 21.693 20.4696ZM3.91232 10.5002C3.91232 9.16519 4.3082 7.86015 5.0499 6.75011C5.7916 5.64008 6.84581 4.77492 8.07921 4.26403C9.31261 3.75314 10.6698 3.61946 11.9792 3.87991C13.2886 4.14036 14.4913 4.78324 15.4353 5.72724C16.3793 6.67125 17.0222 7.87398 17.2826 9.18335C17.5431 10.4927 17.4094 11.8499 16.8985 13.0833C16.3876 14.3167 15.5225 15.3709 14.4124 16.1126C13.3024 16.8543 11.9973 17.2502 10.6623 17.2502C8.87272 17.2482 7.15699 16.5364 5.89155 15.271C4.6261 14.0056 3.91431 12.2898 3.91232 10.5002Z"
                  fill="#667185"
                />
              </svg>
              <input
                className="bg-background appearance-none outline-none py-[0.75rem] w-[20rem] 2xl:w-[25rem] pl-[2.75rem] rounded-sm placeholder:text-[#647995] placeholder:font-light"
                type="text"
                placeholder="Search"
              />
            </fieldset>
          </div>

          <ul className="flex gap-x-6">
            {navBarNavigation.map((item, index) => (
              <li
                className="flex flex-col items-center gap-y-[0.5rem]"
                key={index}
              >
                <item.icon className="w-6 h-6 text-gray-600" />
                <a
                  href="#"
                  className="text-[#647995] text-sm leading-tight text-center break-words hyphens-auto"
                >
                  {item.title}
                </a>
              </li>
            ))}

            <li className="flex flex-col items-center gap-y-[0.5rem]">
              <button className="bg-[#0D6EFD] hover:bg-[#0D6EFD]/80 transition-colors duration-100 ease-out text-white text-sm leading-[1.375rem] px-[1.5rem] py-[0.5rem] rounded-sm h-[2.5rem] mt-1.5">
                Subscribe
              </button>
            </li>
            <li className="flex flex-col items-center gap-y-[0.5rem]">
              <Bell className="w-6 h-6" />
              <a href="#" className="text-[#647995] text-sm leading-[1.375rem]">
                Notification
              </a>
            </li>
            <li className="flex flex-col items-center gap-y-[0.5rem]">
              <Basket className="w-6 h-6" />
              <a href="#" className="text-[#647995] text-sm leading-[1.375rem]">
                Carts
              </a>
            </li>
            <li className="flex flex-col items-center gap-y-[0.5rem]">
              <PlusSquare className="w-6 h-6" />
              <a href="#" className="text-[#647995] text-sm leading-[1.375rem]">
                Create
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main className="flex items-start container mx-auto max-w-full px-[2.5rem] gap-x-12">
        <div className="w-[300px] bg-white shrink-0 rounded-sm p-6 h-[50rem]">
          <ul className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-3">
              {sideBarNavigation.map((item, index) => (
                <li
                  role="button"
                  className="p-4 flex items-center cursor-pointer gap-x-[0.5rem] font-medium leading-6 text-[#647995] tracking-[-0.02em]"
                  key={index}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon />
                  </motion.div>
                  <a href="#" className="leading-6 text-sm">
                    {item.title}
                  </a>
                </li>
              ))}
            </div>
            <li>
              <div
                role="button"
                className="flex hover:bg-[#E4E7EB] transition-colors duration-300 cursor-pointer items-center justify-between gap-x-[0.5rem] bg-[#F0F2F5] h-[5.375rem] p-4 rounded-sm"
              >
                <div className="flex items-center gap-x-[0.5rem]">
                  <div className="w-[3.125rem] h-[3.125rem] bg-[#0D6EFD] rounded-[0.25rem] flex items-center justify-center">
                    <p className="text-white text-[1.25rem] leading-[1.5rem] text-base">
                      Go
                    </p>
                  </div>
                  <p className="text-sm leading-[1.375rem] text-[#647995]">
                    Personal Account
                  </p>
                </div>

                <CaretUpDown />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
};

export default AppLayout;
