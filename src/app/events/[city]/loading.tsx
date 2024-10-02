import SkeletonCard from "@/components/skeleton-card";

const Loading = () => {
  return (
    <div className="flex flex-wrap max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((_item, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
};

export default Loading;
