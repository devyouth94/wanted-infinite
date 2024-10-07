type CardSkeletonProps = {
  count?: number;
};

const CardSkeleton = ({ count = 5 }: CardSkeletonProps) => {
  return Array.from({ length: count }).map((_, index) => (
    <article
      key={index}
      className="h-28 animate-pulse rounded-md bg-gray-200"
    />
  ));
};

export default CardSkeleton;
