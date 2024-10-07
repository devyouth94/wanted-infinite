import { useEffect, useState } from "react";

import { getMockData } from "~/mocks/api";
import { MockData } from "~/mocks/types";

const useGetMockData = (page: number) => {
  const [data, setData] = useState<Array<MockData>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchMockData = async () => {
      const result = await getMockData(page);
      const { datas, isEnd } = result as {
        datas: Array<MockData>;
        isEnd: boolean;
      };

      setData((prev) => [...prev, ...datas]);
      setIsLoading(false);
      setIsEnd(isEnd);
    };

    fetchMockData();
  }, [page]);

  return { data, isLoading, isEnd };
};

export default useGetMockData;
