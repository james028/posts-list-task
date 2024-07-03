import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type useGetListProps = { data: Array<any>; status: string };

const useGetList = (
  url: string,
  queryKey: string,
): {
  data: any | undefined;
  status: "error" | "success" | "pending";
} => {
  const getList = async (): Promise<any> => {
    const response = await axios.get<string>(url);
    return response.data;
  };

  // @ts-ignore
  const { data, status } = useQuery<any>({
    queryKey: [queryKey],
    queryFn: () => getList(),
  });

  return { data, status };
};
export default useGetList;
