const INITIAL_STATE = {mood: '(￣ー￣)'};
const moodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'HAPPY':
            return {...state, mood: '^ω^'}
        case 'SAD':
            return {...state, mood: '⊙︿⊙'}
        case 'ANGRY':
            return {...state, mood: 'ノಠ_ಠノ'}
        case 'CONFUSED':
            return {...state, mood: '℃ↂ_ↂ'}
        case 'SCARED':
            return {...state, mood: 'ゞ◎Д◎ヾ'}
        case 'MONKE':
            return {...state, mood: '@・ꈊ・@'}
        case 'RESET':
            return {...state, mood: '(￣ー￣)'}
    }
    return state;
}

const store = Redux.createStore(moodReducer);

const h1 = document.querySelector('h1');
const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const angryBtn = document.querySelector('#angry');
const confusedBtn = document.querySelector('#confused');
const scaredBtn = document.querySelector('#scared');
const monkeBtn = document.querySelector('#monke');
const reset = document.querySelector('#reset');

happyBtn.addEventListener('click', function(e){
    store.dispatch({type: "HAPPY"});
    const state = store.getState();
    h1.innerText = state.mood;
});

sadBtn.addEventListener('click', function(e){
    store.dispatch({type: "SAD"});
    const state = store.getState();
    h1.innerText = state.mood;
});

angryBtn.addEventListener('click', function(e){
    store.dispatch({type: "ANGRY"});
    const state = store.getState();
    h1.innerText = state.mood;
});

confusedBtn.addEventListener('click', function(e){
    store.dispatch({type: "CONFUSED"});
    const state = store.getState();
    h1.innerText = state.mood;
});

scaredBtn.addEventListener('click', function(e){
    store.dispatch({type: "SCARED"});
    const state = store.getState();
    h1.innerText = state.mood;
});

monkeBtn.addEventListener('click', function(e){
    store.dispatch({type: "MONKE"});
    const state = store.getState();
    h1.innerText = state.mood;
});

reset.addEventListener('click', function(e){
    store.dispatch({type: "RESET"});
    const state = store.getState();
    h1.innerText = state.mood;
})