const initState = {
    post: []
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return {
                post: state.post.concat([action.post])
            };
        default:
            return state;
    }
};

export default postReducer;
