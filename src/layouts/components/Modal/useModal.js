import { useState } from 'react';

function useModal() {
    const [isShowing, setIsShowing] = useState(false);

    // function showModal() {
    //     setIsShowing(true);
    // }

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    };
}

export default useModal;
