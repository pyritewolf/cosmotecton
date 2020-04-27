import React, {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';

import { Card } from 'components/general';

import styles from './styles.module.scss';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, onClickOutside) {
    useEffect(() => {
        if (!ref) return;

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) 
                onClickOutside();
        }
  
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}
  

function Dialog({children, open, onClose, cols = 6}) {
    const [display, setDisplay] = useState(open);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, onClose);

    useEffect(() => {
        if (open) 
            setDisplay(open);
        else 
            setTimeout(() => {
                setDisplay(open);
            }, 300);
    }, [open])

  return (
    <div className={classNames(styles.root, open && styles.open, !open && display && styles.display)}>
        <div className={classNames(styles.grid, styles[`cols${cols}`])}>
            <Card ref={wrapperRef}>
                <i onClick={onClose} className={classNames(styles.icon, 'las','la-times')}></i>
                {children}
            </Card>
        </div>
    </div>
  );
}

export default Dialog;