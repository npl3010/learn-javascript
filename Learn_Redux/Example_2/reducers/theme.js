const initialState = {
    currentTheme: 'light',
    bgColor: '#eee',
    txtColor: '#000'
};


const themeReducer = (state = initialState, action = { type: '' }) => {
    switch (action.type) {
        case 'SET_THEME_TO_DARK': {
            return {
                currentTheme: 'dark',
                bgColor: '#000',
                txtColor: '#fff'
            };
        }
        case 'SET_THEME_TO_LIGHT': {
            return {
                currentTheme: 'light',
                bgColor: '#eee',
                txtColor: '#000'
            };
        }
        default: {
            return state;
        }
    }
};

export default themeReducer;