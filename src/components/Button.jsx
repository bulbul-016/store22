import React from 'react';
import classNames from 'classnames';

function Button(props){
    return (
        <button
            // onClick={props.click}
            onClick={props.yourclick}
            className={classNames('button', props.className, {
                'button--outline': props.outline
            })}>
            {props.children}
        </button>
    );
}

// function Button({yourclick, className, outline, children}){
//     return (
//         <button
//             // onClick={props.click}
//             onClick={yourclick}
//             className={classNames('button', className, {
//                 'button--outline': outline
//             })}>
//             {children}
//         </button>
//     );
// }

export default Button;
