import { useState } from "react";

import Card from "~/components/card";
import CardSkeleton from "~/components/card/index.skeleton";

import useIntersectionObserver from "~/hooks/use-intersection-observer";
import useGetMockData from "~/queries/use-get-mock-data";

const App = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isEnd } = useGetMockData(page);

  const loadingRef = useIntersectionObserver((entry, observer) => {
    observer.unobserve(entry.target);

    if (!isEnd) {
      setPage((prev) => prev + 1);
    }
  });

  return (
    <main className="min-h-dvh">
      <section className="mx-auto w-1/2 min-w-[400px] space-y-4 py-4">
        {data.map((item) => (
          <Card key={item.productId} item={item} />
        ))}

        {!isLoading && !isEnd && <article ref={loadingRef} />}
        {isLoading && <CardSkeleton />}
      </section>
    </main>
  );
};

export default App;
