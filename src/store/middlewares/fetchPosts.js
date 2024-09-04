export const fetchPosts = () => {
  return async (dispatch, getState) => {
    //Call API
    //Khi nào có dữ liệu trả về ==> dispatch để cập nhật state trên store
    // console.log(dispatch);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    dispatch({
      type: "posts/update",
      payload: data,
    });
  };
};
//Hàm fetchPosts được coi là Action Creator
