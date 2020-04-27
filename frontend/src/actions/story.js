import history from '../history';
import { createStory as createStoryAPI } from 'api/worlds';

const SET_STORY = 'SET_STORY';

export const createStory = (world) => async (dispatch, getState) => {
    const story = await createStoryAPI({
        world: world.id,
        title: `A tale of ${world.name}`,
        owner: getState().auth.id,
    });
    dispatch({ type: SET_STORY, payload: story });
    history.push(`/${world.id}/story/${story.id}`)
};

export { SET_STORY };