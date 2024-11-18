interface ActionCardProps {
  title: string;
  bgColor: string;
  buttonStyle: "primary" | "inverse";
  textColor: string;
}

export default function ActionCards() {
  return (
    <div className="flex items-center gap-x-[0.25rem]">
      <ActionCard title="Activities" bgColor="bg-[#000031]" textColor="text-white" buttonStyle="primary" />
      <ActionCard title="Hotels" bgColor="bg-[#E7F0FF]" textColor="text-black" buttonStyle="primary" />
      <ActionCard title="Flights" bgColor="bg-[#0D6EFD]" textColor="text-white" buttonStyle="inverse" />
    </div>
  );
}

function ActionCard({ title, bgColor, buttonStyle, textColor }: ActionCardProps) {
  return (
    <div className={`${bgColor} transition-all duration-300 rounded-[0.25rem] inline-flex flex-col gap-y-2 w-[16.875rem] py-3.5 px-4`}>
      <h2 className={`${textColor} font-medium text-sm leading-[1.375rem]`}>
        {title}
      </h2>
      <p className={`text-left leading-[1.375rem] tracking-[-0.02em] text-sm ${textColor}`}>
        Build, personalize, and optimize your itineraries with our trip planner.
      </p>
      <div className="mt-[2.313rem]">
        <button className={`${
          buttonStyle === 'primary' 
            ? 'text-white bg-[#0D6EFD] hover:bg-[#0D6EFD]/80' 
            : 'text-[#0D6EFD] bg-white hover:bg-white/90'
        } transition-all duration-300 py-3 px-6 w-full rounded-[0.25rem] font-medium text-sm leading-[1.375rem]`}>
          Add {title}
        </button>
      </div>
    </div>
  );
} 