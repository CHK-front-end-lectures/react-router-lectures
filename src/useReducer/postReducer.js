export function reducer(state, action) {
  console.log('action', action);
  switch (action.type) {
    case 'get_posts': {
      return {
        ...state,
        posts: action.data,
      };
    }
    case 'add_post': {
      return {
        ...state,
        posts: [action.data, ...state.posts],
      };
    }
    case 'edit_post': {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.data.id) {
            return {
              id: action.data.id,
              title: action.data.title,
              body: action.data.body,
              userId: action.data.userId,
            };
          } else {
            return post;
          }
        }),
      };
    }
    case 'delete_post': {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id),
      };
    }
    default: {
      return initialState;
    }
  }
}

export const initialState = { posts: [] };
