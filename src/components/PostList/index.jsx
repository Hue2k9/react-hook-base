import React, { useEffect, useState } from "react";
import axios from "axios";
import PostListAction from "./PostListAction";
import Pagination from "../Pagination";
import queryString from "query-string";
import PostFilterForm from "./PostFilterForm";

export default function PostList() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    // _title_like: ''
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const res = await axios.get(
          `https://js-post-api.herokuapp.com/api/posts?${paramString}`
        );
        const data = res.data.data;
        const pagination = res.data.pagination;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        return [];
      }
    }

    fetchPostList();
  },[filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
    console.log(filters)
  }

  function handleFiltersChange(newFilters){
    console.log("new filter: ", newFilters);
    setFilters({
        ...filters,
        _page: 1,
        title_like: newFilters.searchTerm
      });
  }

  return (
    <div>
      <PostFilterForm onSubmit={handleFiltersChange}/>
      <PostListAction posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}
