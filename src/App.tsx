import React from "react";
import PostsList from "./components/PostsList/PostsList";
import FiltersSelect from "./components/FiltersSelect/FiltersSelect";
import useGetList from "./hooks/useGetList";
import { ItemProps } from "./interfaces/interfaces";

function App() {
  const [filterParam, setFilterParam] = React.useState<string>("");

  const { data: fetchedData, status } = useGetList(
    "https://jsonplaceholder.typicode.com/posts",
    "postsList",
  );
  const { data: fetchedUsersData } = useGetList(
    "https://jsonplaceholder.typicode.com/users",
    "usersList",
  );

  const filterData = (
    data: Array<ItemProps>,
    value: string,
  ): Array<ItemProps> | undefined => {
    if (data?.length > 0) {
      const copiedData = [...data];

      if (!value) {
        return copiedData;
      } else {
        return copiedData.filter(
          (item: ItemProps) => item.userId === Number(value),
        );
      }
    }
  };

  const filteredData = filterData(fetchedData, filterParam);

  return (
    <div className="container mx-auto px-6">
      <FiltersSelect
        filterParam={filterParam}
        setFilterParam={setFilterParam}
        fetchedUsersData={fetchedUsersData}
      />
      <PostsList filteredData={filteredData} status={status} />
    </div>
  );
}

export default App;
