import React from "react";

import { Container } from "./styles";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

import { NavLink } from "react-router-dom";

const Pagination = ({ paginate, totalPages, page, loading }) => {
  // const pageNumbers = []
  // let i = 1

  // if (totalPages <= 5) {
  //   while (totalPages >= i) {
  //     pageNumbers.push(i)
  //     i++
  //   }
  // } else {
  //   while (i <= 5) {
  //     pageNumbers.push(i)
  //     i++
  //   }
  // }

  return (
    <Container>
      <nav>
        <ul>
          {loading ? (
            <li>
              <button>
                <span>
                  <MdOutlineNavigateBefore />
                </span>
                <span>Loading</span>
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => paginate(page - 1)}
                disabled={page <= 1 ? true : false}
              >
                <span>
                  <MdOutlineNavigateBefore />
                </span>
                <span>Anterior</span>
              </button>
            </li>
          )}

          {loading ? (
            <li>
              <button>
                <span>Loading</span>
                <span>
                  <MdOutlineNavigateBefore />
                </span>
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => paginate(page + 1)}
                disabled={page >= totalPages ? true : false}
              >
                <span>Próximo</span>
                <span>
                  <MdOutlineNavigateNext />
                </span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Pagination;
