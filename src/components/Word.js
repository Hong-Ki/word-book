import React, {Component} from 'react';
import PropTypes from 'prop-types';

//style
import styles from '../style/word.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Word extends Component {
    static propTypes = {
        word : PropTypes.string
    }

    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    componentDidMount(prevProps, prevState, snapshot) {
        const current = this.ref.current;
        
        if (current.offsetWidth > current.parentElement.offsetWidth ) {
            current.className = cx('overflowText');
        }

    }

    render() {
        const { word,mode } = this.props;

        return (
            <div
                className={cx( mode!=='TEST' ? 'word' : ['word','first'] )}
            >
                <div>
                    <span
                        ref={this.ref}
                    >
                        {word}
                    </span>
                </div>
            </div>
        )
    }
}

export default Word;