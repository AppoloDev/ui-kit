import React from "react";
import PropTypes from 'prop-types';

function Pagination(args) {
    const type = typeof args.type === 'undefined' || args.type === 'default' ? 'default' : 'slide'

    if (type === 'slide') {
        return (
            <nav aria-label="Page navigation example">
                <ul class="pagination slide">
                    <li class="pagination--item">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 class="feather feather-chevron-left">
                                <polyline points="15 18 9 12 15 6"/>
                            </svg>
                        </a>
                    </li>
                    <li class="pagination--item active">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 class="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="pagination--item"><a href="#">Précédent</a></li>
                <li class="pagination--item active"><a href="#">1</a></li>
                <li class="pagination--item"><a href="#">2</a></li>
                <li class="pagination--item"><a href="#">3</a></li>
                <li class="pagination--item disabled"><a href="#">Suivant</a></li>
            </ul>
        </nav>
    )


}

Pagination.propTypes = {
    type: PropTypes.oneOf(['default', 'slide']),
}

export default Pagination;
